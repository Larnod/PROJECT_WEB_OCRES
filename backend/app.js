var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;


const request = require("request");
const api_key = "05195ff7-398c-47c1-a4ed-0d2e16a2656e";
const api_base = "https://airlabs.co/api/v9/";

function apiCall(method, params, cb) {
  params.api_key = api_key;
  request.post({url: `${api_base}${method}`, form: params}, cb);
}

apiCall('ping', {param1: 'value1'}, (err, res) => {
  console.log(res);
});