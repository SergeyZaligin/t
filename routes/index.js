const express = require('express');
const router = express.Router();
const controller = require('../controllers/index');
const guardRoutes = require('../middleware/guardRoutes');

/* GET home page. */
router.get('/', controller.index);
router.get('/about', guardRoutes.guardAdminRoutes, controller.about);

module.exports = router;