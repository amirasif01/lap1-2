// express library
const express = require('express');
const cors = require('cors');

// setting up the web server
const server = express();
server.use(cors());
server.use(express.json());
// server.use(express.static('client'))
// routing takes place
const moviesRoutes = require('./routes/movies')
server.use('/movies', moviesRoutes)
server.get('/', (req, res) => res.send('Welcome to the library'))

module.exports = server