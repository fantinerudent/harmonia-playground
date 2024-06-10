const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const {
  getAllStudents,
  getOneStudentById,
  createStudent,
  updateAStudent,
  deleteAStudent,
} = require("../../../controllers/StudentActions");
const { gentilleMiddleware } = require("../../../services/test-middlewares");

router.use(gentilleMiddleware);

// Route to get a list of items
router.get("/", getAllStudents);

// Route to get a specific item by ID
router.get("/:id", getOneStudentById);

// Route to add a new item
router.post("/", createStudent);

router.post("/:id", updateAStudent);

router.delete("/:id", deleteAStudent);

/* ************************************************************************* */

module.exports = router;
