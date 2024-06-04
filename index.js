const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

const cors = require("cors");
// Middleware CORS
app.use(
  cors({
    origin: "http://localhost:5173", // Mengizinkan asal tertentu
    methods: ["GET", "POST", "OPTIONS"], // Mengizinkan metode tertentu
    allowedHeaders: ["Content-Type", "Authorization"], // Mengizinkan header tertentu
  })
);
app.options("*", cors()); // Menangani permintaan preflight secara manual

// Middleware untuk menguraikan body dari request POST yang menggunakan application/x-www-form-urlencoded dan JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




app.post("/webhook", (req, res) => {
  // console.log("Received webhook:", req.body);
  console.log(res.params);
  res.sendStatus(200);
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
