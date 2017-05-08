var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// include all the controllers
// var user_controller = require('./controllers/UserController.js');
// ****** complete user controller ******

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

var mongoose = require('mongoose');
var userSchema = require('./models/User.js');
var User = mongoose.model('User',userSchema);

// USER API v1.0.0

// get all users
app.get('/v1/users', function(req, res){
  User.find({}, function(error, users){
    if(error) res.status(500).send('{ "message" : "Unable to fetch users"}');
    res.status(200).json(users);
  });
});

// get particular user by email id
app.get('/v1/users/:user_emailid', function(req, res){
  User.find({user_emailid:req.params.user_emailid}, function(error, user){

    if(error) res.status(500).send('{ "message" : "Unable to find user"}');
    else if(user.length == 0){
      res.status(404).send('{ "message" : "User not found"}');
    }
    res.status(200).json(user);
  });
});

// create new user
app.post('/v1/users', jsonParser, function(req, res){

  // check if the email id is already taken
   User.find({user_emailid:req.body.user_emailid},function(error, user){
     if(error){res.status(500).send('{ "message" : "Unable to register user"}');}
     else if(user.length != 0){
       res.status(404).send('{ "message" : "Email already registerd"}');
     }
     else{
       var user = User(req.body).save(function(error){
         if(error) res.status(500).send('{ "message" : "Unable to register user"}');
         res.status(200).json(User(req.body));
       });
     }
   });

});

// delete user profile by email id
app.delete('/v1/users/:user_emailid', function(req,res){
   // first find the user and then delete him/her
   User.find({user_emailid:req.params.user_emailid},function(error, user){
     console.log(user);
     if(error){res.status(500).send('{ "message" : "Unable to delete user"}');}
     else if(user.length == 0){
       res.status(404).send('{ "message" : "User not found"}');
     }
     else{
       try{
       User.findOneAndRemove( { user_emailid:user[0].user_emailid }, function(err){
         if(err) return res.status(500).send('{ "status" : "Unable to delete user" }');
         res.status(200).send('{ "status" : "User deleted" }');
       });
      }
      catch(error){
        res.status(404).send('{ "message" : "User not found"}');
      }
     }
   });
});

// update user profile - with email id
app.put('/v1/users/:user_emailid', jsonParser, function(req, res){
  // first find the user and then update him/her
  User.find({user_emailid:req.params.user_emailid},function(error, user){
    if(error){res.status(404).send('{ "message" : "User not found"}');}
    else{
         console.log("[api] user found");
         var new_user = req.body;
         User.findOneAndUpdate({'user_emailid':req.params.user_emailid},new_user,function(e,u){
           if(e) return res.status(500).send('{ "status" : "Failed to update user" }');
           else{
             console.log("[api] user updated");
             res.status(200).send(new_user);
           }
         });
       }
  });
});

// user login
// hostname/v1/users/xxx/login
app.post('/v1/users/:user_emailid/login', function(req, res){

    console.log('[api] authenticating - ' + req.params.user_emailid);

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    console.log('[api] ' + req.body);

    User.find({user_emailid:req.params.user_emailid}, function(error, user){

      var temp = JSON.parse(JSON.stringify(user));
      if(error){res.status(404).send('{ "message" : "User not found"}');}
      else{
        var in_pwd = req.body.password;
        var usr_pwd = temp[0]['user_password'];

        // compare the passwords
        if(in_pwd !== usr_pwd)
        {
          console.log('[api] login fail');
          return res.status(200).send('{"message":"Login failed"}');
        }
        else
        { console.log('[api] login success');
          return res.status(200).send('{"message":"Login successful"}');
        }
      }
    });
  });

  // validate unique username
  app.get('/v1/users/:user_emailid/checkunique', function(req, res){
      User.find({user_emailid:req.params.user_emailid}, function(error, user){
        if(error){res.status(404).send('{ "message" : "Username search failure."}');}
        if(user.length == 0)
          res.status(200).send('{ "message" : "Email is unique"}');
        else
          res.status(401).send('{ "message" : "Email already exists"}');
      });
  });

// ******* user controller ends here ******
// var job_controller = require('./controllers/JobController.js');
// ******** job controller starts here *****

  var bodyParser = require('body-parser');
  var jsonParser = bodyParser.json();

  var mongoose = require('mongoose');
  var jobSchema = require('./models/Job.js');
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
       if(job.length == 0){
         res.status(404).send('{ "message" : "Job not found"}');
       }
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

  // delete a job
  app.delete('/v1/jobs/:jobid', function(req, res){
    Job.find({_id:req.params.jobid}, function(err, job){
      console.log(job);
      if(err) {
        res.status(500).send('{ "message" : "Unable to delete job"}');
      }
      else if(job.length == 0){
        res.status(404).send('{ "message" : "Job not found"}');
      }
      else{
        try{
          Job.findOneAndRemove({_id:req.params.jobid}, function(error){
            if(error) return res.status(500).send('{ "status" : "Unable to delete job" }');
            else{
                res.status(200).send('{ "status" : "Job deleted" }');
            }
          });
        }
        catch(e){
            res.status(404).send('{ "message" : "Job not found"}');
        }
      }
    });
  });

  // update a job
  app.put('/v1/jobs/:jobid', jsonParser, function(req, res){
    // first find the user and then update him/her
    Job.find({_id:req.params.jobid},function(error, job){
      if(error){res.status(404).send('{ "message" : "Job not found"}');}
      else if(job.length ==0){
        res.status(404).send('{ "message" : "Job not found"}');
      }
      else{
           console.log("[api] job found");
           var njob = req.body;
           Job.findOneAndUpdate({_id:req.params.jobid},njob,function(e,u){
             if(e) return res.status(500).send('{ "status" : "Failed to update job" }');
             else{
               console.log("[api] user updated");
               res.status(200).send(njob);
             }
           });
         }
    });
  });
