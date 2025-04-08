const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { authenticate } = require('../middleware/authMiddleware');

router.post('/login', authController.login);
router.get('/validate', authenticate, authController.validateToken);

module.exports = router;
