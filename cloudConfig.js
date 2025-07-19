const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'wanderlust_DEV', //folder name where you want to store the files  
    allowed_formats: ['png', 'jpg', 'jpeg'], //allowed file format for upload
  },
});

//use this in listing.js where we create a new listing
module.exports ={
    cloudinary,
    storage
};