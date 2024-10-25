// const express = require('express');
import express from 'express';
const { getMovies, addMovie } = require('../controllers/movieController');
import  router from 'express';

router.get('/movies', getMovies);
router.post('/movies', addMovie);

export default router;
