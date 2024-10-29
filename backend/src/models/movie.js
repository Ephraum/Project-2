const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Movie = sequelize.define('Movie', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  rating: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
});

module.exports = Movie;
