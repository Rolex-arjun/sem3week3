const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Place Order
router.post('/', async (req, res) => {
  const newOrder = new Order(req.body);
  await newOrder.save();
  res.status(201).json(newOrder);
});

// Get Orders by User
router.get('/:userId', async (req, res) => {
  const orders = await Order.find({ userId: req.params.userId });
  res.json(orders);
});

module.exports = router;
