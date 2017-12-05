const express = require('express');
const router = express.Router();

// MODELS
// ==========
const Human = require('../models/humans.js');
const User = require('../models/users.js');

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
  if (req.session) {
    res.render('index.ejs', {
      allHumans: allHumans,
      user: req.session.username
    });
  } else {
    res.render('index.ejs', {
      allHumans: allHumans,
      user: false
    });
  }
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
  if (req.session) {
    res.render('show.ejs', {
    oneHuman: oneHuman,
    user: req.session.username
    })
  } else {
    res.render('index.ejs', {
      oneHuman: oneHuman,
      user: false
    })
  }
});

// star button
router.put('/:id/star', async (req, res) => {
  try {
    const starHuman = await Human.findByIdAndUpdate(req.params.id, { $inc: {starQty: +1}});
    res.redirect('back');
  } catch (err) {
    res.send(err.message);
  }
});

// update - get
router.get('/:id/edit', async (req, res) => {
  const editHuman = await Human.findById(req.params.id);
  if (req.session) {
    res.render('../views/edit.ejs', {
    editHuman: editHuman,
    user: req.session.username
    })
  } else {
    res.render('../views/edit.ejs', {
      editHuman: editHuman,
      user: false
    })
  }
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
