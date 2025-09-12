const {
  createstudent,
  getAllStudents,deleteStudent
} = require("../controllers/studentController");

const studentRouter = require("express").Router();
studentRouter.post("/", createstudent);
studentRouter.get("/", getAllStudents);
studentRouter.delete("/", deleteStudent);

module.exports = studentRouter;
