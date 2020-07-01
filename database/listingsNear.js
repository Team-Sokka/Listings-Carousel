const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const listingsSchema = new mongoose.Schema({
  imageUrl: String,
  price: String,
  bedrooms: String,
  bathrooms: String,
  sqft: String,
  address: String,
  zipcode: Number,
  houseId: {type: Number, unique: true, min: 1}
});

const Listing = mongoose.model('Listings', listingsSchema);

module.exports = Listing;
