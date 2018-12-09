var express = require('express');
var router = express.Router();
var controller = require('../controllers/auth');

/* GET home page. */
router.get('/registration', controller.registration);
router.get('/login', controller.login);

module.exports = router;