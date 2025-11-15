const express = require("express");
const cors = require("cors");

const app = express();

// Allow requests only from your frontend Vercel URL
app.use(cors({
  origin: "https://frontend-omega-ebon-87.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"]
}));

// Example API route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from Vercel backend!" });
});

module.exports = app;