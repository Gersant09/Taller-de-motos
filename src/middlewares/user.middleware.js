const User = require('../models/user.model');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.resumUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findOne({
    where: {
      id,
      status: 'available',
    },
  });
  if (!user) {
    return next(
      new AppError(`Cant find ${req.originalUrl} on this server`, 404)
    );
  }
  user.req = user;
  next();
});

exports.existUserEmail = catchAsync(async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({
    where: {
      email: email.toLowerCase(),
      status: 'available',
    },
  });
  if (!user) {
    return next(new AppError(`User with email: ${email} not found`, 404));
  }
  req.user = user;
  next();
});
