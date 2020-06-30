const express = require('express');
const morgan = require('morgan');
var cors = require('cors');
const db = require('../database/index.js');
const path = require('path');
const Listings = require('../database/ListingsNear.js')

const app = express();
const port = 8003;

app.use(morgan('dev'));
app.use(express.json())
app.use(cors());
app.use(express.static(path.resolve(__dirname + '/../client/dist')));

app.get('/listings', (req, res) => {
  Listings.find({}).limit(10)
  .then((data) => {
    res.send(data);
  })
  .catch(err => 'error');
});


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

module.exports = app;