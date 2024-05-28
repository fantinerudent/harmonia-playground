const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { browse } = require("../../../controllers/itemActions");

router.get("/", browse);

module.exports = router;
