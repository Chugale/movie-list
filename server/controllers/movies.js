var models = require('../models/movies');

module.exports = {

  get: function(req, res) {
    models.getDB()
    .then((movies) => {
      console.log('movie retrieved from server', movies);
      res.json(movies);
    })
    .catch((err) => {
      console.error('failure to retrieve movies from data base. controller log', err);
      res.status(500);
    })
  },

  post: function(req, res) {
    let params = [req.body.title, req.body.watched];
    models.insertDB(params)
    .then((movie) => {
      console.log('movie was added to list via control');
      res.status(201);
    })
    .catch((err) => {
      console.error('failed to post to movie list. contorller log', err);
      res.status(500);
    })
    }
};


 // post: (req, res) => {
  //   models.users.create(req.body, function(err) {
  //     if (err) {
  //       res.status(404);
  //       res.send('Username not created');
  //     } else {
  //       res.status(201);
  //       res.send('Message added');
  //     }
  //   });
  // }
