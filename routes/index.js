// DEPENDENCIES
var express = require('express');
var path    = require('path');
var router 	= express.Router();


// NAVIGATION INFO LOG
console.log("Include GET REQUEST");


var todoItems = [
  		{id: 1, desc: 'foo'},
  		{id: 2, desc: 'bar'}
	];

// ROUTER
router.get('/', function(request, response) {
  // response.send("Strona główna");
  response.render('home', { 
  		title: 'My new template application',
  		items: todoItems
  	});
});

router.post('/add', function(request, response){
	var newItem = request.body.newItem;
	todoItems.push({
		id: todoItems.length +1,
		desc: newItem
	});
	console.log(newItem);
	response.redirect('/');
});

// RETURN
module.exports = router;