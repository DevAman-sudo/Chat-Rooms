// Importing Socket Iiabrary //
const socket = io();

// Fetching User Name //
const promptName = prompt("Enter Your Name => ");

// Global Variables //
var name;

// Web Socket | Socket.Io Events //
socket.emit( 'fetch-name' , promptName);
socket.on('broadcast-name' , (username) => {
    console.log(`dndnd    ${username}`);
    username === name ;
});
console.log(name);