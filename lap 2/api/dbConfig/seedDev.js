// importing connection with database
const db = require('./init');
// fs - node.js library to run filesystem operations
const fs = require('fs');
// reading file - contains movies insert
const seeds = fs.readFileSync(__dirname + '/dev_seeds.sql').toString();
// execute queries
db.query(seeds, () => console.log('Dev database seeded'));