// MKHANT.25@ichat.sp.edu.sg admin No. 2534101 DIT/FT/1B/04

const model = require("../models/carsModel.js");

module.exports.createNewCar = (req, res, next) => {
  if (
    req.body.model == undefined ||
    req.body.year == undefined ||
    req.body.mileage == undefined ||
    req.body.owner_id == undefined
  ) {
    res.status(400).json({
      message: "Missing required data.",
    });
    return;
  }

  const data = {
    model: req.body.model,
    year: req.body.year,
    mileage: req.body.mileage,
    owner_id: req.body.owner_id,
  };
  const callback = (error, results, fields) => {
    if (error) {
      console.error("Error createNewCar:", error);
      res.status(500).json({
        message: "Internal server error.",
      });
    } else {
      res.status(201).json({
        message: "Car registered successfully.",
        carId: results.insertId,
      });
    }
  };
  model.insertSingle(data, callback);
};

module.exports.deleteCarById = (req, res, next) => {
  const data = { id: req.params.id };
  const callback = (error, results, fields) => {
    if (error) {
      console.error("Error deleteUserById:", error);
      res.status(500).json({
        message: "Internal server error.",
      });
    } else {
      if (results.affectedRows == 0) {
        res.status(404).json({ message: "Car not found" });
      } else res.status(204).send();
    }
  };
  model.deleteById(data, callback);
};

module.exports.updateCarById = (req, res, next) => {
  if (
    req.body.model == undefined ||
    req.body.year == undefined ||
    req.body.mileage == undefined ||
    req.body.owner_id == undefined
  ) {
    res.status(400).json({
      message: "Missing required data.",
    });
    return;
  }

  const data = {
    model: req.body.model,
    year: req.body.year,
    mileage: req.body.mileage,
    owner_id: req.body.owner_id,
    id: req.params.id,
  };
  const callback = (error, results, fields) => {
    if (error) {
      console.error("Error updateCarById:", error);
      res.status(500).json(error);
    } else {
      if (results.affectedRows == 0) {
        res.status(404).json({ message: "Car not found" });
      } else res.status(204).send();
    }
  };
  model.updateById(data, callback);
};

module.exports.readCarById = (req, res, next) => {
  const data = { id: req.params.id };
  const callback = (error, results, fields) => {
    if (error) {
      console.error("Error readCarById:", error);
      res.status(500).json(error);
    } else {
      if (results.length == 0) {
        res.status(404).json({ message: "Car not found" });
      } else res.status(200).json(results[0]);
    }
  };
  model.selectById(data, callback);
};
