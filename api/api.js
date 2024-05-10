const express = require('express');
const app = express();
const port = 3001;

app.get('/process', (req, res) => {
 res.send('Processed request from API');
});

app.listen(port, () => {
 console.log(`API server listening at http://localhost:${port}`);
});
