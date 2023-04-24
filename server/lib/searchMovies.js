var API_KEY = require('../config/config.js');
const axios = require('axios');

const url = `https://api.themoviedb.org/3/search/movie?`


module.exports = { //copied form client, need to fix
  async function searchMovies (query, callback) {
    let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&${query}`);

    const test = await response.json();
    // console.log('this is test from searchMovies', test);
    findMovies(test.results[0].id, callback);
  };

  async function findMovies(extID, callback) {
    let response = await fetch(`https://api.themoviedb.org/3/find/${extID}?api+key=${API_KEY}&external_source=imdb_id`);

    const test = await response.json();
    // console.log('this is test from findMovies', test);
    callback(test);
  };

  export async function getImage(callback) {
    let response = await fetch(`https://api.themoviedb.org/3/configuration/api_key=${API_KEY}`);

    const test = await response.json();
    console.log('this is test from getImage', test);
    let imageObj= { //base url, file dir and size are needed
      base: test.images.base_url,
      //also logo_sizes, poster, profile, still
      size: test.images.backdrop_sizes[0]
    };
    callback(imageObj)
  }

};