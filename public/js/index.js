// JavaScript DOM Elements //
const dataContainer = document.getElementById('data-container');
const form = document.getElementById('form');
const textArea = document.getElementById('text-area');
const  button = document.getElementById('button');

// Listening An Event On Form Submit //
form.addEventListener('submit', (event) => {
    // Preventing Page To Submit //
    event.preventDefault();
    
    // Calling Function Create Element //
    CreateElement();
    element.classList.add('msg' , 'middle-msg');
    dataContainer.append(element);
    
    // Clearing Text Area After Submit //
    textArea.value = "" ;
});

// Function To Create Element //
function CreateElement() {
	element = document.createElement('small');
	element.classList.add('msg');
	element.innerText = textArea.value ;
}
