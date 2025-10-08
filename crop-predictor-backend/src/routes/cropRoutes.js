const express = require('express');
const { recommendCrop } = require('../controllers/controller');

const router = express.Router();

// POST /recommend
router.post('/recommend', recommendCrop);

module.exports = router;