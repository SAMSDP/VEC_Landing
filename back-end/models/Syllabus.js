const mongoose = require('mongoose');

const syllabusSchema = new mongoose.Schema({
    department: { type: String, required: true, unique: true },
    semesters: { type: Object, required: true }
});

const Syllabus = mongoose.model('Syllabus', syllabusSchema);

module.exports = Syllabus;
