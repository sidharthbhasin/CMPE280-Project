
module.exports = function(app){
  console.log('[api] Job controller up');

  var bodyParser = require('body-parser');
  var jsonParser = bodyParser.json();

  var mongoose = require('mongoose');
  var jobSchema = require('../models/Job.js');
  var Job = mongoose.model('Job', jobSchema);

  // JOB API v1.0.0

  // get all jobs available
  app.get('/v1/jobs', function(req, res){
    Job.find({}, function(error, jobs){
      if(error) res.status(500).send('{ "message" : "Unable to fetch jobs"}');
      res.status(200).json(jobs);
    });
  });

   // get a particular job
   app.get('/v1/jobs/:jobid', function(req, res){
     Job.find( { _id:req.params.jobid }, function(error, job){
       if(error) res.status(500).send('{ "message" : "Unable to fetch jobs"}');
       res.status(200).json(job[0]);
     });
   });

  // save a new job
  app.post('/v1/jobs', jsonParser, function(req, res){
    var job = Job(req.body);
    job.save(function(er){
      if(er) res.status(500).send('{ "message" : "Unable to save job"}');
      else res.status(200).json(Job(req.body));
    });
  });

};
