module.exports.index = function (req, res) {
    res.render('index', {
        title: 'Home',
        user: req.session.nickname
    });
}

module.exports.about = function (req, res) {
    res.render('about', {
        title: 'About'
    });
}