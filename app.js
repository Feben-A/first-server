// console.log("Hello")

const express = require("express");
const app = express();

const logger = require("./logger");

//another middleware

app.use(express.json());
app.use(logger);
//we dont want 

const fruitsRouter = require("./routes/fruits.js");


// const fruits = require("./fruits.json");

app.get("/", (req, res) => {
  res.send("Hello Fruity");
});

//define the middleware

app.use("/fruits", fruitsRouter);

module.exports = app;
