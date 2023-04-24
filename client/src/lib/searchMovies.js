import { API_KEY } from '../config/config.js';
import axios from 'axios';

const base_url = "https://api.themoviedb.org/3/";
// const pre_query = base_url + API_KEY;

async function searchMovies (query, callback) {
  const response = await fetch(base_url + "search/movie?" + new URLSearchParams({
    api_key: API_KEY,
    query: query,
  }));
  const test = await response.json();
  // console.log('this is test from searchMovies', test);
  findMovies(test.results[0].id, callback);
};

async function findMovies(extID, callback) { //fix fetch
  const response = await fetch(base_url + "movie/" + extID + "?" + new URLSearchParams({
    api_key: API_KEY,
  }));
  const test = await response.json();
  // console.log('this is test from findMovies', test);
  callback(test);
};

export async function getImage(callback) { //fix fetch
  const response = await fetch(base_url + "configuration?" + new URLSearchParams({
    api_key: API_KEY,
  }));

  const test = await response.json();
  console.log('this is test from getImage', test);
  let imageObj= { //base url, file dir and size are needed
    base: test.images.base_url,
    //also logo_sizes, poster, profile, still
    size: test.images.backdrop_sizes[0]
  };
  callback(imageObj)
}

export default searchMovies;