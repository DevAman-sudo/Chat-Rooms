// Imported NPM Packages //
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const path = require('path');
const fs  = require('fs');
const chalk = require('chalk');
const Datastore = require('nedb');

// Files Path Variables //
const staticPath = path.join( __dirname , '/public/');

// Using App And Port SetUp //
const port = process.env.PORT || 8080 ;
app.use( express.static( staticPath));

// Creating DataBase //
const database = new Datastore('database.db');
database.loadDatabase();

// Express App Router SetUp //
app.get('/' , (req , res) => {
	res.sendFile( path.join( staticPath , 'index.html'));
});

app.get('*' , (req , res) => {
	res.setHead(404);
	res.send('404 Error => Page Not Found');
});

// Listining To Server //
server.listen( port , (error) => {
	if (error) { // Catching Errors If Server Gets Some //
		console.log(`Error Found => ${error}`);
	}else {
		console.log( chalk.red.bgBlue.bold(`http://127.0.0.1:8080`));
	}
})

// CRUD Operation For NEDB Database //
// Create / Insert Data //
database.insert({
    message: 'Hello World'
});

// Read Data //
// Reading Database Stored Data With Node FileSystem //
fs.readFile('database.db' , 'utf-8' , (error , data) => {
    if (error) {
        console.log(`Error Found => ${error}`);
    } else {
        const dbData = [data];
        console.log( chalk.red.bgBlue(dbData[0].id));
    }
})