var io = require('socket.io'),
	connect = require('connect');

var app = connect().use(connect.static('public')).listen(3000);
var chat_room = io.listen(app);

chat_room.sockets.on('connection', function (socket) {
	//only being emitted to the current user doing the event
	socket.emit('entrance', {message: 'Welcome to the chat room!'});
	
	//Being emitted to all of the chatters
	socket.on('disconnect', function(){
	chat_room.sockets.emit('exit', {message: 'A chatter has disconnected.'});
	});

	socket.on('chat', function (data) {
		chat_room.sockets.emit('chat', {message: '# ' + data.message});
	});
	
	//sends entrance event to all sockets, will show up however many times fired on the page
	chat_room.sockets.emit('entrance', {message: 'a new chatter is online'});
});
