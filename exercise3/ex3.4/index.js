const express = require('express');
const path = require('path');

const port = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    res.type('text');
    res.send(`username: ${username}\npassword: ${password}`);
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));