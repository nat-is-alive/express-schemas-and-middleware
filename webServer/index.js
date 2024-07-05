const express = require('../node_modules/express');

const app = express();
const port = 8080;

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});