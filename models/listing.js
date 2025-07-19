const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    url: String,
    filename: String // to store filename so that we can delete or update imgs
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.ObjectId,
      ref: "Review",
    },
  ],
  geometry: {
    type: {
      type: String,
      enum: ['Point'],        // Must always be "Point"
      required: true,
      default: 'Point'
    },
    coordinates: {
      type: [Number],         // Array of numbers [longitude, latitude]
      required: true,
    }
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

// post mongoose middleware that will propagate deletion of all the review if a listing is deleted
listingSchema.post("findOneAndDelete", async function (listing) {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
