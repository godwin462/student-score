const studentModel = require("../models/studentModel");

exports.createstudent = async (req, res) => {
  try {
    const { name, email, age, gender } = req.body;
    const student = await studentModel.create({
      name,
      email,
      age,
      gender,
    });
    res.status(201).json({
      mesasge: "student created successfully",
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      mesasge: `Internal server error`,
      error: error.message,
    });
  }
};

exports.getAllStudents = async (req, res) => {
  try {
    const students = await studentModel.find().populate("score");
    res.status(200).json({
      mesasge: "student found successfully",
      data: students,
    });
  } catch (error) {
    res.status(500).json({
      mesasge: `Internal server error`,
      error: error.message,
    });
  }
}
exports.getOne = async (req,res) => {
    try {
        const{id}= req.params
        const student = await studentModel.findById(id) 
        if (!student) {
          return res.status(404).json({
            message:`student not found`,
        
          })
        }
        
        res.status(200).json({
            message:`getting one student is successfully`,
            data:student
        })
    } catch (error) {
        res.status(500).json({
            message:`internal server Error`,
            error:error.message
        })
    }
    
}
