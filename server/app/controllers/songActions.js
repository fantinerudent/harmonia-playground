const tables = require("../../database/tables");

// ICI ON METTRA LE BREAD.

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
