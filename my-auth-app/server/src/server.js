// server/src/server.js
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use("/auth", authRoutes);

// MongoDB connection
mongoose.connect("mongodb://database:27017/myauthapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
