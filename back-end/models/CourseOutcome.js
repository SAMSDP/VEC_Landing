const mongoose = require('mongoose');

const courseOutcomeSchema = new mongoose.Schema({
    department: { type: String, required: true, unique: true },
    outcomes: { type: [String], required: true }
});

const CourseOutcome = mongoose.model('CourseOutcome', courseOutcomeSchema);

module.exports = CourseOutcome;
