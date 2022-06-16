class UserController {

    getListUsers(req, res) {
        res.render('list-user');
    }

}

module.exports = new UserController;
