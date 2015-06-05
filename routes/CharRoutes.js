module.exports = function(app, mongoose)
{
    var charModel = require('../models/CharModel')(mongoose);
	var util = require('util');
    
    //Just pull all characters in database
    app.get('/api/chars', function(req, res)
    {
        charModel.find(function(err, chars)
        {
            if(err) res.send(err);
            
            
			console.log(chars);            
            res.json(chars);
        });
    });

    //Get all characters tied to email/user.
    app.get('/api/chars/:email&:camp&:pc', function(req, res)
    {
        charModel.find({owner: req.params.email, campaign: req.params.camp, pc: req.params.pc}, function(err, char)
        {
            if(err)
            {
                console.log("Error getting DB data!");
                console.log(err);
                res.send(err);
            }
            console.log("Character Data: ");
          
            console.log(char);           
            //console.log(char[0].edges[0].effects[0].text.toString());
            console.log(char);
            
            //console.log(util.inspect(char, { showHidden: true, depth: null}));
            
            res.json(char);
        });
    });
}