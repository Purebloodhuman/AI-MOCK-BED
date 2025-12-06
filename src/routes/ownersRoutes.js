// MKHANT.25@ichat.sp.edu.sg admin No. 2534101 DIT/FT/1B/04
// ##############################################################
// REQUIRE MODULES
// ##############################################################
const express = require("express");
const controller = require("../controllers/ownersController");

// ##############################################################
// CREATE ROUTER
// ##############################################################
const router = express.Router();

// ##############################################################
// DEFINE ROUTES
// ##############################################################
router.put(
  "/:ownerId/cars/:carId/service",
  controller.verifyOwnership,
  controller.serviceCar
);
// router.get("/:searchName/trees/3-oldest", controller.threeOldestTreesByName);
// router.get("/:id/trees/average-age", controller.averageTreeAgeByUserId);
router.get("/:ownerId/cars", controller.readCarsByOwnerId);
// router.put(
//   "/:userId/trees/:treeId/water",
//   controller.verifyOwnerShip,
//   controller.updateWaterByUserAndPlayerId
// );

// ##############################################################
// EXPORT ROUTER
// ##############################################################
module.exports = router;
