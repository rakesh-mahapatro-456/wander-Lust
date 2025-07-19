const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../midlleware.js");
const userController = require("../controllers/user.js");

//signup route.
router
  .route("/signup")
  .get(userController.renderSignupForm)
  .post(wrapAsync(userController.signup));

// login route - we use passport middleware i.e authenticate method to authenticate user and we also specify the redirect and flash message is to be shown on failing to login implemeted by passport itself
router
  .route("/login")
  .get(userController.renderLoginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    userController.login
  );

//logout
router.get("/logout", userController.logout);

module.exports = router;
