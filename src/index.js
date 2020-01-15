// Import Express
const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://devradar:dr1928pkm@cluster0-cvukr.mongodb.net/devradar?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();

app.use(express.json());

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmentros:
// Query Params: request.query ( Filtros, ordenação, paginação, ...)
// Route Params: request.params ( Indentificar um recurso na alteração ou remoção)
// Body: request.body ( Dados para criação ou alteração de um registro )

// MongoDB (Não-relacional)

app.post('/users', (req, res) => {
    console.log(req.body);
    return res.json({ message: 'Hello OmniStack 10'});
});

app.listen(3333);