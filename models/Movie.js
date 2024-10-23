const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Movie = sequelize.define('Movie', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    imdbID: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    poster: {
      type: DataTypes.STRING,
      allowNull: true
    },
    plot: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    director: {
      type: DataTypes.STRING,
      allowNull: true
    },
    actors: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  return Movie;
};
