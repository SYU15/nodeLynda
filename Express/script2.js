var express = require('express');

var app = express.createServer();
//this will take layout.ejs to create html page then render
//index.ejs as the body
app.get('/', function (req, res){
	res.render('index.ejs', {title: 'Clever Kitchens'});
});

//not a separate view, layout.ejs is handling this as well (this link is  also set in layout)
app.get('/express', function (req, res) {
	res.render('layout.ejs', {
		title: 'Clever Kitchens - Tomatoes',
		body: '<h1>All the chicken recipes</h1>'
	});
});

app.get('/express/:title', function (req, res) {
	res.send('<h1>' + req.params.title + '</h1>');
});

//404 tells browser and google that this page doesn't exist
app.get('/*', function (req, res) {
	res.status(404).render('error.ejs', {title: 'Error'});
});

app.listen(3000);