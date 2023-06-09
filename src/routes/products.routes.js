const express = require("express");
const usersController = require('../controllers/users.controller')

const router = express.Router();

const validationMiddleware = require('./../middlewares/validations.middleware')



router.route("/").get(usersController.getUsers).post(validationMiddleware.validUser, usersController.createUsers)

router.route("/:id").get(usersController.getUser).patch(usersController.createUsers).delete(usersController.deleteUsers )



module.exports = router;