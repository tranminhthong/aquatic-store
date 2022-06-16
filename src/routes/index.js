const user = require('./user/index')

function route(app) {
    app.use('/user', user)
}

module.exports = route;
