var express = require('express');
var app = express();

// include all the controllers
var user_controller = require('./controllers/UserController.js');

// connect to the controllers
user_controller(app);

app.listen(3000);

console.log('[api] live');
