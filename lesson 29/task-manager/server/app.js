import express from 'express';
import bodyParser from 'body-parser';


var http = require('http');
var fs = require('fs');


import * as db from './utils/DataBaseUtils.js';


db.setUpConnection();

const app = express();

app.use( bodyParser.json() );
app.use(express.static(__dirname + '/asset'));

// redirect route from '/' to '/rating'
app.get('/', (req, res) => {
	res.redirect('http://localhost:8080/login');
});

// login
app.get('/login', (req,res) => {
	res.status(200).sendFile(__dirname + '/login.html')
});


app.get('/task', (req,res) => {
    res.status(200).sendFile(__dirname + '/index.html')
});


// manager or teacher authentication check
app.post('/login', (req,res) => {
	db.searchUser(req.body.login).then(data => {
		if (data == null) {
			res.sendStatus(404);
		} else
			{
				if (req.body.login == data._doc.login && req.body.password == data._doc.password) {
				 	res.send(data);
				} else {
					res.sendStatus(404);
				};
			}
		});
});

const server = app.listen(8080, () => {
	console.log("Server is up and running on port 8080");
});
