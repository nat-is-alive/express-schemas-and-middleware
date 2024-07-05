const express = require('express');
var cors = require('cors');
const validateMiddleware = require('./middleware/validate/validateMiddleware');
const logMiddleware = require('./middleware/log/logMiddleware');

const postSchema = require('./middleware/validate/schemas/postSchema');
const getSchema = require('./middleware/validate/schemas/getSchema');

const app = express();
app.use(cors());
const port = 3000;

app.use(express.json());

app.get('/', logMiddleware, (req, res) => {
    res.send('200 OK');
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