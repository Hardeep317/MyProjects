// This is the client side file

var socket = io('https://chat-app-backend-09fa.onrender.com');
const form = document.getElementById('form-action');
const messageInp = document.getElementById('inputInp');
const container = document.querySelector('.container');
var audio = new Audio('ting.mp3')

const append = (message, position) => {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    container.appendChild(messageElement);

    if(position == 'left'){
        audio.play();
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInp.value;
    append(`You : ${message}`,'right');
    socket.emit('message', message);
    messageInp.value = '';
})

const userName = prompt("Enter your name");
socket.emit('new-user-joined', userName);

socket.on('user-joined', userName =>{
    append(`${userName} joined the chat`, 'right')
});

socket.on('receive', data =>{
    append(`${data.name}:${data.message}`,'left')
});

socket.on('left', userName =>{
    append(`${userName} left the chat`,'right')
});