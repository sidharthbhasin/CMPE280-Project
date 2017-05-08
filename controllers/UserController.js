
module.exports = function(app){
  console.log('[api] User controller up');

  var bodyParser = require('body-parser');
  var jsonParser = bodyParser.json();

  var mongoose = require('mongoose');
  var userSchema = require('../models/User.js');
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
    var user = User(req.body).save(function(error){
      if(error) res.status(500).send('{ "message" : "Unable to save user"}');
      res.status(200).json(User(req.body));
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
  app.post('/v1/users/:user_emailid/login', jsonParser, function(req, res){
      console.log('[api] authenticating - ' + req.params.user_emailid);
      User.find({user_emailid:req.params.user_emailid}, function(error, user){

        var temp = JSON.parse(JSON.stringify(user));
        if(error){res.status(404).send('{ "message" : "User not found"}');}
        else{
          var in_pwd = req.body.password;
          var usr_pwd = temp[0]['user_password'];
          // compare the passwords
          if(in_pwd !== usr_pwd)
            return res.status(404).send('{"message":"Login failed"}');
          else
            return res.status(200).send('{"message":"Login successful"}');
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

};
