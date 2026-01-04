const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Message', messageSchema);