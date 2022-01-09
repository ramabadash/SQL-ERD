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
