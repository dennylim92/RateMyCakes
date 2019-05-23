var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/RateMyCakes', {useFindAndModify: false});

var ReviewSchema = new mongoose.Schema({
  comment: {type: String},
  rating: {type: Number}
}, { timestamps: true });

var CakeSchema = new mongoose.Schema({
  bakerName: {type: String},
  imageURL: {type: String},
  reviews: [ReviewSchema]
}, { timestamps: true });

mongoose.model('Cake', CakeSchema);
var Cake = mongoose.model('Cake');

module.exports = Cake;