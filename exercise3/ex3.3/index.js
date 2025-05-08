const express = require('express');

const port = 3000;
const app = express();

const factorial = (n) => {
    return (n != 1) ? n * factorial(n - 1) : 1;
};

app.get('/factorial', (req, res) => {
    const { number } = req.query;

    res.redirect(`/factorial/${number}`);
});

app.get('/factorial/:number', (req, res) => {
    const number = req.params.number;
    res.send(`${factorial(number)}`);
});


app.listen(port, () => console.log(`Server listening on port ${port}!`));