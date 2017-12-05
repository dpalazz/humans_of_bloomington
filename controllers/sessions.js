const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/users.js');
const Human = require('../models/humans.js');

// ROUTES
// ==========
// login page
router.get('/login', (req, res) => {
  try {
    res.render('login.ejs');
  } catch (err) {
    console.log(err.message);
  }
});

// new login
router.post('/login', async (req, res) => {
  console.log(req.body.username);
  try {
    const user = await User.findOne({username: req.body.username});
    if (bcrypt.compareSync(req.body.password, user.password)) {
      req.session.message = '';
      req.session.username = req.body.username;
      req.session.logged = true;
      console.log(req.session);
      res.redirect('/');
    } else {
      res.session.message = 'You entered the wrong username or password. Please try again!';
      res.redirect('humansofbloomington/login')
    }
  } catch (err) {
    res.send(err.message);
    res.redirect('/humansofbloomington/login');
  }
});

// new registration
router.get('/register', (req, res) => {
  res.render('register.ejs');
});

// registration encryption
router.post('/register', async (req, res) => {
  console.log(req.body.password);
  const password = req.body.password;
  const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const userDbEntry = {};
  userDbEntry.username = req.body.username;
  userDbEntry.password = passwordHash;
  try {
    const user = await User.create(userDbEntry);
    req.session.username = user.username;
    req.session.logged = true;
    res.redirect('/');
  } catch (err) {
    res.send('Oops! Something went wrong. Human not created!');
  }
});

// logout
router.delete('/logout', (req, res) => {
  console.log("getting to delete route");
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
