const mongoose = require('mongoose');

const humansSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  currentRole: { type: String, required: true },
  currentEmployer: { type: String, required: true },
  hometown: { type: String, required: true },
  story: { type: String, required: true },
  starQty: Number,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Human', humansSchema);
