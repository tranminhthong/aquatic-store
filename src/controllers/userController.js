class UserController {

    // GET list user
    getListUsers(req, res) {
        res.render('list-user');
    }

    createUser(req, res) {
        console.log(req.body);
        res.render('create-form');
    }

}

module.exports = new UserController;
