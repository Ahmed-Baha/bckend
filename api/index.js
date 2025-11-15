const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({
  origin: "https://frontend-omega-ebon-87.vercel.app",
}));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

// Vercel handler
module.exports = app;
