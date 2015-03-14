// DEPENDENCIES
var express = require('express');
var pg = require('pg');
var router = express.Router();

// NAVIGATION INFO LOG
console.log("Include Postgres interface");

// ROUTER
router.get('/', function(request, response) {
	// response.send("Interfejs DB Postgres");
pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM pawel', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.send(result.rows); }
    });
  });
});

// RETURN
module.exports = router;