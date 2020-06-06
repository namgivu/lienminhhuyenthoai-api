const express = require("express");
const appRoot = require("app-root-path");

const homeController = require(appRoot + "/controller/homeController");

const router = express.Router();

router.get("/health", homeController.getDataHomePage);

module.exports = router;
