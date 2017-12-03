const express = require('express');
const router = express.Router();

// MODELS
// ==========
const Human = require('../models/humans.js');

// MIDDLEWARE
// ==========
const methodOverride = require('method-override');
router.use(express.urlencoded({ extended: false }));
router.use(express.json());
router.use(methodOverride('_method'));
router.use(express.static('public'));

// ROUTES
// ==========
// index
router.get('/', async (req, res) => {
  const allHumans = await Human.find();
  res.render('index.ejs', {allHumans});
});

// create - post
router.post('/', async (req, res) => {
  try {
    const createdHuman = await Human.create(req.body);
    res.redirect('/');
  } catch (err) {
    res.send(err.message);
  }
});

// create - get
router.get('/new', (req, res) => {
  res.render('new.ejs', {})
});

// show
router.get('/:id', async (req, res) => {
  const oneHuman = await Human.findById(req.params.id);
  res.render('show.ejs', {oneHuman});
});

// update - get
router.get('/:id/edit', async (req, res) => {
  const editHuman = await Human.findById(req.params.id);
  res.render('../views/edit.ejs', {editHuman});
});

// update - put
router.put('/:id', async (req, res) => {
  await Human.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/humansofbloomington/' + req.params.id);
});

// delete
router.delete('/:id', async (req, res) => {
  await Human.findByIdAndRemove(req.params.id);
  res.redirect('/');
});

module.exports = router;
