const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js"); //note: wrapAsync is a utility function to handle async errors in routes
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../midlleware.js");
const listingController = require("../controllers/listings.js");
const multer  = require('multer');
const {cloudinary,storage} = require("../cloudConfig.js");
const upload = multer({ storage }); //dest cloud storage

//index and create routes
router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isLoggedIn,
    upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingController.createListing)
  );

//new route
router.get("/new", isLoggedIn, listingController.renderNewForm);

//show ,update and delete routes
router
  .route("/:id")
  .get(wrapAsync(listingController.showListing))
  .put(
    isLoggedIn,
    isOwner,
    upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingController.updateListing)
  )
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

//edit route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.editListing)
);



module.exports = router;
