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

module.exports.signup = function (req, res) {
    console.log(req.body);
}

module.exports.checkLogin = function (req, res) {

}