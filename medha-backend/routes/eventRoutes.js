const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// ✅ ADD THIS GET ROUTE to return all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find({});
    res.json(events);
  } catch (error) {
    console.error('❌ Error fetching events:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Existing POST route (keep this as is)
router.post('/', async (req, res) => {
  console.log('📩 POST /api/events called');
  console.log('📦 Request body:', req.body);

  try {
    const { name, description, venue, time, maxTeamSize } = req.body;

    if (!name || !description || !venue || !time || !maxTeamSize) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newEvent = new Event({
      name,
      description,
      venue,
      time,
      maxTeamSize,
    });

    await newEvent.save();
    console.log('✅ Event saved successfully');
    res.status(201).json({ message: 'Event created successfully' });
  } catch (error) {
    console.error('❌ Error saving event:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
