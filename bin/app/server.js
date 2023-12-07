const express = require('express')
const cors = require('cors')

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
};

module.exports = AppServer;