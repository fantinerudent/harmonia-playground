// Import access to database tables
const tables = require("../../database/tables");

const getAllStudents = async (req, res, next) => {
  if (req.body.toto) {
    console.info(`GET ALL : j'ai bien récupéré toto ici !`);
  }
  try {
    const students = await tables.student.readAllFromDB();
    res.json(students);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const getOneStudentById = async (req, res, next) => {
  if (req.body.toto) {
    console.info(` GET ONE BY ID : j'ai bien récupéré toto ici !`);
  }
  try {
    const student = await tables.student.readFromDBWithId(req.params.id);
    if (student == null) {
      res.sendStatus(404);
    } else {
      res.json(student);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const createStudent = async (req, res, next) => {
  if (req.body.toto) {
    console.info(`j'ai bien récupéré toto ici !`);
  }
  console.info(req.body);
  const student = req.body;
  try {
    const insertId = await tables.student.createIntoDB(student);
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const updateAStudent = async (req, res, next) => {
  const student = req.body;
  const { id } = req.params;
  try {
    const updatedRow = await tables.student.updateIntoDB(student, id);
    res.status(201).json({ updatedRow });
  } catch (error) {
    next(error);
  }
};

const deleteAStudent = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedRow = await tables.student.deleteFromDB(id);
    res.status(201).json({ updatedRow });
  } catch (err) {
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  getAllStudents,
  getOneStudentById,
  createStudent,
  updateAStudent,
  deleteAStudent,
};
