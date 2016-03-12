/**
 * Created by Tauqeer Ahmed on 3/11/2016.
 */
var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser'); // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var configDb = require('./config/database');
var port = process.env.PORT || 3000;
var app = express();

//configuration
mongoose.connect(configDb.url);

app.use(express.static(__dirname + '/public'));  // set the static files location
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type : 'application/vnd.api+json'}));
app.use(methodOverride());

//=============routes================
require('./app/routes')(app);

//listen
app.listen(port, function () {
    console.log("App listening at port " + port);
});
