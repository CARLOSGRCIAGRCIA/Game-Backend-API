const express = require('express');
const router = express.Router();
const Game = require('../models/game');

// GET /game (obtener todos los juegos)
router.get('/', async (req, res, next) => {
    try {
      const games = await Game.find();
      res.status(200).json(games);
    } catch (error) {
      next(error);
    }
  });

// POST /game
router.post('/', async (req, res, next) => {
  try {
    const game = new Game(req.body);
    await game.save();
    res.status(201).json(game);
  } catch (error) {
    next(error);
  }
});

// GET /game/:id
router.get('/:id', async (req, res, next) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) return res.status(404).json({ message: 'Game not found' });
    res.status(200).json(game);
  } catch (error) {
    next(error);
  }
});

// PUT /game/:id
router.put('/:id', async (req, res, next) => {
  try {
    const game = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!game) return res.status(404).json({ message: 'Game not found' });
    res.status(200).json(game);
  } catch (error) {
    next(error);
  }
});

// DELETE /game/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const game = await Game.findByIdAndDelete(req.params.id);
    if (!game) return res.status(404).json({ message: 'Game not found' });
    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

// PATCH /game/:id
router.patch('/:id', async (req, res, next) => {
  try {
    const game = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!game) return res.status(404).json({ message: 'Game not found' });
    res.status(200).json(game);
  } catch (error) {
    next(error);
  }
});

module.exports = router;