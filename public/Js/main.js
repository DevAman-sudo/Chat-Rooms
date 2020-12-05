// Socket Connection (client) //
const socket = io();

// Audio On Message Receive MP3 Path //
const receiveAudio = new Audio('../MP3/ding.mp3');
const sendAudio = new Audio('../MP3/send.mp3');

// Html DOM Elements //
const dataContainer = document.getElementById('data-container');
const form = document.getElementById('form');
const textArea = document.getElementById('text-area');
const button = document.getElementById('button');

// Receiving Name Of Client With Prompt //
const Name = prompt("Enter Your Name:: ");

// Data Append Function //
function appendData(data , className) {
    // Creating Div Element With ClassList message-box //
    const divElement = document.createElement('div');
    divElement.classList.add('message-box');

    // Creating Image Element //
    const imgElement = document.createElement('img');
    imgElement.classList.add('icon');
    imgElement.classList.add('left');
    imgElement.src = "../Img/icon.png";
    if (className !== "left") {
        imgElement.style.display = "none";
    }

    // Creating Small Tag Element For Div Element with classList Small //
    const messageElement = document.createElement('small');
    messageElement.classList.add('small');
    messageElement.classList.add(className);

    // Inserting Data To Created Element //
    messageElement.innerText = data;
    divElement.appendChild(imgElement);
    divElement.appendChild(messageElement);
    dataContainer.appendChild(divElement);

    // Scrolling Div Element With Anime Js //
    anime({
        targets: '.small .icon',
        translateY: 50
    });

    // Playing Audio on Message Receive/ Send //
    if (className === "left") {
        receiveAudio.play();
    }
}

// Listening An Event On Form Submit //
form.addEventListener('submit', (event) => {
    // Preventing Page To Submit //
    event.preventDefault();

    // append message on data container //
    const message = textArea.value;
    if (textArea.value != "") {
        appendData(`${message}`, 'right');
        socket.emit('send', message); // send message to Server //
        sendAudio.play();
    }
    // Clearing Text Area After On Button Click //
    textArea.value = "";
});

// Socket Events And Event Emitters //
// Sending Name To Server To BroadCast To All Users //
socket.emit('new-user-joined', Name);
// socket User Joined Event For Sending Name To Data Container //
socket.on('user-joined', (Name) => {
    appendData(`${Name} Joined The Chat.`, 'middle');
});

// Socket Event To Receive Send Data To All Clients //
socket.on('receive', (data) => {
    appendData(`${data.name}: ${data.message}`, 'left');
});

// Socket Fires Disconnect Event If Users Leaves //
socket.on('leave', (name) => {
    appendData(`${name} Left The Chat. `, 'middle');
});