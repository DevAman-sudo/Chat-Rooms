// Imported NPM Packages //
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const Datastore = require('nedb');

// Files Path Variables //
const staticPath = path.join(__dirname, '/public/');

// Using App And Port SetUp //
const port = process.env.PORT || 8080;
app.use(express.static(staticPath));

// Creating DataBase // We Can Create Multipal DataBase //
const database = new Datastore({
    filename: path.join(__dirname, 'database.db'),
    autoload: true
});
database.loadDatabase(error => {
    // Catching Errors Of Database //
    if (error) {
        console.log(chalk.blue.bgRed(`DataBase Error Found => ${error}`));
    }
});

// Express App Router SetUp //
app.get('/', (req, res) => {
    res.sendFile(path.join(staticPath, 'index.html'));
});

app.get('*', (req, res) => {
    res.setHead(404);
    res.send('404 Error => Page Not Found');
});

// Listining To Server //
server.listen(port, (error) => {
    if (error) {
        // Catching Errors If Server Gets Some //
        console.log(`Error Found => ${error}`);
    } else {
        console.log(chalk.red.bgBlue.bold(`http://127.0.0.1:8080`));
    }
});