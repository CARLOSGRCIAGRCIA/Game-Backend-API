const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  releaseYear: { type: Number, required: true },
  rating: { type: Number, min: 0, max: 10 }
});

module.exports = mongoose.model('Game', gameSchema);