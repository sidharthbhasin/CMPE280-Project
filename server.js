var express=require('express');
var app=express();
var bodyParser = require('body-parser');
var mongoose= require('mongoose');



app.use(express.static( __dirname + "/portal"));
app.listen(3000);


