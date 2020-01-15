// Import Express
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://devradar:dr1928pkm@cluster0-cvukr.mongodb.net/devradar?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmentros:
// Query Params: request.query ( Filtros, ordenação, paginação, ...)
// Route Params: request.params ( Indentificar um recurso na alteração ou remoção)
// Body: request.body ( Dados para criação ou alteração de um registro )

// MongoDB (Não-relacional)

app.listen(3333);