const express = require("express");
const app = express();
const students = ['Adrian', 'Miguel', 'Julian', 'Jackson', 'Peter', 'Melissa'];
const port = 3500;

app.get('/', (req, res) => {
    res.status(200).json('Welcome to my first expressJS API');
});

app.get('/studentslist', (req, res) => {
    res.status(200).json(students);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
