const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/success', (req, res) => {
    res.render('thankyou');
});

const port = 3000;
app.listen(port, (req, res) => {
    console.log(`ByteWise Creators is live now on port ${port}`);
});