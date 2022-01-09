const { SQLConnection } = require('../db/index');

// Get teacher by id on request params
exports.getTeacherById = (req, res) => {
  const { teacherID } = req.params;
  if (!teacherID) {
    res.status(400).send('Missing ID');
  } else {
    const sql = `SELECT * FROM Teachers WHERE idTeachers = ${teacherID}`;
    SQLConnection.query(sql, (err, result) => {
      if (err) throw err;
      res.send(JSON.stringify(result));
    });
  }
};

// Get teacher by id on request params
exports.getClassById = (req, res) => {
  const { classID } = req.params;
  if (!classID) {
    res.status(400).send('Missing ID');
  } else {
    const sql = `SELECT * FROM Classes WHERE idClasses = ${classID}`;
    SQLConnection.query(sql, (err, result) => {
      if (err) throw err;
      res.send(JSON.stringify(result));
    });
  }
};

// Get pupil by id on request params
exports.getPupilById = (req, res) => {
  const { pupilID } = req.params;
  if (!pupilID) {
    res.status(400).send('Missing ID');
  } else {
    const sql = `SELECT * FROM Pupils WHERE idPupils = ${pupilID}`;
    SQLConnection.query(sql, (err, result) => {
      if (err) throw err;
      res.send(JSON.stringify(result));
    });
  }
};
