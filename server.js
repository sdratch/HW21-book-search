const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});
app.get("*", (req,res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"))
})

// Connect to the Mongo DB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successfully connected to database.");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, function () {
  console.log(`Express server now on port ${PORT}`);
});
