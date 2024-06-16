
import passportLocal from './config/passport-local-strategy.js';
import express from "express";
import passport from 'passport';
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import expressLayouts from "express-ejs-layouts";
import { connectUsingMongoose } from './config/database.js'
// used for session cookie
import session from "express-session";


import flash from "connect-flash";
import { setFlash } from "./config/middleware.js";
import indexrouter from './routes/index.js'
const app=express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(expressLayouts);

// set up view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(session({
  name:'Employee review system',
  secret: "abcd",
  saveUninitialized: false,
  resave: false,
  cookie:{
      maxAge: (1000*60*100)
  },
})
)

app.use(passport.initialize());
app.use(passport.session());

// sets the authenticated user in the response
app.use(passport.setAuthenticatedUser);

app.use(flash());
app.use(setFlash);
app.use("/",indexrouter);

// use express router
app.listen(5000, (err) => {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on port: ${5000}`);
  connectUsingMongoose();
});
