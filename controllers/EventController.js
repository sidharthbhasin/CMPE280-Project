module.exports = function(app){
      console.log('[api] Event controller up');

      var bodyParser = require('body-parser');
      var jsonParser = bodyParser.json();

      var mongoose = require('mongoose');
      var eventSchema = require('../models/Event.js');
      var Event = mongoose.model('Event', eventSchema);

      // EVENT API v1.0.0

      // get all events
      app.get('/v1/events', function(req, res){
        Event.find({}, function(err, events){
          if(err) res.status(500).send('{ "message" : "Unable to fetch events"}');
          res.status(200).json(events);
        });
      });

      // get a particular event
      app.get('/v1/events/:eventId', function(req, res){
        Event.find( { _id:req.params.eventId }, function(error, event){
          if(error) res.status(500).send('{ "message" : "Unable to fetch events"}');
          res.status(200).json(event[0]);
        });
      });

      // create new event
      app.post('/v1/events', jsonParser, function(req, res){
        var e = Event(req.body);
        e.save(function(err){
          if(err) res.status(500).send('{ "message" : "Unable to save event"}');
          else res.status(200).json(req.body);
        });
      });
};
