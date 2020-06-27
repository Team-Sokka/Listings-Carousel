const db  = require('./index.js');
const Listings = require('./listingsNear.js');

// subset of 100 addresses (25 unique)
const addresses = [
  '3859 Owena St',
  '3806 Diamond Head Rd',
  '716 Palekaua Pl',
  '3748 Kepa St',
  '1905 Piimauna Pl',
  '187 Poipu Dr',
  '838 Kaahue St',
  '3503 Trousseau St',
  '2846 Kalawao St',
  '542 Ahina St',
  '3041 Hibiscus Dr',
  '794 Moaniala St',
  '37 Moloaa St',
  '337 Portlock Rd',
  '102 Hanapepe Loop',
  '6601 Hawaii Kai Dr',
  '226 Kaiolohia Pl',
  '7018 Hawaii Kai Dr',
  '610 Kuliouou Rd',
  '27 Niuhi St',
  '1623 Hoaaina Pl',
  '3940 Sierra Dr',
  '1380 Saint Louis Dr',
  '3928 Pili Pl',
  '2244 Kaululaau St',
  '3859 Owena St',
  '3806 Diamond Head Rd',
  '716 Palekaua Pl',
  '3748 Kepa St',
  '1905 Piimauna Pl',
  '187 Poipu Dr',
  '838 Kaahue St',
  '3503 Trousseau St',
  '2846 Kalawao St',
  '542 Ahina St',
  '3041 Hibiscus Dr',
  '794 Moaniala St',
  '37 Moloaa St',
  '337 Portlock Rd',
  '102 Hanapepe Loop',
  '6601 Hawaii Kai Dr',
  '226 Kaiolohia Pl',
  '7018 Hawaii Kai Dr',
  '610 Kuliouou Rd',
  '27 Niuhi St',
  '1623 Hoaaina Pl',
  '3940 Sierra Dr',
  '1380 Saint Louis Dr',
  '3928 Pili Pl',
  '2244 Kaululaau St',
  '3859 Owena St',
  '3806 Diamond Head Rd',
  '716 Palekaua Pl',
  '3748 Kepa St',
  '1905 Piimauna Pl',
  '187 Poipu Dr',
  '838 Kaahue St',
  '3503 Trousseau St',
  '2846 Kalawao St',
  '542 Ahina St',
  '3041 Hibiscus Dr',
  '794 Moaniala St',
  '37 Moloaa St',
  '337 Portlock Rd',
  '102 Hanapepe Loop',
  '6601 Hawaii Kai Dr',
  '226 Kaiolohia Pl',
  '7018 Hawaii Kai Dr',
  '610 Kuliouou Rd',
  '27 Niuhi St',
  '1623 Hoaaina Pl',
  '3940 Sierra Dr',
  '1380 Saint Louis Dr',
  '3928 Pili Pl',
  '2244 Kaululaau St',
  '3859 Owena St',
  '3806 Diamond Head Rd',
  '716 Palekaua Pl',
  '3748 Kepa St',
  '1905 Piimauna Pl',
  '187 Poipu Dr',
  '838 Kaahue St',
  '3503 Trousseau St',
  '2846 Kalawao St',
  '542 Ahina St',
  '3041 Hibiscus Dr',
  '794 Moaniala St',
  '37 Moloaa St',
  '337 Portlock Rd',
  '102 Hanapepe Loop',
  '6601 Hawaii Kai Dr',
  '226 Kaiolohia Pl',
  '7018 Hawaii Kai Dr',
  '610 Kuliouou Rd',
  '27 Niuhi St',
  '1623 Hoaaina Pl',
  '3940 Sierra Dr',
  '1380 Saint Louis Dr',
  '3928 Pili Pl',
  '2244 Kaululaau St'
];

// subset of 100 house images (23 unique)
const images = [
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+2.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+3.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+4.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+5.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+6.webp',
  // 'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+7.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+8.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+9.webp',
  // 'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+10.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+11.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+12.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+13.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+14.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+15.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+16.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+17.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+18.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+19.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+20.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+21.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+22.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+23.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+24.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/house+25.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+26.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+2.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+3.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+4.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+5.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+6.webp',
  // 'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+7.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+8.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+9.webp',
  // 'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+10.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+11.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+12.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+13.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+14.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+15.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+16.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+17.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+18.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+19.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+20.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+21.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+22.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+23.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+24.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/house+25.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+26.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+2.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+3.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+4.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+5.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+6.webp',
  // 'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+7.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+8.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+9.webp',
  // 'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+10.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+11.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+12.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+13.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+14.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+15.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+16.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+17.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+18.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+19.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+20.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+21.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+22.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+23.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+24.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/house+25.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+26.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+2.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+3.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+4.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+5.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+6.webp',
  // 'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+7.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+8.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+9.webp',
  // 'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+10.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+11.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+12.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+13.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+14.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+15.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+16.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+17.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+18.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+19.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+20.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+21.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+22.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+23.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+24.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/house+25.webp',
  'https://bootcamptonyp.s3-us-west-2.amazonaws.com/FEC+photos/House+26.webp'
];


// Random number generators for specs of each listing
var beds = () => Math.floor(Math.random() * 5) + 1;
var baths = () => Math.floor(Math.random()* 4) + 1;
var price = () => beds() * baths() * 100000 + (baths() * 10000);
var sqft = () => beds() * 1000 + (beds() * 100) + (beds() * 10) + beds() * 2;

// Function for formatting numbers with commas
var addCommas = (number) => {
  var split = number.toString().split('');
  for (var i = split.length -3; i > 0; i -= 3) {
    split.splice(i, 0, ',')
  }
  return split.join('');
};

var counter = 0;

var houses = () => {
  var homes = [];
  while (homes.length <= 99) {
    var house = {
      price: "$ " + addCommas(price()),
      bedrooms: beds() + 'bd',
      bathrooms: baths() + 'ba',
      sqft: addCommas(sqft()) + ' sqft',
    }
    homes.push(house);
  }
  return homes;
}
var listings = houses();

var seeds = listings.map((listing) => {
  counter++;
  listing.imageUrl = images[counter];
  listing.address = addresses[counter];
  listing.houseId = counter;

  return new Listings(listing).save();
})

Promise.all(seeds)
.then(() => {
  db.disconnect(()=> {
    console.log('Database Seeded')
  })});

  module.exports.listings = listings;
