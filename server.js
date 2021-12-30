const express = require("express");
const app = express();
const port = process.env.PORT || 3002;

app.get("/", (req, res) => {
  res.status(200).send("This is API Version 2.0");
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
