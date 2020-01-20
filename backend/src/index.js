// Import's
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebSocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect('mongodb+srv://devradar:dr1928pkm@cluster0-cvukr.mongodb.net/devradar?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

// mongoose.set('useCreateIndex', true);

app.use(cors());
app.use(express.json());
app.use(routes);

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmentros:
// Query Params: request.query ( Filtros, ordenação, paginação, ...)
// Route Params: request.params ( Indentificar um recurso na alteração ou remoção)
// Body: request.body ( Dados para criação ou alteração de um registro )

// MongoDB (Não-relacional)

server.listen(3333);