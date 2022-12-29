//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');
const path= require('path');
const fs=require('fs');


const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use('/doc',express.static(__dirname+ '/doc'));
// app.use('/css', express.static(path.resolve(__dirname+'./public/css')));
// app.use('/js', express.static(__dirname+'public/js'));
 


app.use(bodyParser.urlencoded({extended: true}));
//app.use(express.static(path.join(__dirname, 'views/doc')));
 
 
app.get("/", (req,res)=>{
    res.render('home');
});






app.get("/notes", (req,res)=>{
    res.render("notes");
});


app.get("/notes/c", (req, res)=>{
    res.render("c");
});


app.get("/notes/cplus", (req, res)=>{
    res.render("cmain");
});
 



app.get("/notes/java", (req, res)=>{
    res.render("java");
});





app.get("/notes/python", (req, res)=>{
    res.render("python");
});




app.get("/notes/dbms", (req, res)=>{
    res.render("dbms");
});




app.get("/notes/webdevelopment", (req, res)=>{
    res.render("web");
});





 






 


app.get("/assignment", (req, res)=>{
    res.render("assignment");
});






app.get("/assignment/c", (req, res)=>{
    res.render("assc");
});


app.get("/assignment/cplus", (req, res)=>{
    res.render("asscmain");
});
 



app.get("/assignment/java", (req, res)=>{
    res.render("assjava");
});





app.get("/assignment/python", (req, res)=>{
    res.render("asspython");
});




app.get("/assignment/dbms", (req, res)=>{
    res.render("assdbms");
});




app.get("/assignment/webdevelopment", (req, res)=>{
    res.render("assweb");
});







app.get("/carrier", (req, res)=>{
    res.render("carrier");
});


app.get("/carrier/internships", (req, res)=>{
    res.render("internships");
});


app.get("/carrier/govt", (req, res)=>{
    res.render("govt");
});



app.get("/carrier/defence", (req, res)=>{
    res.render("defence");
});



app.get("/carrier/software", (req, res)=>{
    res.render("software");
});







app.get("/community", (req, res)=>{
    res.render("comminity");
});
























 
app.listen(process.env.PORT || 5000, function() {
    console.log("Server started on port 5000");
  });
  