const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const route = require('./routes');
require('dotenv/config');
const livereload = require('livereload');
const connectLiveReload = require('connect-livereload');
const liveReloadServer = livereload.createServer();
liveReloadServer.server.once('connection', () => {
  setTimeout(() => {
    liveReloadServer.refresh('/');
  }, 100);
});

const app = express();
app.use(connectLiveReload());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('short'));
app.engine('hbs', handlebars.create({ extname: '.hbs' }).engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './views'));
app.use(express.static(path.join(__dirname, 'public')));

route(app);

app.listen(process.env.PORT, () => {
  console.log('App is running on http://localhost:' + process.env.PORT);
});
