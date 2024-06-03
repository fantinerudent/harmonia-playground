const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

const songsRouter = require("./songs/router");

router.use("/songs", songsRouter);
/* ************************************************************************* */

module.exports = router;
