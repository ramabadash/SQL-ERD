const express = require('express');
const router = express.Router();
const { deletePupilById, deleteTeacherById } = require('../controller/deletes');

// localhost:3000/remove

router.delete('/pupil/:pupilID', deletePupilById);
router.delete('/teacher/:teacherID', deleteTeacherById);

module.exports = router;
