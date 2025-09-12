const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
  score: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Scores",
    },
  ],
});

const studentModel = mongoose.model("Students", studentSchema);
module.exports = studentModel;
