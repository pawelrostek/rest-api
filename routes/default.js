// DEPENDENCIES
var express = require('express');
var bodyParser = require('body-parser');

// APPLICATION
var router = express.Router();

router.get('/', function(request, response) {
  response.send("Hellow in demo APP");
});

// RETURN
module.exports = router;