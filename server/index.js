const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const addRoute = require('./api/addCsvFileData');
const getRoute = require('./api/getCsvFile');
const bodyParser = require('body-parser');


const server = express();

server.use(bodyParser.json({ limit: '10mb' }));
server.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

server.use(cors());

server.use(helmet());

server.use(express.json());

server.use('/upload', addRoute);

server.use('/get', getRoute);



server.listen(4000, () => {
    console.log("Server is listening on port 4000.");
})