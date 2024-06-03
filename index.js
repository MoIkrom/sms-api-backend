const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

// Middleware untuk menguraikan application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Endpoint untuk menerima SMS
app.post("/sms", (req, res) => {
  const from = req.body.From; // Nomor pengirim
  const to = req.body.To; // Nomor penerima (nomor server Anda)
  const message = req.body.Body; // Pesan SMS

  console.log(`SMS diterima dari ${from}: ${message}`);

  // Kirim respon ke pengirim (optional)
  res.send(`
        <Response>
            <Message>Terima kasih, pesan Anda telah diterima.</Message>
        </Response>
    `);

  // Route untuk mengarahkan dari "/" ke "/sms"
  app.get("/", (req, res) => {
    try {
      res.redirect("/sms");
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Internal Server Error");
    }
  });
});
app.get("/sms", (req, res) => {
  try {
    // console.log(`SMS diterima dari`);
    console.log(res);
    // console.log("Query parameters:", req.query);

    res.send("GET request diterima");
  } catch (error) {
    console.log(error);
  }
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
