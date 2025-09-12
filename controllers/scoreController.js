const scoreModel = require("../models/scoreModel");
const studentModel = require("../models/studentModel");

exports.createScore = async (req, res) => {
  try {
    const { studentId } = req.params;

    const { week, punctuality, attendance, project, classWork } = req.body;

    const score = await scoreModel.create({
      studentId,
      week,
      punctuality,
      attendance,
      project,
      classWork,
    });

    const student = await studentModel.findById(studentId);
    student.score.push(score._id);
    await student.save();

    res.status(201).json({
      mesasge: "Score created successfully",
      data: score,
    });
  } catch (error) {
    res.status(500).json({
      mesasge: `Internal server error`,
      error: error.message,
    });
  }
};

exports.deleteScore = async (req, res)=> {
  try {
    const scoreId = req.params._id
    const score = await scoreModel.findByIdAndDelete(scoreId);
     res.status(200).json({
            message: 'Score deleted successfully',
            data: student
        });
  } catch (error) {
    res.status(500).json({
      message:`Internet server error`,
      error: error.mesasge
    })
  }
};