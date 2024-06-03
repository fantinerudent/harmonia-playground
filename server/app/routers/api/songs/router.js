const express = require("express");

const router = express.Router();

const { browse } = require("../../../controllers/songActions");

router.get("/", browse);

module.exports = router;
