const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

// Get variables from .env file for database connection
const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

// Create a connection pool to the database
const mysql = require("mysql2/promise");

const client = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

client.checkConnection = () => {
  // Try to get a connection to the database
  client
    .getConnection()
    .then((connection) => {
      console.info(`Using database ${DB_NAME}`);

      connection.release();
    })
    .catch((error) => {
      console.warn(
        "Warning:",
        "Failed to establish a database connection.",
        "Please check your database credentials in the .env file if you need a database access."
      );
      console.warn(error.message);
    });
};

// Store database name into client for further uses
client.databaseName = DB_NAME;

// CONNECTION A LA BASE DE DONNEES OK !

const getAllStudents = async (req, res) => {
  try {
    const [students] = await client.query("SELECT * from student");
    res.json(students);
  } catch (error) {
    console.error(error);
  }
};

const getOneStudentById = async (req, res) => {
  const { id } = req.params;
  try {
    const [student] = await client.query(
      "SELECT * from studennt WHERE id = ?",
      [id]
    );
    res.json(student);
  } catch (error) {
    console.error(error);
  }
};

const createStudent = async (req, res) => {
  const { email, lastname, firstname, password } = req.body;

  try {
    const [result] = await client.query(
      `insert into student ( email, lastname, firstname, password) values (?, ?, ?, ?)`,
      [email, lastname, firstname, password]
    );
    res.json(result.insertId);
  } catch (error) {
    res.json(error);
  }
};

router.get("/students", getAllStudents);
router.get("/students/:id", getOneStudentById);
router.post("/students", createStudent);
// router.post("/students/:id", updateOneStudentById);
/* ************************************************************************* */

module.exports = router;
