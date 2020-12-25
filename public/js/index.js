// Importing Socket Iiabrary //
const socket = io();

// JavaScript DOM Elements //
const dataContainer = document.getElementById('data-container');
const form = document.getElementById('form');
const textArea = document.getElementById('text-area');
const  button = document.getElementById('button');

// Listining Submit Event On Form //
form.addEventListener('submit' , event => {
	// Preventing Page From Submitting //
	event.preventDefault();
	// Creating Elements To Store Data //
	// createSmallElement();
	// console.log(x);
});

const createSmallElement = () => {
	let x = 0 ;
}