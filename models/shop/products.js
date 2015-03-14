// DEPENDENCIES
var restful = require('node-restful'),
	mongoose = restful.mongoose;

// NAVIGATION INFO LOG
console.log("Include Model products");

// DATABASE SCHEMA
var productSchema = new mongoose.Schema({
	name: String,
	sku: String,
	price: Number
});

// RETURN
module.exports = restful.model('Products', productSchema);
