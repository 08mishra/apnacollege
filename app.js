//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');
const path= require('path');


const app = express();
app.use(express.static(path.resolve(__dirname + './public')));
app.use('/css', express.static(path.resolve(__dirname+'./public/css')));
// app.use('/js', express.static(__dirname+'public/js'));
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req,res)=>{
    res.render('home');
})





















 
app.listen(process.env.PORT || 5000, function() {
    console.log("Server started on port 5000");
  });
  