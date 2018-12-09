module.exports.index = function (req, res) {
    res.render('index', {
        title: 'Home'
    });
}

module.exports.about = function (req, res) {
    res.render('about', {
        title: 'About'
    });
}