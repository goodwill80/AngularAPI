var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var ejsLayout = require("express-ejs-layouts");
//these will require all your routes in your routes folder
//will need to require for all restful routes you intend to create
var index = require('./routes/index');
var todos = require('./routes/todos');

//requiring model of your API in app.js
var Todo  = require("./models/todo.model");
//setting up moongoose db.
//now you need to go set up your schema and define your model
var mongo_url = 'mongodb://localhost/todos';
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(mongo_url);


//view engine
//this tells which folders to look in for our views
app.set("views", path.join(__dirname, 'views'));
//this will enables use of ejs to render our views in the routes (to shorten the codes in place of Path but not neccesary)
app.set("view engine", "ejs");
//render html files
app.engine('html', require('ejs').renderFile);

//this will enable json data to be passed
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

//*****CONNECTING EXPRESS, NODE and MONGO with ANGULAR in a Single Application -----enabling your backend to use frontend folder 'angular' and letting the system knows that we want to use Angular to power our frontend
app.use(express.static(path.join(__dirname, 'angular')));

//this is for the setting up of routes
app.use('/', index);
app.use('/api', todos);

//cross origins
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  next();
});

//Setting up of server
app.set('port', (process.env.PORT || 7000));

app.listen(app.get('port'), function() {
  console.log('My express server is running at localhost', app.get('port'));
});

module.exports = app;
