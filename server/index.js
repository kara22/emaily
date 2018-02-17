//import of express
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

//connect mongoose with our database
mongoose.connect(keys.mongoURI);

//create the express application
const app = express();

// tell to passport to use cookie to manage our authentication
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

// define the environement variable for port
const PORT = process.env.PORT || 5000;
app.listen(PORT);
