//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');
const path= require('path');


const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));
// app.use('/css', express.static(path.resolve(__dirname+'./public/css')));
// app.use('/js', express.static(__dirname+'public/js'));
 


app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req,res)=>{
    res.render('home');
});






app.get("/notes", (req,res)=>{
    res.render("notes");
});




app.get("/assignment", (req, res)=>{
    res.render("assignment");
});




app.get("/carrier", (req, res)=>{
    res.render("carrier");
});




app.get("/community", (req, res)=>{
    res.render("comminity");
});






















 
app.listen(process.env.PORT || 5000, function() {
    console.log("Server started on port 5000");
  });
  