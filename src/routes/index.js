const user = require('./user/index');
const site = require('./site/index');
const login = require('./login/index');
const register = require('./register/index');

function route(app) {
    app.use('/user', user);

    app.use('/site', site);

    app.use('/login', login)

    app.use('/register', register)

}

module.exports = route;