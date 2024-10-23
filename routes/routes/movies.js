const express = require('express');
const axios = require('axios');
const { Movie } = require('../models/Movie')(require('../server').sequelize);
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

// Search Movies
router.get('/search/:query', async (req, res) => {
  const { query } = req.params;
  try {
    const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=${process.env.OMDB_API_KEY}`);
    const movies = response.data.Search;

    // Optionally, save movies to the database
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch movie data' });
  }
});

// Get Movie Details
router.get('/:imdbID', async (req, res) => {
  const { imdbID } = req.params;
  try {
    let movie = await Movie.findOne({ where: { imdbID } });
    if (!movie) {
      const response = await axios.get(`http://www.omdbapi.com/?i=${imdbID}&apikey=${process.env.OMDB_API_KEY}`);
      movie = await Movie.create({
        imdbID: response.data.imdbID,
        title: response.data.Title,
        poster: response.data.Poster,
        plot: response.data.Plot,
        genre: response.data.Genre,
        director: response.data.Director,
        actors: response.data.Actors
      });
    }
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch movie details' });
  }
});

module.exports = router;
