const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

const cors = require("cors");

// Middleware untuk menguraikan body dari request POST yang menggunakan application/x-www-form-urlencoded dan JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware CORS
app.use(cors());

app.post("/webhook", (req, res) => {
  // console.log("Received webhook:", req.body);
  console.log(res.params);
  res.sendStatus(200);
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
