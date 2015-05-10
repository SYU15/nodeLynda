var express = require('express');

var app = express.createServer();

//this is a local module that's being required recipes.ejs, tells node to look in local directory
var recipes = require('./data/recipes').data;
//this will take layout.ejs to create html page then render
//index.ejs as the body
app.get('/', function (req, res){
	res.render('index.ejs', {title: 'Clever Kitchens'});
});

//not a separate view, layout.ejs is handling this as well (this link is  also set in layout)
app.get('/express', function (req, res) {
	res.render('recipes.ejs', {
		title: 'Clever Kitchens - Tomatoes',
		recipes: recipes
	});
});
//title is defined in recipes.js in the "url" param
app.get('/express/:title', function (req, res) {
	var data = recipes.filter(function (recipe) {
		return(recipe.url == req.params.title);
	});
	if (data.length > 0) {
		data = data[0];
		data.title = 'Clever Kitchens - Recipe';
		res.render('recipe1.ejs', data);
	} else {
		res.status(404).render('error.ejs', {title: 'Recipe Not Found'});
	}
});

//404 tells browser and google that this page doesn't exist
app.get('/*', function (req, res) {
	res.status(404).render('error.ejs', {title: 'Error'});
});

app.listen(3000); 