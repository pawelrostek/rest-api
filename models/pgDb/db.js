var pg = require('pg');

var Db = function(callback){
	var pgConnectionLink = "postgres://bljccsnbgihfww:Gqb3nJ6BHSAVgOYVkIilfyMGri@ec2-54-195-243-250.eu-west-1.compute.amazonaws.com:5432/de4pfdstdjieuv";
	// var pgConnectionLink = "pg://postgres:postgres@localhost:5432/shop";
	pgClient = new pg.Client(pgConnectionLink);
	pgClient.connect()
	return callback(pgClient);
}


module.exports = Db;
