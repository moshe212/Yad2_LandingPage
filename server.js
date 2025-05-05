import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer } from "http";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create Express app
const app = express();

// Serve static files first - this doesn't use the router
app.use(express.static(path.join(__dirname, "dist")));

// Instead of using Express router with a wildcard route (*),
// we'll use a simple middleware for all requests
app.use((req, res) => {
  // For any request that made it past the static files middleware,
  // just serve the index.html
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Create HTTP server with the Express app
const server = createServer(app);

// Get port from environment or use 3000 as default
const port = process.env.PORT || 3000;

// Start the server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
