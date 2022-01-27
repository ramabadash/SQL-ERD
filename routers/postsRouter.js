const express = require('express');
const router = express.Router();
const { addPupil, addTeachers } = require('../controller/posts');

// localhost:3000/new

router.post('/pupil', addPupil);
router.post('/teacher', addTeachers);

module.exports = router;
