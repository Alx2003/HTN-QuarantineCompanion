var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var emergencyRouter = require("./routes/emergency");
var covidRouter = require("./routes/covid");
var foodRouter = require("./routes/food");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname,)))
app.use("/public", express.static('./public/'));

// app.js
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/emergency",emergencyRouter);
app.use("/food", foodRouter);
app.use("/covid",covidRouter);

module.exports = app;