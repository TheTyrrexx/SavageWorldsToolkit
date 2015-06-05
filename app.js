
/**
 * Module dependencies.
 */

var express = require('express');
var mongoose = require('mongoose');
var http = require('http');
var path = require('path');

var app = express();

//mongoose.connect('mongodb://tyrrexx:ragnarok@oceanic.mongohq.com:10075/tyrrexx_test_db');
mongoose.connect('mongodb://tyrrexx:ragnarok@ds053877.mongolab.com:53877/tyrrexx_test_db')

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.use('/views', express.static(path.join(__dirname, '/views')));
app.use('/stylesheets', express.static(path.join(__dirname, '/stylesheets')));
app.use('/scripts', express.static(path.join(__dirname, '/scripts')));
app.use('/models', express.static(path.join(__dirname, '/models')));
app.use('/img', express.static(path.join(__dirname, '/img')));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);


// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});


var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
    // Create your schemas and models here.
});

var userRoutes = require('./routes/UserRoutes')(app, mongoose);
var charRoutes = require('./routes/CharRoutes')(app, mongoose);

//Route to send everything to index.html
app.get('*', function(req, res)
{
    res.sendfile('./views/index.html');
});