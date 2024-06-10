const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

const studentsRouter = require("./students/router");

router.use("/students", studentsRouter);

/* ************************************************************************* */

module.exports = router;
