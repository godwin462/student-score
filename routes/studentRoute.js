const {
  createstudent,
  getAllStudents,
} = require("../controllers/studentController");

const studentRouter = require("express").Router();
studentRouter.post("/", createstudent);
studentRouter.get("/", getAllStudents);

module.exports = studentRouter;
