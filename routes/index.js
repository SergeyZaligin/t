var express = require('express');
var router = express.Router();
var controller = require('../controllers/index');
var guardRoutes = require('../middleware/guardRoutes');

/* GET home page. */
router.get('/', controller.index);
router.get('/about', guardRoutes.guardAdminRoutes, controller.about);

module.exports = router;