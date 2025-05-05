import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer } from "http";
import nodemailer from "nodemailer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create Express app
const app = express();

// IMPORTANT: Add middleware to parse JSON BEFORE any routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// הגדרת שליחת מיילים עם nodemailer
// שים לב: עבור Gmail צריך להשתמש ב-App Password ולא בסיסמה הרגילה
// צור App Password חדש: https://myaccount.google.com/apppasswords
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "moshe212@gmail.com",
    // יש להחליף את זה בסיסמת אפליקציה חדשה מחשבון Google שלך
    pass: "rzpe satw prlh mrkq", // סיסמה לא תקפה - יש להחליף בסיסמת אפליקציה חדשה
  },
});

// Log all incoming requests for debugging - updated for more details
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`==== NEW REQUEST ${timestamp} ====`);
  console.log(`Method: ${req.method}`);
  console.log(`URL: ${req.url}`);
  console.log(`Headers:`, req.headers);

  // Log request body if exists
  if (req.body && Object.keys(req.body).length > 0) {
    console.log("Body:", req.body);
  } else {
    console.log("Body: EMPTY");
  }

  // Log user IP and referrer
  console.log(`IP: ${req.ip || req.connection.remoteAddress}`);
  console.log(`Referrer: ${req.headers.referer || "NONE"}`);
  console.log(`User-Agent: ${req.headers["user-agent"] || "NONE"}`);
  console.log("==== END REQUEST INFO ====");

  // Save original end method to hook into it
  const originalEnd = res.end;

  // Override end method
  res.end = function (...args) {
    console.log(`==== RESPONSE ${timestamp} ====`);
    console.log(`Status: ${res.statusCode}`);
    console.log(`URL: ${req.url}`);
    console.log(`Time: ${new Date().toISOString()}`);
    console.log("==== END RESPONSE ====");

    // Call original end method
    return originalEnd.apply(this, args);
  };

  next();
});

// Improved health check endpoint with more data
app.get("/health", (req, res) => {
  const data = {
    status: "ok",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    nodeVersion: process.version,
    requestInfo: {
      url: req.url,
      method: req.method,
      headers: req.headers,
      ip: req.ip || req.connection.remoteAddress,
    },
  };

  console.log("Health check data:", data);
  res.status(200).json(data);
});

// API endpoint to send email
app.post("/sendemail", (req, res) => {
  console.log("==== התקבלה בקשה חדשה לשליחת מייל ====");
  console.log("Headers:", req.headers);
  console.log("Body:", req.body);

  if (!req.body) {
    console.log("אין גוף לבקשה");
    return res
      .status(400)
      .json({ status: "error", message: "No request body" });
  }

  const { firstName, lastName, businessName, dataType, phone, email } =
    req.body;

  if (!firstName || !lastName || !email) {
    console.log("חסרים שדות חובה:", { firstName, lastName, email });
    return res
      .status(400)
      .json({ status: "error", message: "Missing required fields" });
  }

  let mailOptions = {
    from: email,
    to: "moshe212@gmail.com",
    subject: `פנייה חדשה מ-${firstName} ${lastName} - ${businessName}`,
    text: `
      שם: ${firstName} ${lastName}
      עסק: ${businessName}
      סוג דאטה: ${dataType}
      טלפון: ${phone}
      אימייל: ${email}
    `,
  };

  console.log("שולח מייל עם הפרטים:", mailOptions);

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("שגיאה בשליחת המייל:", error);
      res.status(500).json({ status: "error", message: error.message });
    } else {
      console.log("המייל נשלח בהצלחה:", info.response);
      res.status(200).json({ status: "success" });
    }
  });
});

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

// Start the server with improved logging
server.listen(port, "0.0.0.0", () => {
  console.log(`==== SERVER STARTED ====`);
  console.log(`Time: ${new Date().toISOString()}`);
  console.log(`Port: ${port}`);
  console.log(`Node Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(`Node Version: ${process.version}`);
  console.log(`Working Directory: ${process.cwd()}`);
  console.log(`Server is ready to handle requests`);
  console.log(`==== END SERVER INFO ====`);
});
