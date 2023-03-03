
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// connect
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});


// backend
io.on('connection', function (socket) {
    socket.on('newMessage', function (msg) {
        io.emit('newMessage', msg);
        console.log('Chat baru: ' + msg);
    });

    socket.on('disconnect', function (msg) {
        console.log('user disconnected');
    });
});

http.listen(3000, function () {
    console.log('listening on 3000...');
});