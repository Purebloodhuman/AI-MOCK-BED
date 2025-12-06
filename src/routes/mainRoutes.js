// MKHANT.25@ichat.sp.edu.sg admin No. 2534101 DIT/FT/1B/04
// ##############################################################
// REQUIRE MODULES
// ##############################################################
const express = require("express");

// ##############################################################
// CREATE ROUTER
// ##############################################################
const router = express.Router();

// ##############################################################
// DEFINE ROUTES
// ##############################################################
const carsRoutes = require("./carsRoutes");
const ownersRoutes = require("./ownersRoutes");

router.use("/cars", carsRoutes);
router.use("/owners", ownersRoutes);

// ##############################################################
// EXPORT ROUTER
// ##############################################################
module.exports = router;
