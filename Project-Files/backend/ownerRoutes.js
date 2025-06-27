const express = require('express');
const router = express.Router();
const { addProperty, updateProperty } = require('../controllers/ownerController');

router.post('/add', addProperty);
router.put('/update', updateProperty);

module.exports = router;