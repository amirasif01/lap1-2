const Movie = require('../model/Movie')

// movies index
async function index (req, res) {
    try {
        const movies = await Movie.all
        // res.status(200).sendFile('index.html')
        res.status(200).json(movies)
    } catch (err) {
        res.status(500).json({err})
    }
}
// showing all the movies already inputted into the data
async function show (req, res) {
    try {
        const movies = await Movie.findById(req.params.id);
        res.status(200).json(movies)
    } catch (err) {
        res.status(404).json({err})
    }
}

// Movie route create
async function create (req, res){
    try {
        // testing connection between frontend and backend
        // res.status(200).json("{success: test}")
        // return
        console.log(req.body.name, req.body.lead, req.body.year)
        const movies = await Movie.create(req.body.name, req.body.lead, req.body.year) 
        res.status(201).json(movies)
    } catch (err) {
        res.status(422).json({err})
    }
}

// Destroying/deleting a movie
async function destroy (req, res) {
    try {
        const movies = await Movie.findById(req.params.id);
        const resp = movies.destroy();
        res.status(204).end();
    } catch (err) {
        res.status(404).json({err});
    };
}

// exporting to allow this to be available and accessible
module.exports = {index, show, create, destroy}