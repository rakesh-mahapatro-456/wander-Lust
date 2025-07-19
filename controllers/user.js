const User = require("../models/users.js");

module.exports.renderSignupForm = (req, res) => {
  res.render("users/signup.ejs");
}

module.exports.signup = async (req, res) => {
    try {
      let { username, email, password } = req.body;
      const newUser = new User({ email, username });
      const regUser = await User.register(newUser, password);
      req.login(regUser,(err)=>{ //after signup we are automaticaaly making user to login
        if(err){
          return next(err);
        }
        req.flash("success", "welcome to wanderlust");
        res.redirect("/listings");
      });
    } catch (e) {
      req.flash("error", e.message);
      res.redirect("/signup");
    }
}


module.exports.renderLoginForm = (req, res) => {
  res.render("users/login.ejs");
}

module.exports.login = async(req,res)=>{
    req.flash("success", "Welcome back to Wanderlust!");
    let redirectUrl = res. locals. redirectUrl || "/listings";
    res.redirect(redirectUrl);
}


module.exports.logout = (req,res,next)=>{
  req.logout((err)=>{
    if(err){ //to handle any error while logging out 
      return next(err);
    }
    req.flash("success", "Logged you out!");
    res.redirect("/listings");
  });
}
