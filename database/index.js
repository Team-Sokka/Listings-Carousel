const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/listings';

const db = mongoose.connect(mongoUri, {useNewUrlParser: true } );

module.exports = db;
