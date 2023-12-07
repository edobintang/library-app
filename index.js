const dotenv = require('dotenv').config();

const AppServer = require('./bin/app/server');

// create App Server
const appServer = new AppServer();
const port = process.env.PORT || 8000;

appServer.server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
