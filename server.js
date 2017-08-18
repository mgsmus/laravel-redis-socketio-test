var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var ioredis = require('ioredis');
var redis = new ioredis(6379);

redis.psubscribe('messaging', function (err, count) {
    console.log("Subscribed")
});

redis.on('pmessage',
    function (pattern, channel, message) {
        message = JSON.parse(message);
        io.emit(channel + ':' + message.event, message.data);

        console.log(channel + ':' + message.event + ' ' + message.data.message);
    }
);

http.listen(3000, function () {
    console.log('Listening on Port 3000');
});