// ****** job controller ends here *****

// var event_controller = require('./controllers/EventController.js');

// **** event controller starts here **********
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

var mongoose = require('mongoose');
var eventSchema = require('./models/Event.js');
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
    if(event.length == 0){
      res.status(404).send('{ "message" : "Event not found"}');
    }
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

// update event
app.put('/v1/events/:eventid', jsonParser, function(req, res){
  // first find the user and then update him/her
  Event.find({_id:req.params.eventid},function(error, event){
    if(error){res.status(404).send('{ "message" : "Event not found"}');}
    else if(event.length ==0){
      res.status(404).send('{ "message" : "Event not found"}');
    }
    else{
         console.log("[api] event found");
         var nevent = req.body;
         Event.findOneAndUpdate({_id:req.params.eventid},nevent,function(e,u){
           if(e) return res.status(500).send('{ "status" : "Failed to update event" }');
           else{
             console.log("[api] event updated");
             res.status(200).send(nevent);
           }
         });
       }
  });
});


// delete event
app.delete('/v1/events/:eventid', function(req, res){
  Event.find({_id:req.params.eventid}, function(err, event){
    console.log(event);
    if(err) {
      res.status(500).send('{ "message" : "Unable to delete event"}');
    }
    else if(event.length == 0){
      res.status(404).send('{ "message" : "Event not found"}');
    }
    else{
      try{
        Event.findOneAndRemove({_id:req.params.eventid}, function(error){
          if(error) return res.status(500).send('{ "status" : "Unable to delete event" }');
          else{
              res.status(200).send('{ "status" : "Event deleted" }');
          }
        });
      }
      catch(e){
          res.status(404).send('{ "message" : "Event not found"}');
      }
    }
  });
});

// **** event controller ends here ***********
// var accomodation_controller = require('./controllers/AccomodationController.js');
// **** accomodation controller starts here *****

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

var mongoose = require('mongoose');
var accomodationSchema = require('./models/Accomodation.js');
var Accomodation = mongoose.model('Accomodation', accomodationSchema);

// ACCOMODATION API v1.0.0

// get all accomodations
app.get('/v1/accomodations', function(req, res){
  Accomodation.find({}, function(err, accomodations){
    if(err) res.status(500).send('{ "message" : "Unable to fetch accomodations"}');
    res.status(200).json(accomodations);
  });
});

// get particular accomodation
app.get('/v1/accomodations/:acmdid', function(req, res){
  Accomodation.find( { _id:req.params.acmdid }, function(error, accomodation){
    if(accomodation.length == 0){
      res.status(404).send('{ "message" : "Accomodation not found"}');
    }
    if(error) res.status(500).send('{ "message" : "Unable to fetch accomodations"}');
    res.status(200).json(accomodation[0]);
  });
});

// post new accomodation
app.post('/v1/accomodations', jsonParser, function(req,res){
  var acc = Accomodation(req.body);
  acc.save(function(err){
    if(err)res.status(500).send('{ "message" : "Unable to save accomodation"}');
    else res.status(200).json(acc);
  });
});

// put accomodation
app.put('/v1/accomodations/:acmdid', jsonParser, function(req, res){
  // first find the accomodation and then update him/her
  Accomodation.find({_id:req.params.acmdid},function(error, accomodation){
    if(error){res.status(404).send('{ "message" : "Accomodation not found"}');}
    else{
         console.log("[api] accomodation found");
         var new_accomodation = req.body;
         Accomodation.findOneAndUpdate({_id:req.params.acmdid},new_accomodation,function(e,u){
           if(e) return res.status(500).send('{ "status" : "Failed to update accomodation" }');
           else{
             console.log("[api] accomodation updated");
             res.status(200).send(new_accomodation);
           }
         });
       }
  });
});


// delete accomodation
app.delete('/v1/accomodations/:acmdid', function(req, res){
  Accomodation.find({_id:req.params.acmdid}, function(err, accomodation){
    console.log(accomodation);
    if(err) {
      res.status(500).send('{ "message" : "Unable to delete accomodation"}');
    }
    else if(accomodation.length == 0){
      res.status(404).send('{ "message" : "Accomodation not found"}');
    }
    else{
      try{
        Accomodation.findOneAndRemove({_id:req.params.acmdid}, function(error){
          if(error) return res.status(500).send('{ "status" : "Unable to delete accomodation" }');
          else{
              res.status(200).send('{ "status" : "Accomodation deleted" }');
          }
        });
      }
      catch(e){
          res.status(404).send('{ "message" : "Accomodation not found"}');
      }
    }
  });
});


// **** accomodation controller ends here *****

// connect to the db
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://root:root@ds131041.mlab.com:31041/spartascoop')

app.use(express.static( __dirname + "/portal"));
app.use(bodyParser.urlencoded({ extended : true }));

// connect to the controllers
// user_controller(app);
// job_controller(app);
// event_controller(app);
// accomodation_controller(app);

app.listen(3000);

console.log('[api] Server up');
