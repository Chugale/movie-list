const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const db = require('./db')
//Middleware
var cors = require('cors');
var morgan = require('morgan');

const router = require('./routes.js')

//logging and parsing
app.use(cors());
app.use(morgan('dev'))
app.use(express.json());

app.use('/api', router)
//serve client files
app.use(express.static('client/dist'));

app.all('/*', (req, res) => {
  res.status(200);
  res.send('Hello World.');
});

//run server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})
//-------------
