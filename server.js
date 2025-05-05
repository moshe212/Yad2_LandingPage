import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware to catch problematic URLs before they reach the router
app.use((req, res, next) => {
  // If the URL contains something that would cause path-to-regexp to fail
  // Just send the index.html directly
  if (req.url.includes("https://git.new/")) {
    return res.sendFile(path.join(__dirname, "dist", "index.html"));
  }
  next();
});

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, "dist")));

// For all requests that don't match a static file, send the index.html
// Using a regular path without any special characters in the route definition
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Get port from environment or use 3000 as default
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
