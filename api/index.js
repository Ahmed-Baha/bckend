const express = require("express");
const cors = require("cors");

const app = express();

// Allow requests only from your frontend Vercel URL
app.use(cors());

// Example API route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from Vercel backend!" });
});

module.exports = app;