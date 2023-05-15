const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const port = 4200;

app.use(express.static(__dirname + '/dist/zakat'));

app.get('/', (req, res) => res.sendFile(path.resolve('dist/zakat/index.html')));

const server = http.createServer(app);

server.listen(port, () => console.log(`App running  on: http://localhost:${port}`));