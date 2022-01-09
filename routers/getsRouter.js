const express = require('express');
const router = express.Router();
const { getTeacherById, getClassById } = require('../controller/gets');

// localhost:3000/

router.get('/teacher/:teacherID', getTeacherById);
router.get('/class/:classID', getClassById);

module.exports = router;
