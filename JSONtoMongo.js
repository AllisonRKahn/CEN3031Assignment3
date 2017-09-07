
'use strict';
var fs = require('fs');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Listing = require('./ListingSchema.js');
var config = require('./config');
var data = require('./listings.json');

/* Connect to your database */
mongoose.connect(config.db.uri, { useMongoClient: true });

Listing.collection.insertMany(data.entries);
