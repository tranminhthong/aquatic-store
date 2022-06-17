class LoginController {
    login(req, res, next) {
        if (req.method == 'POST') {
            res.redirect('/user')
        } else {
            res.render('login', { layout: false })
        }
    }

}

module.exports = new LoginController;