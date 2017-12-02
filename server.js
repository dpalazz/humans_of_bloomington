const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const app = express();
const port = 3000;

// CONNECT TO DATABASE
// ==========
const mongoURI = 'mongodb://localhost:27017/humans';
mongoose.connect(mongoURI, { useMongoClient: true});
mongoose.Promise = global.Promise;

// DATABASE TESTING
// ==========
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message));
db.on('connected', () => console.log('Mongo running... ', mongoURI));

// CONTROLLERS
// ==========
const humansController = require('./controllers/humans.js');

// MIDDLEWARE
// ==========
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(morgan('dev'));
app.use('/humans', humansController);

// ROOT ROUTE
// ==========
app.get('/', (req, res) => {
  res.redirect('/humans')
});

//PORT LISTENER
// ==========
app.listen(port, () => {
  console.log("====================");
  console.log("Listening...");
  console.log("====================");
});
