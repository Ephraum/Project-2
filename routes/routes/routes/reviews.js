const express = require('express');
const { Review } = require('../models/Review')(require('../server').sequelize);
const { Movie } = require('../models/Movie')(require('../server').sequelize);
const { User } = require('../models/User')(require('../server').sequelize);
const jwt = require('jsonwebtoken');
const router = express.Router();

// Middleware to protect routes
const authenticate = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ error: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ error: 'Token is not valid' });
  }
};

// Add a Review
router.post('/', authenticate, async (req, res) => {
  const { movieId, rating, comment } = req.body;
  try {
    const review = await Review.create({
      userId: req.user.id,
      movieId,
      rating,
      comment
    });
    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get Reviews for a Movie
router.get('/movie/:movieId', async (req, res) => {
  const { movieId } = req.params;
  try {
    const reviews = await Review.findAll({
      where: { movieId },
      include: [{ model: User, attributes: ['username'] }]
    });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch reviews' });
  }
});

module.exports = router;
