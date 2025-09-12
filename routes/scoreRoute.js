const { createScore,deleteScore} = require("../controllers/scoreController");

const scoreRouter = require("express").Router();
scoreRouter.post("/:studentId", createScore);
scoreRouter.delete("/delete-score ", deleteScore);

module.exports = scoreRouter;
