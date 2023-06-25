const express = require('express');
const repairController = require('./../controllers/repairs.controller');
const router = express.Router();
const authMiddleware = require('./../middlewares/auth.middleware');

const validationMiddleware = require('./../middlewares/validations.middleware');
const repairMiddleware = require('./../middlewares/repair.middleware');

router.use(authMiddleware.protect);

router
  .route('/')
  .get(authMiddleware.restrictTo('employee'), repairController.findAllRepair)
  .post(validationMiddleware.createRepairValidation, repairController.create);

router
  .use('/:id', repairMiddleware.resumRepair)
  .route('/:id')
  .get(authMiddleware.restrictTo('employee'), repairController.findRepair)
  .patch(validationMiddleware.updateRepairValidation, repairController.update)
  .delete(repairController.delete);

module.exports = router;
