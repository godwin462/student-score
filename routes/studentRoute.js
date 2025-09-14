const {
  createstudent,
  getAllStudents,
  getOne,
} = require("../controllers/studentController");

const studentRouter = require("express").Router();
studentRouter.post("/", createstudent);
studentRouter.get("/", getAllStudents);
studentRouter.get("/:id",getOne);

module.exports = studentRouter;
