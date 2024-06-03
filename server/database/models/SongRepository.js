const AbstractRepository = require("./AbstractRepository");

class SongRepository extends AbstractRepository {
  constructor() {
    super({ table: "song" });
  }

  // METHODE CRUD;

  async readAll() {
    const [rows] = await this.database.query(`SELECT * from ${this.table}`);
    return rows;
  }
}

module.exports = SongRepository;
