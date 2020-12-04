// Socket Connection (client) //
const socket = io();

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
    
    // Creating Small Tag Element For Div Element with classList Small //
    const messageElement = document.createElement('small');
    messageElement.classList.add('small');
    messageElement.classList.add(className);
    
    // Inserting Data To Created Element //
    messageElement.innerText = data ;
    divElement.appendChild(messageElement);
    dataContainer.appendChild(divElement);
}

// Listening An Event On Form Submit //
form.addEventListener('submit' , (event) => {
    // Preventing Page To Submit //
    event.preventDefault();
});

// Socket Events And Event Emitters //
// Sending Name To Server To BroadCast To All Users //
socket.emit('new-user-joined' , Name);
// socket User Joined Event For Sending Name To Data Container //
socket.on('user-joined' , (Name) => {
    appendData(`${Name} Joined The Chat.` , 'middle');
});
