const express = require('express');
const validateMiddleware = require('./validateMiddleware');
const logMiddleware = require('./logMiddleware');

const postSchema = require('./postSchema');
const getSchema = require('./getSchema');

const app = express();
const port = 8080;

app.use(express.json());

app.post('/post', logMiddleware, validateMiddleware(postSchema), (req, res) => {
    res.send(req.body);
});

app.get('/get', logMiddleware, validateMiddleware(getSchema), (req, res) => {
    res.send(req.query);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});