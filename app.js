if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");

const dbUrl = process.env.ATLASDB_URL;

const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/users.js");

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbUrl);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

//by default if user doesnt have any acativity for 14 days they are logged out
const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret : process.env.SECRET,
  },
  touchAfter :  24*3600,     //it refreshs session info every 24hrs

});

store.on("error",()=>{
  console.log("error in mongo session store");
});

const sessionOptions = {
  store, //pass the store which you will use into session i.e session info will be stored in atlas 
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    // Set expiry date manually
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7, // 7 days from now

    // Or use maxAge to set duration from creation time
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days in milliseconds

    // For security: Cookie won't be accessible via JavaScript (prevents XSS)
    httpOnly: true,
  },
};


app.use(session(sessionOptions));
app.use(flash()); //first we have to declare flash before routes so that we can use it in routes

app.use(passport.initialize()); //middleware that initializes passport for every request
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate())); //this line says that whenver new users are coming then use local Strategy and authenticate them using authenticate fn which is a static method which passportLocalMongoose added

// These lines are required to support login sessions:
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success"); //storing success messages so that it can be accessed in ejs templlates/views
  res.locals.error = req.flash("error"); //same as above for error msgs
  res.locals.currUser = req.user; //storing user info so that we can know if user is logged in or not with help of which in navbar.ejs we can shown signup or logout option
  next();
});

// app.get("/demouser", async (req, res) => {
//   const fakeUser = new User({
//     email: "student@gmail.com",
//     username: "delta-student"
//   });

//  let regestiredUser = await User.register(fakeUser, "helloworld");
//  res.send(regestiredUser);

// });

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter); //here the listing id will remain in app.js only to send it to review we use merge params option in router of reviews routes js file
app.use("/", userRouter);

//404 route
app.all("*", (req, res, next) => {
  next(new ExpressError("Page Not Found", 404));
});

//middleware to handle errors
app.use((err, req, res, next) => {
  let { message = "Something went wrong", statusCode = 500 } = err;
  // res.status(statusCode).send(message);
  res.status(statusCode).render("error.ejs", { message });
});

app.listen(8080, () => {
  console.log("Server is listening to port 8080");
});
