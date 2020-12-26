// Socket Liabrary //
const socket = io();

// Prompt UserName //
const username = prompt('Enter Your Name => ');

// JavaScript DOM Elements //
const dataContainer = document.getElementById('data-container');
const form = document.getElementById('form');
const textArea = document.getElementById('text-area');
const button = document.getElementById('button');

// Listening An Event On Form Submit //
form.addEventListener('submit', (event) => {
    // Preventing Page To Submit //
    event.preventDefault();

    // Calling Function Append Data //
    // appendData(element, 'middle-msg');

    // Clearing Text Area After Submit //
    textArea.value = "";
});

// Function To Create Element //
function CreateElement(data) {
    
}

// Function To Append Data //
function appendData(data, className) {
    element = document.createElement('small');
    element.classList.add('msg' , className);
    element.innerText = data;
    dataContainer.append(element);
}

// Web Socket Connection || socket.io //

// new user joined event //
socket.emit('new-user-joined', username);
socket.on('user-joined', (username) => {
    appendData(`${username} Joined The Chat`, 'middle-msg');
});