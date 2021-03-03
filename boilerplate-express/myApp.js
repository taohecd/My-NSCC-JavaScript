require('dotenv').config();

var express = require('express');
var app = express();
console.log('Hello World');
/*
app.get("/", function(req, res) {
    res.send("Hello Express");
  });
*/
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
  });

if (process.env.MESSAGE_STYLE == "uppercase") {
    response = "Hello json".toUpperCase();
} else {
    response = "Hello json";
}




































 module.exports = app;
