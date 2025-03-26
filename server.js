const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Student = require('./models/Student');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Import and use the MongoDB connection
require('./config/db');

// Endpoint to handle form submission
app.post('/register', (req, res) => {
    const { name, dob, class: studentClass, division, gender } = req.body;

    const newStudent = new Student({
        name,
        dob,
        class: studentClass,
        division,
        gender
    });

    newStudent.save()
        .then(() => res.send('Student registered successfully'))
        .catch((err) => res.status(500).send('Error registering student: ' + err));
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
