//import of express
const express = require("express");

//create the express application
const app = express();

//create the first route of the app

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

// listen the route on the port 5000

// define the environement variable for port
const PORT = process.env.PORT || 5000;
app.listen(PORT);
