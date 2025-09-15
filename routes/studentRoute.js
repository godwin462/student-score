const {
  createstudent,
  deleteStudent,
  getAllStudents,
  getOne,
} = require("../controllers/studentController");

const studentRouter = require("express").Router();
studentRouter.post("/", createstudent);
studentRouter.get("/", getAllStudents);
studentRouter.delete("/", deleteStudent);
studentRouter.get("/:id", getOne);

module.exports = studentRouter;
