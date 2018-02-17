const mongoose = require("mongoose");

// const Schema = mongoose.Schema;

//call the mongoose's schema function
const { Schema } = mongoose;

// create a new schema for the collection

const userSchema = new Schema({
  googleID: String
});

// tell to mongoose to create the new schema

mongoose.model("users", userSchema);
