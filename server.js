require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const studentRouter = require("./routes/studentRoute");
const scoreRouter = require("./routes/ScoreRoute");

const db_uri = process.env.DB_URI;
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());

app.get("/", (_, res) => {
  return res.json("Welcome to my API");
});

app.use("/api/v1/student", studentRouter);
app.use("/api/v1/score", scoreRouter);

mongoose
  .connect(db_uri)
  .then(() => {
    console.log(`Db connected❗`);

    app.listen(PORT, () => console.log(`app is running on port ${PORT}`));
  })
  .catch((err) => console.log(`Error connecting to db: ${err}`));
