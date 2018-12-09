const User = require('../models/User');

module.exports.registration = function (req, res) {
    res.render('registration', {
        title: 'registration'
    });
}

module.exports.login = function (req, res) {
    res.render('login', {
        title: 'login'
    });
}

module.exports.signup = async function (req, res) {

    const validUser = new User({
        nickname: req.body.nickname,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    });

    const res = await validUser.save();
    console.log('res', res);
}

module.exports.checkLogin = function (req, res) {
    console.log(req.body);
}