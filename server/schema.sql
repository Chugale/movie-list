DROP DATABASE IF EXISTS movieList;

CREATE DATABASE movieList;

USE movieList;

CREATE TABLE movies (
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title varchar(2000) NOT NULL,
  watched BOOLEAN
);
-- year, runtime, metascore, imdbRating === still need to add


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
-- mysql -u root < /Users/ericlee/HackReactor/rfp2303-movie-list/server/schema.sql