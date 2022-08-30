const logger = (req, res, next) => {
  console.log(req.originalUrl);
  console.log(req.params)
  next();
}

module.exports = logger;
