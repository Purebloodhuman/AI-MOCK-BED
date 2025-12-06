// MKHANT.25@ichat.sp.edu.sg admin No. 2534101 DIT/FT/1B/04

const model = require("../models/ownersModel.js");

// Middleware: Verify Ownership
module.exports.verifyOwnership = (req, res, next) => {
  const ownerId = req.params.ownerId;
  const carId = req.params.carId;

  model.checkCarOwnership(carId, ownerId, (err, isOwner) => {
    if (err) return res.status(500).json({ message: "Internal server error." });

    if (isOwner === null) {
      return res.status(404).json({ message: "Car not found." });
    }

    if (!isOwner) {
      return res.status(403).json({ message: "Car does not belong to owner." });
    }

    next();
  });
};

module.exports.serviceCar = (req, res) => {
  const carId = req.params.carId;
  model.serviceCar(carId, (err, result) => {
    if (err) return res.status(500).json({ message: "Internal server error." });
    res.status(204).send();
  });
};

module.exports.readCarsByOwnerId = (req, res, next) => {
  const data = { ownerId: req.params.ownerId };
  const callback = (error, results, fields) => {
    if (error) {
      console.error("Error readCarsByOwnerId:", error);
      res.status(500).json(error);
    } else {
      if (results.length == 0) {
        res.status(404).json({ message: "Cars not found" });
      } else res.status(200).json(results);
    }
  };
  model.selectByOwnerId(data, callback);
};
