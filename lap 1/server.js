// without express

// sending data back and forth:
const http = require('http')

// to make the code more readable 
let allMovies = [{name:'James Bond', lead:'Daniel Craig', year: 2021},
{name:'Spiderman', lead:'Tom Holland', year: 2021}, {name: 'Avengers', lead: 'Robert Downey Jr', year: 2019}, {name: 'The Matrix', lead:'Keanu Reeves', year: 2021}, {name: 'GhostBusters', lead: 'Bill Murray', year: 2021} ]

// want server to listen, execute a function - giving a response - parse into create server
const requestListener = (req, res) => {

// recieving requests
let body;

switch (req.url) {
    case '/':
        body = { message: 'hello'}
        res.statusCode = 200; 
        break;
    case '/movies':
        // wanting to see a list of movies use a get method - putting it into an if statement 
        if (req.method === 'GET') {
            body = { movies: allMovies}
            res.statusCode = 200; 
        //  adding a delete
        } else if (req.method === 'DELETE'){
            allMovies = [];
            res.statusCode = 204;
        res.end();
        }
        break;
// new status code - using 404 means not found
    default: 
    statusCode = 404;
// using slice - removing first index
    body = { message: 'Route ${req.url.slice(1)} does not exist'}
 
}   
res.statusCode = 200;
// ending response and stringify body for it to show in json
res.end(JSON.stringify(body))
}

// listen
const server = http.createServer(requestListener)

const startServer = (port, host) => server.listen(port, host, () => console.log(`All firing on http://${host}:${port}!`))


// invoke function
startServer(3000, `localhost`)
// module.exports = { startServer }

// defining logic 


