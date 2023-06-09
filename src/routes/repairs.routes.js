const express = require("express");
const repairController = require("./../controllers/repairs.controller")
const router = express.Router();



router.route("/").get(repairController.getRepairs).post(repairController.createRepairs)

router.route("/:id").get(repairController.getRepair).patch(repairController.createRepairs).delete(repairController.deleteRepairs )
