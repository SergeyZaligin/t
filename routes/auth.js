var express = require('express');
var router = express.Router();
var controller = require('../controllers/auth');

/* GET home page. */
router.get('/registration', controller.registration);
router.get('/login', controller.login);

router.post('/registration', controller.signup);
router.post('/login', controller.checkLogin);

module.exports = router;