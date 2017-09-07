var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var listingSchema = new Schema({
   code : {
      type: String,
      required: true
    },
   name : {
     type: String,
     required: true
   },
   address : {
      type: String,
      required: false
    },
   coordinates : {
     latitude : Number,
     longitude : Number,
   }
});

listingSchema.pre('save', function(next) {
  var currentDate = new Date();
  this.updated_at = currentDate;
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

var Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
