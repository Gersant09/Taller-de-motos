exports.validUser = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({
      message: "The name of user is required",
    });
  }
  next();
};
