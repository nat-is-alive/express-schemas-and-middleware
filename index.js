const express = require('express');
const validateMiddleware = require('./middleware/validate/validateMiddleware');
const logMiddleware = require('./middleware/log/logMiddleware');

const postSchema = require('./middleware/validate/schemas/postSchema');
const getSchema = require('./middleware/validate/schemas/getSchema');

const app = express();
const port = 8080;

app.use(express.json());

app.get('/', logMiddleware, (req, res) => {
    res.send('<h1>Welcome!</h1><p>Welcome to this really cool website!</p>');
});

app.post('/post', logMiddleware, validateMiddleware(postSchema), (req, res) => {
    res.send(req.body);
});

app.get('/get', logMiddleware, validateMiddleware(getSchema), (req, res) => {
    res.send(req.query);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});