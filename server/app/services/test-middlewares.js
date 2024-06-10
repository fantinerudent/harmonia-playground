const gentilleMiddleware = (req, res, next) => {
  req.body.toto = "carotte!!!";
  next();
};

module.exports = {
  gentilleMiddleware,
};
