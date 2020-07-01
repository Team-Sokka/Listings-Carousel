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
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.resolve(__dirname + '/../client/dist')));

app.get('/listings/:id', (req, res) => {
  console.log(req.params);
  Listings.find({houseId: req.params.id})
  .then((data) => {
    return Listings.find({zipcode: data[0].zipcode})
  })
  .then((data) => {
    res.send(data);
  })
  .catch(err => 'error');
});


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

module.exports = app;