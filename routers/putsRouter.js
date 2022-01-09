const express = require('express');
const router = express.Router();
const { updatePupil } = require('../controller/puts');

// localhost:3000/update

router.put('/pupil/:pupilID', updatePupil);

module.exports = router;
