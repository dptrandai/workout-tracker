//requiring all variables
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//sets up the port
const PORT = process.env.PORT || 3000;
const db = require("./models");

//sets up the express application
const app = express();

//configures the application
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//use the public folder 
app.use(express.static("public"));

//connecting the new server to our database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});

//setup some routes here

//start the server
app.listen(PORT, function() {
    console.log(`Server started, running on port: ${PORT}`);
});