const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

const expressValidator = require('express-validator');
var cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");

// App Setup
const app = express();

// Set db
require('./data/reddit-db');

// Middleware
const exphbs  = require('express-handlebars');

// Use Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(cookieParser()); // Add this after you initialize express.


// Add after body parser initialization!
app.use(expressValidator());
app.use(express.static('public'));

app.engine('handlebars', expressHandlebars({
  handlebars: allowInsecurePrototypeAccess(Handlebars)
}));app.set('view engine', 'handlebars');

var checkAuth = (req, res, next) => {
  console.log("Checking authentication");
  if (typeof req.cookies.nToken === "undefined" || req.cookies.nToken === null) {
    req.user = null;
  } else {
    var token = req.cookies.nToken;
    var decodedToken = jwt.decode(token, { complete: true }) || {};
    req.user = decodedToken.payload;
  }

  next();
};
app.use(checkAuth);

require('./controllers/posts.js')(app);
require('./controllers/auth.js')(app);

app.listen(3000, () => {
  console.log(`Example app listening.`)
})