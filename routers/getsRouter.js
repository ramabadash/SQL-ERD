const express = require('express');
const router = express.Router();
const { getTeacherById } = require('../controller/gets');

// localhost:3000/

router.get('/teacher/:teacherID', getTeacherById);

module.exports = router;
