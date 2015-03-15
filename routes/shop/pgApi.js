
// DEPENDENCIES
var express = require('express');
var bodyParser = require('body-parser');
var pg = require('pg');


console.log("0. Include Postgres interface");

// APPLICATION
var router = express.Router();
	router.use(bodyParser.urlencoded({ extended: true }));
	router.use(bodyParser.json());

// DATABASE
var db;
pgClient = require("../../models/pgDb/db");
pgDb = new pgClient(function(pgconnect){
	db = pgconnect;
});

// MODELS
clientModel = require("../../models/pgDb/clients");
Client = new clientModel(db);

router.get('/clients', function(request, response) {

	if(request.method == 'GET') {
		Client.getAll(function(callback){
			response.send(callback);
		});	
	}
	// if(request.method == 'POST') {
	// 	var data = request.data;
	// 	Client.insert(data);
	// 	console.log("INSERT");
	// 	response.status(200).end();	
	// }
	// if(request.method == 'PUT') {
	// 	var id = request.client_id;
	// 	var key = request.key;
	// 	var value = request.value;
	// 	Client.update(id, key, value);
	// 	console.log([id, key, value]);
	// 	console.log("UPDATE");
	// 	response.status(200).end();	
	// }
	// if(request.method == 'DELETE') {
	// 	var id = request.client_id;
	// 	Client.delete(id);	
	// 	console.log("DELETE");
	// 	response.status(200).end();	
	// }
});

// MODELS
productModel = require("../../models/pgDb/products");
Product = new productModel(db);

router.get('/products', function(request, response) {

	if(request.method == 'GET') {
		Product.getAll(function(callback){
			response.send(callback);
		});	
	}
});

router.get('/', function(request, response) {
  response.send("Hellow in demo REST-API (PG)");
});


// RETURN
module.exports = router;
