// Socket Liabrary //
const socket = io();

// Prompt UserName //
const username = prompt('Enter Your Name => ');

// JavaScript DOM Elements //
const dataContainer = document.getElementById('data-container');
const form = document.getElementById('form');
const textArea = document.getElementById('text-area');
const button = document.getElementById('button');

// Audio Path //
const sendAudio = new Audio('../MP3/ding.mp3');

// Listening An Event On Form Submit //
form.addEventListener('submit', (event) => {
    // Preventing Page To Submit //
    event.preventDefault();

    // Calling Function Append Data //
    if (textArea.value != null) {
        socket.emit('send' , textArea.value);
        appendData(textArea.value, 'left-msg');
    }
    
    // Scrolling Up Data Container //
    dataContainer.scrollBy(0 , -190000);

    // Clearing Text Area After Submit //
    textArea.value = null;
});

// Function To Append Data //
function appendData(data, className) {
    element = document.createElement('small');
    element.classList.add('msg',
        className);
    element.innerText = data;
    dataContainer.append(element);
    if (className === 'right-msg') {
        sendAudio.play();
    }
}

// Web Socket Connection || socket.io //
// new user joined event //
socket.emit('new-user-joined', username);
socket.on('user-joined', (username) => {
    appendData(`${username} Joined The Chat`, 'middle-msg');
});

// User Message Receive Event //
socket.on('receive', (data) => {
    appendData(`${data.name}: ${data.message}`, 'right-msg');
    dataContainer.scrollBy(0 , -190000);
});

// User Disconnect Event //
socket.on( 'leave' , (username) => {
    appendData(`${username} Left The Chat` , 'middle-msg');
});