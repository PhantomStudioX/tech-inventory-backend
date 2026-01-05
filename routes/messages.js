const express = require('express');
const Message = require('../models/Message');
const router = express.Router();

// Save new message
router.post('/', async (req, res) => {
  try {
    const msg = await Message.create(req.body);
    res.json(msg);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save message' });
  }
});

// Get all messages (admin)
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});

// ✅ DELETE message (admin)
router.delete('/:id', async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete message' });
  }
});

module.exports = router;