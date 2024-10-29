const Movie = require('../../../models/movie');

exports.getMovies = async (req, res) => {
  try {
    const movies = await Movie.findAll();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve movies' });
  }
};

exports.addMovie = async (req, res) => {
  const { title, description, rating } = req.body;
  try {
    const movie = await Movie.create({ title, description, rating });
    res.status(201).json(movie);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add movie' });
  }
};
