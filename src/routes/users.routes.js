const express = require('express');
const usersController = require('./../controllers/users.controller');

const router = express.Router();

//const validationMiddleware = require('../middlewares/validations.middleware');

router
  .route('/')
  .get(usersController.findAllUsers)
  .post(usersController.createUsers);

router
  .route('/:id')
  .get(usersController.findUser)
  .patch(usersController.update)
  .delete(usersController.delete);

module.exports = router;
