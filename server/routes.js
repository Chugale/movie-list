var controller = require('./controllers/movies');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/movies', controller.get);

router.post('/movies', controller.post);



module.exports = router;