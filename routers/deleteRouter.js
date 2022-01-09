const express = require('express');
const router = express.Router();
const { deletePupilById } = require('../controller/deletes');

// localhost:3000/remove

router.delete('/pupil/:pupilID', deletePupilById);

module.exports = router;
