// const express = require('express');
import express from 'express';
import { register, login } from  '../src/config/controllers/userController.js';
const router = express.Router();

router.post('/register', register);
router.post('/login', login);

export default router;
