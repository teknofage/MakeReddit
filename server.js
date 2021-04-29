// Require Libraries
const express = require('express')
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const app = express();
const port = 3000;

// Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add after body parser initialization!
app.use(expressValidator());

// Set db
require('./data/reddit-db');

const dotenv = require('dotenv/config');
const path = require('path'); 

const cors = require('cors');

console.log('Hello Node.js project.');
console.log(process.env.MY_SECRET);

// App Setup

// Middleware
app.engine("handlebars", exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// view engine setup
app.use(express.static('public'));


app.use(cors());

// ROUTES
app.get('/', (req, res) => {
  res.render('home')
})

app.get('/post/new', (req, res) => {
  res.render('post-new')
})

require('./controllers/post.js')(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})