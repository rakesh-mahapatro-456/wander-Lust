const Listing = require("./models/listing.js");
const Review = require("./models/review.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema,reviewSchema } = require("./schema.js");

//middleware to check if user is logged in or not 
module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    //redirect url saveing inside req session
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "you must be logged in to create new listing");
    return res.redirect("/login");
  }
  next();
};

//middleware to save redirect url before login 
module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};

//middleware to check owner 
module.exports.isOwner = async (req, res, next) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);

  //check if owner is curr user befor updating the listing to avoid requests using postman
  if (!listing.owner.equals(res.locals.currUser._id)) {
    req.flash("error", "You are not the owner of the listing");
    return res.redirect(`/listings/${id}`);
  }

  next();
};

//middleware to handlelisting schema validation
module.exports.validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body); // Validate the request body
  if (error) {
    // If validation fails, throw an error
    let errorMessage = error.details.map((el) => el.message).join(", ");
    throw new ExpressError(errorMessage, 400);
  }
  next();
};

//middleware to handle review schema validation
module.exports.validateReview = (req, res, next) => {
  let {error} = reviewSchema.validate(req.body); // Validate the request body
  if (error) {
    // If validation fails, throw an error
    let errorMessage = error.details.map(el => el.message).join(", ");
    throw new ExpressError(errorMessage, 400);
  }
  next();
};


//middleware to check author 
module.exports.isReviewAuthor = async (req, res, next) => {
  let { id,reviewId } = req.params;
  let review = await Review.findById(reviewId);

  //check if owner is curr user befor updating the listing to avoid requests using postman
  if (!review.author.equals(res.locals.currUser._id)) {
    req.flash("error", "You didnt create the review");
    return res.redirect(`/listings/${id}`);
  }
  next();
};
