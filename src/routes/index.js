const user = require('./user/index');
const site = require('./site/index');

function route(app) {
    app.use('/user', user);

    app.use('/site', site);

}

module.exports = route;
