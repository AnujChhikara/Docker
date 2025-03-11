const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello world from the end of the world");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

console.log("ENV variables");

console.log(process.env.DB_URL);
