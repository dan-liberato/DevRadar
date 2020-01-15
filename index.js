// Import Express
const express = require('express');

const app = express();

// get, post, put, delete

app.get('/', (req, res) => {
    return res.json({ message: 'Hello OmniStack 10'});
});

app.listen(3333);