const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
 try {
    const response = await axios.get('http://api:3001/process');
    res.send(response.data);
 } catch (error) {
    res.status(500).send('Error processing request');
 }
});

app.listen(port, () => {
 console.log(`Web server listening at http://localhost:${port}`);
});
