const mongoose = require('mongoose');

const humansSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  currentRole: { type: String, required: true },
  currentEmployer: { type: String, required: true },
  hometown: { type: String, required: true },
  story: { type: String, required: true },
  starQty: Number
});

module.exports = mongoose.model('Human', humansSchema);
