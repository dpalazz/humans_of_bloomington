const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const session = require('express-session');
const methodOverride = require('method-override');
const app = express();
const port = process.env.PORT || 3000;

// CONNECT TO DATABASE
// ==========
// Heroku (production/clean) or Local (working/dirty)
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/humansofbloomington';
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
const sessionsController = require('./controllers/sessions.js');

// MIDDLEWARE
// ==========
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(morgan('dev'));
app.use(methodOverride('method'));
app.use(session({
  secret: 'lsadkfj93jfhhhhh',
  resave: false,
  saveUninitialized: false
}));
app.use(express.static('public'));

// use of controllers
app.use('/humansofbloomington/session', sessionsController);
app.use('/humansofbloomington', humansController);

// ROUTES
// ==========
// root
app.get('/', (req, res) => {
  res.redirect('/humansofbloomington');
});

// session
app.get('/app', (req, res) => {
  if (req.session.user) {
    res.send('nonsense');
  } else {
    res.redirect('/sessions/new');
  }
})

//PORT LISTENER
// ==========
app.listen(port, () => {
  console.log("====================");
  console.log("Listening..." + port);
  console.log("====================");
});
