const express = require('express');
const router = express.Router();
const controller = require('../controllers/auth');

/* GET home page. */
router.get('/registration', controller.registration);
router.get('/login', controller.login);

router.post('/registration', controller.signup);
router.post('/login', controller.checkLogin);

module.exports = router;