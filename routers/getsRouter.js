const express = require('express');
const router = express.Router();
const {
  getTeacherById,
  getClassById,
  getPupilById,
  getSubjectById,
} = require('../controller/gets');

// localhost:3000/

router.get('/teacher/:teacherID', getTeacherById);
router.get('/class/:classID', getClassById);
router.get('/pupil/:pupilID', getPupilById);
router.get('/subject/:subjectID', getSubjectById);

module.exports = router;
