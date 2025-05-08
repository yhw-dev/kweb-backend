const express = require('express');
const port = 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const query = req.query;

    const query_string = Object.keys(query).map(k => `${k}: ${query[k]}`).join('\n');

    res.send(`${query_string}`);
})

app.post('/', (req, res) => {
    const body = req.body;

    const body_string = Object.keys(body).map(k => `${k}: ${body[k]}`).join('\n');

    res.send(`${body_string}`);
})

app.put('/', (req, res) => {
    const body = req.body;

    const body_string = Object.keys(body).map(k => `${k}: ${body[k]}`).join('\n');

    res.send(`${body_string}`);
})

app.delete('/', (req, res) => {
    const body = req.body;

    const body_string = Object.keys(body).map(k => `${k}: ${body[k]}`).join('\n');

    res.send(`${body_string}`);
})

app.listen(port, () => console.log(`Server listening on port ${port}!`));