// backend/routes/duel.routes.js
const express = require('express');
const router = express.Router();
const duelController = require('../controllers/duel.controller');

// Route GET /
router.get('/', duelController.getDuelHome);

module.exports = router;
