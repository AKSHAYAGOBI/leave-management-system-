const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    dob: Date,
    class: String,
    division: String,
    gender: String
});

module.exports = mongoose.model('Student', studentSchema);
