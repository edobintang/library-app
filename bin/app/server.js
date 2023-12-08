const express = require('express')
const cors = require('cors')

const booksHandler = require('../modules/book/handlers/http_handler');

function AppServer() {
    // initiating server instance
    this.server = express();
    this.server.use(express.json());

    // cors config
    this.server.use(cors());

    // placeholder endpoint
    this.server.get('/', (req, res) => {
        res.send('Library Service is running!');
    });

    // books endpoint
    this.server.get('/subjects', booksHandler.getAllBySubject);
    this.server.post('/schedule', booksHandler.postBookSchedule);
};

module.exports = AppServer;