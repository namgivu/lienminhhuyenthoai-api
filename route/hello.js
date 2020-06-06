const express = require("express");
const router = express.Router();
const appRoot = require("app-root-path");

const helloController = require(appRoot + "/controller/hellloController");

router.get("/:name", helloController.hello);

module.exports = router;
