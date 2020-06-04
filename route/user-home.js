const express = require("express");

const homeController = require("../controller/homeController");  //TODO Kien please use absolute path

const router = express.Router();

router.get("/health", homeController.getDataHomePage);

module.exports = router;
