import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, "dist")));

// Fix for path-to-regexp error: explicitly handle routes that might have a colon
// This comes before the wildcard route to avoid path-to-regexp issues
app.get("/https://git.new/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// For all requests that don't match a static file, send the index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Get port from environment or use 3000 as default
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
