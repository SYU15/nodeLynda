var io = require('socket.io'),
	connect = require('connect');

var app = connect().use(connect.static('public')).listen(3000);
var chat_room = io.listen(app);

//sends entrance event to all sockets, will show up however many times fired on the page
chat_room.sockets.on('connection', function (socket) {
	chat_room.sockets.emit('entrance', {message: 'a new chatter is online'});
});