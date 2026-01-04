const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

// Save order
router.post('/', async (req, res) => {
  const order = await Order.create(req.body);
  res.json(order);
});

// Get orders (admin)
router.get('/', async (req, res) => {
  const orders = await Order.find().sort({ createdAt: -1 });
  res.json(orders);
});

module.exports = router;