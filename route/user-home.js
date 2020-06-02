const express = require("express");

const homeController = require("../controller/homeController");

const router = express.Router();

router.get("/health", homeController.getDataHomePage);

module.exports = router;
