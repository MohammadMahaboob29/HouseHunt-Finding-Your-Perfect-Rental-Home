const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getProperties } = require('../controllers/userController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/properties', getProperties);

module.exports = router;