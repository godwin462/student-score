const moment = require("moment");
const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Students",
    required: true,
  },
  week: {
    type: Number,
    required: true,
    default: 0,
  },
  punctuality: {
    type: Number,
    max: 25,
    required: true,
    default: 0,
  },
  attendance: {
    required: true,
    type: Number,
    max: 25,
    default: 0,
  },
  project: {
    type: Number,
    max: 25,
    required: true,
    default: 0,
  },
  classWork: {
    type: Number,
    max: 25,
    required: true,
    default: 0,
  },
  timeIn: {
    type: Date,
    required: true,
    default: moment().utcOffset(60).format("YYYY-MM-DD HH:mm:ss"),
  },
  totalScore: {
    type: Number,
    max: 100,
    default: function name() {
      return this.classWork + this.attendance + this.project + this.punctuality;
    },
  },
});

const scoreModel = mongoose.model("Scores", scoreSchema);

module.exports = scoreModel;
