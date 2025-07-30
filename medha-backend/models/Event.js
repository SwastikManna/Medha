const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  venue: String,
  date: { type: String, required: true },
  time: String,
  maxTeamSize: Number,
});

module.exports = mongoose.model('Event', eventSchema);
