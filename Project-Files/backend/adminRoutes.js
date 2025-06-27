const express = require('express');
const router = express.Router();
const { approveOwner } = require('../controllers/adminController');

router.post('/approve', approveOwner);

module.exports = router;