class RegisterController {
    register(req, res) {
        if (req.method == 'POST') {
            res.redirect('/login');
        } else {
            res.render('register', { layout: false });
        }
    }
}

module.exports = new RegisterController;