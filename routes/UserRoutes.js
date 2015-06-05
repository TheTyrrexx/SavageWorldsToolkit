//User routes for testing==================================================================================

//Rest API
//Get all Users - this won't be a real function

//var model = "../models/users.js";
//
//module.exports = function (app) {
//
//    app.get('/', function (req, res, next) {
//        model.get_recent(function (err, results) {
//            // do stuff with your results
//            res.render('index');
//        });
//    });
//
//}

//GET /api/users ---> Will return all users in swtk_accts collection.
//req = required? & res = response
module.exports = function(app, mongoose)
{
    var userModel = require('../models/UserModel')(mongoose);

    app.get('/api/users', function(req, res)
    {
        //Defines find function to give errors or pass the json data to users
        userModel.find(function(err, users)
        {
            //Send error for get call if failed.
            if(err) res.send(err);

            //Else just respond with users, gives all users in JSON
            console.log(users);
            res.json(users);
        });
    });

    app.post('/api/users/login/:email&:pass', function(req, res)
    {
        console.log("Mongo User Login");
        userModel.find({email: req.params.email, pass: req.params.pass}, function(err, user)
        {
            console.log("Searching for: " + req.params.email);
            console.log("Searching for: " + req.params.pass);
            if(err)
            {
                console.log("Error getting DB data!");
                console.log(err);
                res.send(err);
            }
            console.log("User data: ");
            console.log(user);
            res.json(user);
        });
    });

    app.post('/api/users/create/:email&:pass&:name', function(req, res)
    {
        console.log("Mongo User Create");
        userModel.find({email: req.params.email}, function(err, user)
        {
            if(user.length === 0)
            {
                console.log("No records found. Creating account.");
                userModel.create(
                    {
                        email: req.params.email,
                        pass: req.params.pass,
                        name: req.params.name
                    },
                    function(err, user)
                    {
                        if (err)
                            res.send(err);
                        res.send("User: " + user.name + " create!");
                    });
            }
            else
            {
                res.send("User already exist, please try with new email.");
            }
        });
    });

    app.post('/api/users/updateName/:email&:newName', function(req, res)
    {
        console.log("Mongo User Update");
        userModel.update(
            {email: req.params.email},
            {
                //Updating Name value
                name: req.params.newName
            },
            function(err, user)
            {
                if(err)
                    res.send(err);
                res.send(["Error updating account name!", req.params.newName]);
            }
        );
        res.send(["User updated!", req.params.newName]);
    });

    app.post('/api/users/updatePass/:email&:newPass', function(req, res)
    {
        console.log("Mongo User Update");
        userModel.update(
            {email: req.params.email},
            {
                //Updating Name value
                pass: req.params.newPass
            },
            function(err, user)
            {
                if(err)
                    res.send(err);
                res.send("Error updating account password!");
            }
        );
        res.send("User updated!");
    });
}
