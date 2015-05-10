var io = require('socket.io'),
	connect = require('connect'),
	chatter = require('chatter');

var app = connect().use(connect.static('public')).listen(3000);
var chat_room = io.listen(app);

//sets socket using chatter module
chatter.set_sockets(chat_room.sockets);

//calls connect chatter function in the chatter module
chat_room.sockets.on('connection', function (socket) {
	chatter.connect_chatter({
		socket: socket,
		username: socket.id
	});
});