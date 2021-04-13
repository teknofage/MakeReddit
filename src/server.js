require('dotenv/config');
import cors from 'cors';

console.log('Hello Node.js project.');

console.log(process.env.MY_SECRET);

const express = require('express')
const exphbs  = require('express-handlebars');
const expressValidator = require('express-validator');
const app = express()
const port = 3000

app.use(cors());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})