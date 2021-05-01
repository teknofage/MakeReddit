const express = require('express');
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
// App Setup
const app = express();

// Set db
require('./data/reddit-db');

// Middleware
const exphbs  = require('express-handlebars');

// Use Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

// Add after body parser initialization!
app.use(expressValidator());

app.use(express.static('public'));

app.engine('handlebars', expressHandlebars({
  handlebars: allowInsecurePrototypeAccess(Handlebars)
}));app.set('view engine', 'handlebars');

const dotenv = require('dotenv/config');
require('./controllers/posts.js')(app);
require('./controllers/auth.js')(app);

app.listen(3000, () => {
  console.log(`Example app listening.`)
})