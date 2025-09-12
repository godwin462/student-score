const { createScore } = require("../controllers/scoreController");

const scoreRouter = require("express").Router();
scoreRouter.post("/:studentId", createScore);

module.exports = scoreRouter;
