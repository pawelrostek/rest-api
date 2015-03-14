
// DEPENDENCIES
var express = require('express');
var path    = require('path');
var logger  = require('morgan');
var favicon = require('static-favicon');


var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// EXPRESS
var app = express();

// MIDDLEWARE

//CONFIGURE
app.set('port', (process.env.PORT || 4000));
app.use(favicon());
app.use(logger('dev'));

// ROUTES
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/', require('./routes/default'));
app.use('/shopApi', require('./routes/shop/api'));


// START SERVER
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});