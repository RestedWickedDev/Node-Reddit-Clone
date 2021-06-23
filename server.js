// Require Libraries
const express = require('express');


// App Setup
const app = express();

// Middleware
const exphbs  = require('express-handlebars');


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set db
require('./data/reddit-db');

// Controllers
require('./controllers/posts')(app);
require('./controllers/comments.js')(app);


// Start Server

app.listen(3000, () => {
    console.log('RedditJS listening on port localhost:3000!');
  });

module.exports = app;
