const { SQLConnection } = require('../db/index');

// Delete pupil by id
exports.deletePupilById = (req, res) => {
  const { pupilID } = req.params;
  if (!pupilID) {
    res.status(400).send('Missing ID');
  } else {
    const sql = `DELETE FROM Pupils WHERE idPupils = ${pupilID}`;
    SQLConnection.query(sql, (err, result) => {
      if (err) throw err;
      res.status(204).end();
    });
  }
};
