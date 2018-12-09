const User = require('../models/User');

module.exports.registration = (req, res) => {
    res.render('registration', {
        title: 'registration'
    });
}

module.exports.login = (req, res) => {
    res.render('login', {
        title: 'login'
    });
}

module.exports.signup = async (req, res) => {

    const validUser = new User({
        nickname: req.body.nickname,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    });

    const resp = await validUser.save();
    console.log('res', resp);
    res.redirect('/auth/registration');
}

module.exports.checkLogin = async (req, res) => {

    const candidate = await User.findOne({
        email: req.body.email
    });

    console.log('CANDIDATE', candidate);

    if (candidate) {
        const passwordResult = candidate.password;
        if (passwordResult) {
            req.session.nickname = candidate.nickname;
            req.session.id = candidate._id;
            req.session.role = candidate.role;
            res.status(200).json({
                message: 'Вы вошли на сайт.'
            });
        } else {
            res.status(401).json({
                message: 'Логин или пароль не совпадают'
            });
        }
    } else {
        res.status(404).json({
            message: 'Пользователь не зарегистрирован'
        });
    }
}