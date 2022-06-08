const express = require("express");
const router = express.Router();

const errorController = require("../controllers/errorController");

router.get("/404", errorController.errorPageHandler);

module.exports = router;
