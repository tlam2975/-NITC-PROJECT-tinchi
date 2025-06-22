const express = require('express');
const PORT = 2975;
const app = express();

app.get('/', (req, res) => {
    // res.sendFile(__dirname + '/frontend/index.html');
    // res.send('Welcome');
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/about', (reqn, res) => {
    res.send('About us.');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
