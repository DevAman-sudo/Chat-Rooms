// Socket Liabrary //
// const socket = io();

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

	// Calling Function Create Element //
	CreateElement(textArea.value);

	// Calling Function Append Data //
	appendData(element, 'middle-msg');

	// Clearing Text Area After Submit //
	textArea.value = "";
});

// Function To Create Element //
function CreateElement(data) {
	element = document.createElement('small');
	element.classList.add('msg');
	element.innerText = data;
}

// Function To Append Data //
function appendData(data, className) {
	data.classList.add(className);
	dataContainer.append(data);
}

// Web Socket Connection || socket.io //
io.on( 'connection' , (socket) => {
	
	// new user joined event //
	socket.emit('new-user-joined' , username);
	socket.on('user-joined' , (username) => {
		appendData(username , 'middle-msg')
	});
	
});