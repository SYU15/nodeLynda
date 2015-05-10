var express = require('express');

var app = express.createServer();

//go to localhost/recipes to see this displayed
app.get('/express', function (req, res){
	res.send('<h1>All Recipes</h1>');
});
//go to localhost/recipes/test to see this displayed
app.get('/express/:title', function (req, res){
	res.send('<h1>'+ req.params.title + '</h1>');
});
//default handler goes last
app.get('/*', function (req, res) {
	res.send('if all else fails, we hit this page');
});

app.listen(3000);