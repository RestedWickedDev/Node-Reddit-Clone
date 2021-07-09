// Dotenv
require('dotenv').config();

// Require Libraries
const express = require('express');
const cookieParser = require('cookie-parser');
const checkAuth = require('./middleware/checkAuth');

// App Setup
const app = express();

// Middleware
const exphbs  = require('express-handlebars');

app.use(express.static('public'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(checkAuth);



// Set db
require('./data/reddit-db');

// Controllers
require('./controllers/posts')(app);
require('./controllers/comments.js')(app);
require('./controllers/auth.js')(app);
require('./controllers/replies.js')(app);

// Start Server

app.listen(3000, () => {
    console.log('RedditJS listening on port localhost:3000!');
  });

module.exports = app;
