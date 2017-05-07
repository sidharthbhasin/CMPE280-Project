var mongoose = require('mongoose');
var express = require('express');
var app = express();

// include all the controllers
var user_controller = require('./controllers/UserController.js');
var job_controller = require('./controllers/JobController.js');

// connect to the db
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://root:root@ds131041.mlab.com:31041/spartascoop')

// connect to the controllers
user_controller(app);
job_controller(app);

app.listen(3000);

console.log('[api] Server up');
