//this does the same thing as script3.js but in a slight different way (more organized?)

var express = require('express');

var app = express.createServer();

var recipes = require('./yetAnotherRecipes');

//go to localhost/recipes to see this displayed
app.get('/', function (req, res){
	res.render('index.ejs', {title: 'Clever Kitchens'});
});

app.get('/express', recipes.list);

//go to localhost/recipes/test to see this displayed
app.get('/express/:title', recipes.single);
//default handler goes last
app.get('/*', function (req, res) {
	res.send('if all else fails, we hit this page');
});

app.listen(3000);