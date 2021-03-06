// DEPENDENCIES
// ==========
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
  try {
    const user = await User.findOne({username: req.body.username});
    if (user !== null) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        req.session.message = '';
        req.session.username = req.body.username;
        req.session.logged = true;
        req.session.currentuser = user;
        res.redirect('/');
      } else {
        res.render('wronglogin.ejs');
      }
    } else {
      res.render('wronglogin.ejs');
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
  const password = req.body.password;
  const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const user = await User.find({username: req.body.username});
  if (user.length === 0) {
    const userDbEntry = {};
    userDbEntry.username = req.body.username;
    userDbEntry.password = passwordHash;
    try {
      const user = await User.create(userDbEntry);
      req.session.username = user.username;
      req.session.logged = true;
      res.redirect('/humansofbloomington/session/login');
    } catch (err) {
      res.render('wrongregister.ejs');
      }
  } else {
    res.render('wrongregister.ejs')
  }
});

// logout
router.delete('/logout', (req, res) => {
  console.log("getting to delete route");
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
