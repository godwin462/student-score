require("dotenv").config();
const express = require("express");

const db_uri = process.env.DB_URI;
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());

app.get("/", (_, res) => {
  return res.json("Welcome to my API");
});

app.listen(PORT, () => console.log(`app is running on port ${PORT}`));
