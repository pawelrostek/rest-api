
// DEPENDENCIES
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
// var url = require("url");

// APPLICATION
var router = express.Router();
var router = express();
	router.use(bodyParser.urlencoded({ extended: true }));
	router.use(bodyParser.json());


// DATABASE
	mongoose.connect('mongodb://localhost/restful'
, function(err, db) {
	  if(err) {
		router.get('/', function(request, response) {
	  		response.send("No connect to DB - EXIT");
	  		module.exports = router;
	  	});
	    return console.dir(err);
	  }
	}
		);


// // MODELS
var Product = require('../../models/shop/products');
var Klient = require('../../models/shop/klients');

// // ROUTER
Product.methods(['get', 'post', 'put', 'delete']);
Product.register(router, '/products');

Klient.methods(['get', 'post', 'put', 'delete']);
Klient.register(router, '/klients');

router.get('/', function(request, response) {
  response.send("Hellow in demo API");
});

// RETURN
module.exports = router;