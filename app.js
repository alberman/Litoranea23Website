//jshint esversion:8

const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const bodyParser = require("body-parser");

app.set("view engine", "ejs");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));



app.get("/", function (req,res) {
    res.render("list");
})


server.listen(3000, () => {
    console.log("server listening on port:3000");
  });