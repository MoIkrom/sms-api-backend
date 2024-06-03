const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Middleware untuk menguraikan body dari request POST yang menggunakan application/x-www-form-urlencoded dan JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route untuk menangani POST request dari webhook
app.post("/sms", (req, res) => {
  try {
    const data = JSON.stringify(req.body);
    const filePath = path.join(__dirname, "sms_inbox.dat");

    fs.appendFile(filePath, data + "\n", (err) => {
      if (err) {
        console.error("Error writing to file", err);
        return res.status(500).send("Internal Server Error");
      }
      console.log("Data berhasil disimpan:", data);
      res.status(200).send("Data berhasil disimpan");
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
