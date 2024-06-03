const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware untuk menguraikan application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Endpoint untuk menerima SMS
app.post('/sms', (req, res) => {
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
});
app.get('/sms', (req, res) => {
    

    console.log(`SMS diterima dari`);

    // Kirim respon ke pengirim (optional)
    res.send(`
        <Response>
            <Message>Pesan Anda telah diterima.</Message>
        </Response>
    `);


});

// Menjalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
