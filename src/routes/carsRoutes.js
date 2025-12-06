// MKHANT.25@ichat.sp.edu.sg admin No. 2534101 DIT/FT/1B/04
// ##############################################################
// REQUIRE MODULES
// ##############################################################
const express = require("express");

const controller = require("../controllers/carsController");

// ##############################################################
// CREATE ROUTER
// ##############################################################
const router = express.Router();

// ##############################################################
// DEFINE ROUTES
// ##############################################################
router.get("/:id", controller.readCarById);
router.post("/", controller.createNewCar);
router.delete("/:id", controller.deleteCarById);
router.put("/:id", controller.updateCarById);

// ##############################################################
// EXPORT ROUTER
// ##############################################################
module.exports = router;
