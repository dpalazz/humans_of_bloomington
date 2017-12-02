const express = require('express');
const router = express.Router;

// MODELS
// ==========
const Human = require('../models/humans.js');

// ROUTES
// ==========
router.get('/', (req, res) => {
  res.render("index.ejs");
});


module.exports = router;
