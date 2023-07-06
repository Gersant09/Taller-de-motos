const Repair = require('../models/repair.model');
const catchAsync = require('../utils/catchAsync');

exports.resumRepair = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const repair = await Repair.findOne({
    where: {
      id,
      status: 'pending',
    },
  });
  if (!repair) {
    return next(new AppError(`Repair with id: ${id} no found`, 404));
  }
  req.repair = repair;
  next();
});
