const express = require("express");
const repairController = require("./../controllers/repairs.controller");
const router = express.Router();
const validationMiddleware = require("../middlewares/validations.middleware");

router
  .route("/")
  .get(repairController.getRepairs)
  .post(validationMiddleware.validUser, repairController.createRepairs);

router
  .route("/:id")
  .get(repairController.getRepair)
  .patch(repairController.createRepairs)
  .delete(repairController.deleteRepairs);

module.exports = router;
