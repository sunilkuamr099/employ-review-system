import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import User from "../models/user.js";

// Authentication using passport
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passReqToCallback: true, // allows to set first argument as req
    },
    async (req, email, password, done) => {
      try {
        // find a user and establish the identity
        const user = await User.findOne({ email });
        if (!user) {
          req.flash("error", "Invalid username or password");
          return done(null, false);
        }
        // match the password
        const isPasswordCorrect = await user.isValidatedPassword(password);
        if (!isPasswordCorrect) {
          req.flash("error", "Invalid username or password");
          return done(null, false);
        }
        return done(null, user);
      } catch (err) {
        req.flash("error", err);
        return done(err);
      }
    }
  )
);

// Serializing the user to decide which key is to be kept in the cookies
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserializing the user from the key it the cookies
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    if (err) {
      console.log("Error in finding user ---> Passport");
      return done(err);
    }

    return done(null, user);
  });
});

// Check if user authenticated (middleware)
passport.checkAuthentication = (req, res, next) => {
  // if the user is signed in, then pass on the request to the next function(controller's action)
  console.log("inside check authentication: ", req);
  if (req.isAuthenticated()) {
    return next();
  }

  // if the user is not signed in
  return res.redirect("/");
};

passport.setAuthenticatedUser = (req, res, next) => {
  if (req.isAuthenticated()) {
    // req.user contains the current signed in user from the session cookie and we are just sending this to the locals for the views
    res.locals.user = req.user;
  }
  next();
};

export default passport;
