
// DEPENDENCIES
var express = require('express');
var path    = require('path');
var logger  = require('morgan');
var favicon = require('serve-favicon');
// var favicon = require('static-favicon');

// EXPRESS
var app = express();

// MIDDLEWARE

//CONFIGURE
app.set('port', (process.env.PORT || 4000));
app.use(favicon(path.join(__dirname,'public','favicon.ico')));
app.use(logger('dev'));

// ROUTES
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/', require('./routes/default'));
app.use('/pgApi', require('./routes/shop/pgApi'));


// START SERVER
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});