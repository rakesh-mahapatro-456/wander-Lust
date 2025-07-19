const Listing = require("../models/listing");
const axios = require("axios");

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index", { allListings });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!listing) {
    req.flash("error", "listing does not exist");
    res.redirect("/listings");
  }

  //MAPTILER_API_KEY
  const maptilerKey = process.env.MAPTILER_API_KEY;

  const defaultCoordinates = [138.7274, 35.3606]; // Mount Fuji

  const coordinates =
    listing.geometry &&
    Array.isArray(listing.geometry.coordinates) &&
    listing.geometry.coordinates.length === 2
      ? listing.geometry.coordinates
      : defaultCoordinates;

  res.render("listings/show.ejs", { listing, maptilerKey, coordinates });
};

module.exports.createListing = async (req, res, next) => {
  try {
    const { location } = req.body.listing;

    // 🗺️ Geocode location using LocationIQ
    const geoResponse = await axios.get(
      "https://us1.locationiq.com/v1/search",
      {
        params: {
          key: process.env.LOCATIONIQ_API_KEY,
          q: location,
          format: "json",
        },
      }
    );

    const geoData = geoResponse.data[0]; // First result
    const coordinates = [parseFloat(geoData.lon), parseFloat(geoData.lat)];

    // 🌄 Set image
    let url = req.file.path;
    let filename = req.file.filename;

    // 🏡 Create new listing
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };
    newListing.geometry = {
      type: "Point",
      coordinates: coordinates,
    };

    await newListing.save();
    req.flash("success", "New Listing Created");
    res.redirect("/listings");
  } catch (err) {
    console.error("Geocoding or listing creation failed:", err.message);
    req.flash("error", "Failed to create listing. Please try again.");
    res.redirect("/listings/new");
  }
};

module.exports.editListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "listing does not exist");
    res.redirect("/listings");
  }
  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");

  res.render("listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing }); //here img updation will not be detected nut other info can be updated

  if (typeof req.file != "undefined") {
    //if new imgs are present then only update the listing again
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }

  req.flash("success", "listing updated");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", " Listing deleted");
  res.redirect(`/listings`);
};
