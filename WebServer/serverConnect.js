var connect = require('connect');

var app = connect()
	//public refers to the file that holds all of the stuff you want on your server
	.use(connect.static('public'))
	.use(function (req, res) {
		res.end("Couldn't find it.");
	})
	.listen(3000);