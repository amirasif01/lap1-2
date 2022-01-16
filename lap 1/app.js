// using express
const express = require('express');
// starting:
const app = express(); 

// implementing get requests - this is defininng a route - pulls data and shows it. / means the home route
app.get('/',(req, res) => {
 res.send('hello world')
});

app.get('/movies',(req, res) => {
    let allMovies = [{name:'James Bond', lead:'Daniel Craig', year: 2021},
    {name:'Spiderman', lead:'Tom Holland', year: 2021}, {name: 'Avengers', lead: 'Robert Downey Jr', year: 2019}, {name: 'The Matrix', lead:'Keanu Reeves', year: 2021}, {name: 'GhostBusters', lead: 'Bill Murray', year: 2021} ]
    res.send(allMovies)
   });
// defining route

// listenng on a given port
app.listen(3000,() => {
    console.log(`listening at http://localhost:${3000}`)
})

// node server.js -- now set up express server and started 
// install nodemon to start it - in dev