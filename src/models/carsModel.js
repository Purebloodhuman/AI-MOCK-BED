// MKHANT.25@ichat.sp.edu.sg admin No. 2534101 DIT/FT/1B/04

const pool = require("../services/db");

module.exports.insertSingle = (data, callback) => {
  const SQLSTATEMENT = `INSERT INTO Car (model, year, mileage, owner_id) VALUES (?, ?, ?, ?);`;
  const VALUES = [data.model, data.year, data.mileage, data.owner_id];
  pool.query(SQLSTATEMENT, VALUES, callback);
};

module.exports.deleteById = (data, callback) => {
  const SQLSTATEMENT = `DELETE FROM Car WHERE id = ?;`;
  const VALUES = [data.id];
  pool.query(SQLSTATEMENT, VALUES, callback);
};

module.exports.updateById = (data, callback) => {
  const SQLSTATEMENT = `UPDATE Car SET model = ?, year = ?, mileage = ?, owner_id = ? WHERE id = ?;`;
  const VALUES = [data.model, data.year, data.mileage, data.owner_id, data.id];
  pool.query(SQLSTATEMENT, VALUES, callback);
};

module.exports.selectById = (data, callback) => {
  const SQLSTATEMENT = `SELECT * FROM Car WHERE id = ?;`;
  const VALUES = [data.id];
  pool.query(SQLSTATEMENT, VALUES, callback);
};
