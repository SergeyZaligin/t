var express = require('express');
var router = express.Router();
var controller = require('../controllers/index');

/* GET home page. */
router.get('/', controller.index);
router.get('/about', controller.about);

module.exports = router;