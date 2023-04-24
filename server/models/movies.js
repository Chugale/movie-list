var db = require('../db');
var apiInfo = require('../lib/searchMovies');
module.exports = {

  getDB: function() {
    return new Promise((resolve, reject) => {
      let queryString = 'SELECT * FROM movies';
      db.query(queryString, (err, results) => {
        if (err) {
          console.log('error with getAll retrieving data from servers. Model error');
          reject(err);
        } else {
          console.log('sucess with getAll of data from servers. Model side');
          resolve(results);
        }
      })
    })
  },

  insertDB: function(params) { // TODO: write in code to handle pulling info off api and adding to db
    return new Promise((resolve, reject) => {
      let queryString = 'INSERT into movies (title, watched) VALUE (?, ?)';
      db.query(queryString, params, (err, results) => {
        if (err) {
          console.error('failed to create movie item in model');
          reject(err);
        } else {
          console.log('success on movie to list');
          resolve(results);
        }
      })
    })
  }
  // a function which can be used to insert a user into the database

  // create: (body, callback) => {
  //   let sql = 'INSERT INTO users SET ?';
  //   db.query(sql, body, (err) => {
  //     callback(err);
  //   });
  // }
};
