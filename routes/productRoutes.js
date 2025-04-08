const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { authenticate } = require('../middleware/authMiddleware');

router.get('/', authenticate, productController.getAllProducts);
router.get('/:id', authenticate, productController.getProductById);

module.exports = router;
