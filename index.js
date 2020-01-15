// Import Express
const express = require('express');

const app = express();

// get, post, put, delete

app.get('/', (req, res) => {
    return res.json({ message: 'Hello OmniStack'});
});

app.listen(3333);