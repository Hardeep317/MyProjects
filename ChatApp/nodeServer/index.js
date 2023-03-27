// This is the node server for our chat App
const express = require('express');
const http = require('http');
// const socketio = require('socket.io');
const path = require('path');


const PORT = process.env.PORT || 8000;
const app = express();
const server = http.createServer(app)

const io = require('socket.io')(server,{
    cors: {
        origin: "*",
      }
});
// app.use(express.static(path.join(__dirname,"/")))
const users = {};

io.on('connection',socket => {
    socket.on('new-user-joined', name=> {
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);
    })

    socket.on('message', message=> {
        socket.broadcast.emit('receive', {message: message, name: users[socket.id]})
    })

    socket.on('disconnect', message=> {
        socket.broadcast.emit('left',users[socket.id])
        delete users[socket.id];
    })
})

server.listen(PORT)