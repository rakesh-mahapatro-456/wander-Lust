const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb+srv://rakeshmahapatro85:5tb8yASrKyL66E5o@cluster0.stux7j7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
   initdata.data = initdata.data.map((obj) => ({
    ...obj,
    owner: "689ee6da75c11ff9fffb91c8",
  }));

  await Listing.insertMany(initdata.data);
  console.log("data was inserted");
};

initDB();
