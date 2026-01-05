const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: String,
  phone: String,
  items: [
    {
      id: String,
      name: String,
      price: String,
      qty: Number
    }
  ],
  total: Number,
  status: {
    type: String,
    default: 'Pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', orderSchema);