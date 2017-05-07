var mongoose = require('mongoose');

var eventSchema = mongoose.Schema({
    title : String,
    description : String,
    location : String,
    website : String,
    free_stuffs : [],
    entryfees : String
});

module.exports = eventSchema;
