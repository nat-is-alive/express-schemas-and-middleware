const express = require('express');
var cors = require('cors');
const validateMiddleware = require('./middleware/validate/validateMiddleware');
const logMiddleware = require('./middleware/log/logMiddleware');
const apiKeyMiddleware = require('./middleware/apiKey/apiKeyMiddleware');
const postSchema = require('./middleware/validate/schemas/postSchema');
const getSchema = require('./middleware/validate/schemas/getSchema');

// Web Server 

const webServer = express();
const webServerPort = 8080;
webServer.use(express.json());

webServer.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

webServer.listen(webServerPort, () => {
    console.log(`Web Server Listening on port ${webServerPort}`);
});

// API Server

const apiServer = express();
apiServer.use(cors());
apiServer.use(logMiddleware)
apiServer.use(apiKeyMiddleware)
const apiServerPort = 3000;
apiServer.use(express.json());

apiServer.get('/', (req, res) => {
    res.send('200 OK');
});

apiServer.post('/post', validateMiddleware(postSchema), (req, res) => {
    res.send(req.body);
});

apiServer.get('/get', validateMiddleware(getSchema), (req, res) => {
    res.send(req.query);
});

apiServer.listen(apiServerPort, () => {
    console.log(`API Server Listening on port ${apiServerPort}`);
});