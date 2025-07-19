const Joi = require('joi');
const review = require('./models/review');

const listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    price: Joi.number().required().min(0),
    description: Joi.string().required(),
    location: Joi.string().required(),
    image: Joi.string().allow(null, ''), // Allow null or empty string for image
    country: Joi.string().required() 
  }).required()
});

module.exports = listingSchema


const reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(1).max(5),
    comment: Joi.string().required(),
  }).required()
});

module.exports = { listingSchema, reviewSchema };