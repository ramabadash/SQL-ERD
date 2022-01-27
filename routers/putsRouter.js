const express = require('express');
const router = express.Router();
const { updatePupil, updateClass } = require('../controller/puts');

// localhost:3000/update

router.put('/pupil/:pupilID', updatePupil);
router.put('/class/:classID', updateClass);

module.exports = router;
