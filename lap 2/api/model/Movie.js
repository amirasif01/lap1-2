const db = require('../dbConfig/init')

module.exports = class Movie {
    constructor(data){
    this.id = data.id
    this.name = data.name
    this.lead = data.lead
    this.year = data.year
    };

    static get all(){
        return new Promise (async(resolve, reject) => {
            try {
                // console.log(db);
                const result = await db.query('SELECT * FROM movies;')
                console.log(result) 
                console.log(result.rows)
                const movies = result.rows.map(a => ({id:a.id, name:a.name, lead:a.lead, year:a.year}))
                console.log(movies)
                resolve(movies)
            } catch (err) {
                reject("Error can not retrieve all movies")
            }
        });

    }

    static findById(id){
        return new Promise (async (resolve, reject) => {
            try {
                let moviesData = await db.query('SELECT * FROM movies WHERE id = $1;', [ id ]);
                let movies = new Movie(moviesData.rows[0]);
                resolve(movies);
            } catch (err) {
                reject('Movie not found');
            };
        });
    };


    destroy(){
        return new Promise(async(resolve,reject) => {
            try {
                const result = await db.query('DELETE FROM movies WHERE id = $1 RETURNING id;', [this.id])
                resolve(`Movie ${result.id} was deleted`)
            } catch (err) {
                reject('Movie could not be deleted')
            }
        })
    }

    static create (name, lead, year){
        return new Promise(async(resolve, reject) => {
            try {
                let movieData = await db.query(`INSERT INTO movies (name, lead, year) VALUES ($1, $2, $3);`, [ name, lead, year ]);
                console.log(movieData)
                // let movie = new Movie(movieData.rows[0]);
                // console.log(movie)
                // resolve(movie);
            }   catch (err) {
                reject('Movie could not be created')
            }
        })
    }
}



