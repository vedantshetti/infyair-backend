const express = require('express');
const router = express.Router();
const geographyController = require('../controllers/geographyController');
const { authenticate } = require('../middleware/authMiddleware');

router.get('/', authenticate, geographyController.getGeographicData);
router.get('/postal-codes', authenticate, geographyController.getPostalCodes);
router.get('/regions', authenticate, geographyController.getRegions);
router.get('/states', authenticate, geographyController.getStates);
router.get('/cities', authenticate, geographyController.getCities);

module.exports = router;
