DROP TABLE IF EXISTS movies;

CREATE TABLE movies (
    id serial PRIMARY KEY,
    name varchar(100) NOT NULL,
    lead varchar (100) NOT NULL,
    year int
);

-- primary key is an identifer that each row must have