/* Fill out these functions using Mongoose queries*/

var fs = require('fs');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Listing = require('./ListingSchema.js');
var config = require('./config');
var data = require('./listings.json');
mongoose.connect(config.db.uri, { useMongoClient: true });

var findLibraryWest = function() {
  Listing.find({name: "Library West"}, function(err, result) {
      console.log("Found Library West: " + result);
  })
};
var removeCable = function() {
  Listing.findOneAndRemove({ code: 'CABL' }, function(err, listing) {
    if (err) throw err;
    console.log("Deleted this Listing: " + listing);
  });
};
var updatePhelpsLab = function() {
  Listing.findOneAndUpdate({ name: 'Phelps Laboratory' }, { address: '101 Main Street' }, function(err, listing) {
  if (err) throw err;
  console.log("Updated" + listing);
});
};
var retrieveAllListings = function() {
  Listing.find({}, function(err, listing) {
  if (err) throw err;
  console.log(listing);
  mongoose.connection.close();
});
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
