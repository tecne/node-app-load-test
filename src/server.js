const express = require("express");
const {
  getRandomSaltText,
  genRandomNumber,
  genRandomArray,
} = require("./util/randomMath");
const app = express();
const port = process.env.PORT || 3001;

app.get("/get-salt", (req, res) => {
  try {
    const salt = getRandomSaltText();
    res.status(200).json({ value: salt });
  } catch (error) {
    res.status(400).json({ value: "Error" });
  }
});

app.get("/get-num", (req, res) => {
  try {
    const num = genRandomNumber();
    res.status(200).json({ number: num });
  } catch (error) {
    res.status(400).json({ value: "Error" });
  }
});
app.get("/get-arr", (req, res) => {
  try {
    const arr = genRandomArray();
    res.status(200).json({ arrayLength: arr });
  } catch (error) {
    res.status(400).json({ arrayLength: "Error" });
  }
});

app.get("/", (req, res) => {
  res.status(200).send("This is API Version 2.0");
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
