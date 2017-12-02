const express = require('express');
const router = express.Router();

// MODELS
// ==========
const Human = require('../models/humans.js');

// ROUTES
// ==========
// index
router.get('/', async (req, res) => {
  const allHumans = await Human.find();
  res.render('index.ejs', {allHumans});
});

// create - form
router.post('/', async (req, res) => {
  try {
    const createdHuman = await Human.create(req.body);
    res.redirect('/');
  } catch (err) {
    res.send(err.message);
  }
})
// create - create
router.get('/new', (req, res) => {
  res.render('new.ejs')
});

// show
router.get('/:id', async (req, res) => {
  const oneHuman = await Human.findById(req.params.id);
  res.render('show.ejs', {oneHuman});
});

// update - form

// update - update


module.exports = router;
