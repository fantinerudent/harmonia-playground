const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const songs = await tables.song.readAll();

    res.json(songs);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
};
