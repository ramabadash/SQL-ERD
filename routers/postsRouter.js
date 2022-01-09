const express = require('express');
const router = express.Router();
const { addPupil } = require('../controller/posts');

// localhost:3000/new

router.post('/pupil', addPupil);

module.exports = router;
