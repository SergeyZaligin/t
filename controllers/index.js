module.exports.index = (req, res) => {
    res.render('index', {
        title: 'Home',
        user: req.session.nickname
    });
}

module.exports.about = (req, res) => {
    res.render('about', {
        title: 'About'
    });
}