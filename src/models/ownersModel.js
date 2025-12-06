// MKHANT.25@ichat.sp.edu.sg admin No. 2534101 DIT/FT/1B/04

const pool = require("../services/db");

module.exports.checkCarOwnership = (carId, ownerId, callback) => {
  const SQLStatement = `SELECT owner_id FROM Car WHERE id = ?`;
  pool.query(SQLStatement, [carId], (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      if (results.length === 0) {
        callback(null, null); // Tree not found
      } else {
        const isOwner = results[0].owner_id == ownerId;
        callback(null, isOwner);
      }
    }
  });
};

module.exports.serviceCar = (carId, callback) => {
  const SQLStatement = `
    UPDATE Car
    SET last_serviced = CURRENT_TIMESTAMP 
    WHERE id = ?
  `;
  pool.query(SQLStatement, [carId], callback);
};

module.exports.selectByOwnerId = (data, callback) => {
  const SQLSTATEMENT = `SELECT * FROM Car WHERE owner_id = ?;`;
  const VALUES = [data.ownerId];
  pool.query(SQLSTATEMENT, VALUES, callback);
};

module.exports.selectOwnerCarStats = (ownerId, callback) => {
  const SQLStatement = `
    SELECT 
      FORMAT(AVG(mileage), 2) as averageMileage, 
      COUNT(*) as numberOfCars 
    FROM Car
    WHERE owner_id = ?
  `;
  pool.query(SQLStatement, [ownerId], callback);
};
