var pg = require('pg');

var Db = function(callback){
	var pgConnectionLink = "pg://postgres:postgres@localhost:5432/shop";
	pgClient = new pg.Client(pgConnectionLink);
	pgClient.connect()
	return callback(pgClient);
}


module.exports = Db;
