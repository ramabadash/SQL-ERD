const express = require('express');
const router = express.Router();
const {
  getTeacherById,
  getClassById,
  getPupilById,
} = require('../controller/gets');

// localhost:3000/

router.get('/teacher/:teacherID', getTeacherById);
router.get('/class/:classID', getClassById);
router.get('/pupil/:pupilID', getPupilById);

module.exports = router;
