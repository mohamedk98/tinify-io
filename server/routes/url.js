//URL shorten and redirecting
const express = require("express");
const router = express.Router();

const urlController = require("../controllers/urlController");

router.post("/api/addUrl", urlController.addUrl);
router.get("/:urlId", urlController.getUrl);

module.exports = router
