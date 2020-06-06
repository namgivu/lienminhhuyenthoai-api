const express = require("express");
const router = express.Router();

const helloController = require("../controller/hellloController");

router.get("/:name", helloController.hello);

module.exports = router;
