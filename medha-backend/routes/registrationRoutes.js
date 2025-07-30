const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');

// Register users to an event
router.post('/', async (req, res) => {
  try {
    const registration = await Registration.create(req.body);
    res.json(registration);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all registrations with details
router.get('/', async (req, res) => {
  const registrations = await Registration.find()
    .populate('event')
    .populate('participants');
  res.json(registrations);
});

module.exports = router;
