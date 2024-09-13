const express = require('express');
const CourseOutcome = require('../models/CourseOutcome');
const Syllabus = require('../models/Syllabus');

const router = express.Router();

// Add Course Outcomes
router.post('/addCourseOutcomes', async (req, res) => {
    try {
        const { department, outcomes } = req.body;
        const newOutcome = new CourseOutcome({ department, outcomes });
        await newOutcome.save();
        res.status(201).send('Course outcomes added successfully.');
    } catch (err) {
        res.status(400).send(`Error: ${err.message}`);
    }
});

// Add Course Syllabus
router.post('/addSyllabus', async (req, res) => {
    try {
        const { department, semesters } = req.body;
        const newSyllabus = new Syllabus({ department, semesters });
        await newSyllabus.save();
        res.status(201).send('Syllabus added successfully.');
    } catch (err) {
        res.status(400).send(`Error: ${err.message}`);
    }
});

// Fetch Course Outcomes
router.get('/getCourseOutcomes/:department', async (req, res) => {
    try {
        const department = req.params.department;
        const courseOutcome = await CourseOutcome.findOne({ department });
        if (!courseOutcome) return res.status(404).send('Course outcomes not found.');
        res.send(courseOutcome.outcomes);
    } catch (err) {
        res.status(400).send(`Error: ${err.message}`);
    }
});

// Fetch Syllabus
router.get('/getSyllabus/:department', async (req, res) => {
    try {
        const department = req.params.department;
        const syllabus = await Syllabus.findOne({ department });
        if (!syllabus) return res.status(404).send('Syllabus not found.');
        res.send(syllabus.semesters);
    } catch (err) {
        res.status(400).send(`Error: ${err.message}`);
    }
});

module.exports = router;
