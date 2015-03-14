// DEPENDENCIES
var restful = require('node-restful'),
	mongoose = restful.mongoose;


// NAVIGATION INFO LOG
console.log("Include Model klients");

// DATABASE SCHEMA
var klientSchema = new mongoose.Schema({
	first_name: String,
	last_name: String,
	login: String,
	uid: String,
	passwd: String
});

// RETURN
module.exports = restful.model('Klients', klientSchema);
