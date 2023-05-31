// * Simple routing logic

const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/api/posting');

// * POST Route
router.post('/new', postCtrl.makePost);


module.exports = router;