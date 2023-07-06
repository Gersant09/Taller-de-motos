const express = require('express');
const usersController = require('./../controllers/users.controller');
const authMiddleware = require('./../middlewares/auth.middleware');

const router = express.Router();

const validationMiddleware = require('./../middlewares/validations.middleware');
const userMiddleware = require('./../middlewares/user.middleware');

router
  .route('/')
  .get(authMiddleware.protect, usersController.findAllUsers)
  .post(
    validationMiddleware.createLoginValidation,
    usersController.createUsers
  );

router.post('/login', userMiddleware.existUserEmail, usersController.login);

router.use(authMiddleware.protect);

router
  .use(userMiddleware.resumUser)
  .route('/:id')
  .get(usersController.findUser)
  .patch(
    authMiddleware.protectAccountOwner,
    validationMiddleware.updateUserValidation,
    usersController.update
  )
  .delete(authMiddleware.protectAccountOwner, usersController.delete);

module.exports = router;
