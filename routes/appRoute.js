const express = require("express");

const studentController = require("../controller/studentController");

const appRoute = express.Router();

appRoute.post("/students", studentController.createStudent);
appRoute.get("/students", studentController.getstudentData);
appRoute.get("/students/:id", studentController.getstudentDataById);
appRoute.patch("/students/:id", studentController.updateStudentData);

appRoute.delete("/students/:id", studentController.deleteStudentById);

module.exports = appRoute;
