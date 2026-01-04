const express = require('express');
const Message = require('../models/Message');
const router = express.Router();

// Save new message
router.post('/', async (req, res) => {
  const msg = await Message.create(req.body);
  res.json(msg);
});

// Get all messages (admin)
router.get('/', async (req, res) => {
  const messages = await Message.find().sort({ createdAt: -1 });
  res.json(messages);
});

module.exports = router;