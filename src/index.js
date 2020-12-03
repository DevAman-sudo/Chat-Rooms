// Npm packages //
const express = require('express');
const app = express(); // Express App Server //
const http = require('http').createServer(app); // Created Http Server //
const webSocket = require('socket.io');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

// App , Http and Port //
const io = webSocket(http);
const port = process.env.PORT || 8080; // if Web App Is Hoated it will Run in Given Domain Name , else on Poet 8080 //

// File Path Decleration Area //
const staticPath = path.join(__dirname, '../public'); // All Static Web Pages stored in Public Folder //
const indexPagePath = path.join(staticPath, '/index.html');

// Serving Public Folder Static Pages //
app.use(express.static(staticPath));

// Page Routing Area //
app.get('/', (req, res) => {
    // Serving Deafult Page (index.html) //
    fs.readFileSync(indexPagePath, 'utf-8', (err, data) => {
        if (err) {
            console.log(chalk.blue.bgRed.bold(`Error Found (index page routing) :: ${err}`));
        } else {
            res.send(`${data}`);
        }
    });
});

// Serving 404 Error Page (404.html) //
app.get('*', (req, res) => {
    res.send(`404 Error Found`);
});

// listining on Port 8080 //
http.listen(port, (err) => {
    if (err) {
        console.log(chalk.blue.bgRed.bold(`Error Found :: ${err}`));
    } else {
        console.log(chalk.red.bgBlue.bold(`http://127.0.0.1:${port}`));
    }
});

// Web Socket (socket.io) Connection/Events //
users = {}; // Users Container //

io.on('connection', (socket) => {
    
});
