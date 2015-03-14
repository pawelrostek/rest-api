
// DEPENDENCIES
var express = require('express');
var path    = require('path');
var favicon = require('static-favicon');
var logger  = require('morgan');
var cookiesParser = require('cookie-parser');
var bodyParser = require('body-parser');

// EXPRESS
var app = express();

// MIDDLEWARE
  app.use(express.static(path.join(__dirname, 'bower_components')));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());


//CONFIGURE
app.set('port', (process.env.PORT || 3000));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon());
app.use(logger('dev'));
app.use(cookiesParser());
app.use(require('less-middleware')({ src: path.join(__dirname, 'public')}));
//app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
app.use('/', require('./routes/index'));
app.use('/db', require('./routes/db/api_db'));
// app.use('/api', require('./routes/api'));

// START SERVER
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});