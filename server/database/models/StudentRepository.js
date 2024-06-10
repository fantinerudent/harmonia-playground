const AbstractRepository = require("./AbstractRepository");

class StudentRepository extends AbstractRepository {
  constructor() {
    super({ table: "student" });
  }

  async createIntoDB(student) {
    const [result] = await this.database.query(
      `insert into student ( email, lastname, firstname, password) values (?, ?, ?, ?)`,
      [student.email, student.lastname, student.firstname, student.password]
    );

    return result.insertId;
  }

  async readFromDBWithId(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );
    return rows[0];
  }

  async readAllFromDB() {
    const [rows] = await this.database.query(`select * from ${this.table}`);
    return rows;
  }

  // The U of CRUD - Update operation

  async updateIntoDB(student, id) {
    const [result] = await this.database.query(
      `update ${this.table} set email = ?, lastname = ?, firstname = ?, password = ?  where id = ?`,
      [student.email, student.lastname, student.firstname, student.password, id]
    );
    return result.affectedRows;
  }

  async deleteFromDB(id) {
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    return result.affectedRows;
  }
}

module.exports = StudentRepository;
