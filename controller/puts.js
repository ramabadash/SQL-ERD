const { SQLConnection } = require('../db/index');

// Update pupils details by obj on request body {"Name": "Dan", "Classes_idClasses": 23}
// id from request params
// Fields are optional
exports.updatePupil = (req, res) => {
  const { pupilID } = req.params;
  const { Name, Classes_idClasses } = req.body;
  // Validate id
  if (!pupilID) {
    return res.status(400).send('Missing ID');
  }
  // Validate body
  if (!Name && !Classes_idClasses) {
    res.status(400).send('Must provide one detail');
  } else {
    const sql = `
    UPDATE Pupils SET ${Name ? `Name = "${Name}" ,` : ''} ${
      Classes_idClasses ? `Classes_idClasses = ${Classes_idClasses}` : ''
    } WHERE idPupils = ${pupilID};`;

    SQLConnection.query(sql, function (err, result) {
      if (err) throw err;
      res.send('Updated');
    });
  }
};

// Update class details by obj on request body {"Name": "5th"}
// id from request params
exports.updateClass = (req, res) => {
  const { classID } = req.params;
  const { Name } = req.body;
  // Validate id
  if (!classID) {
    return res.status(400).send('Missing ID');
  }
  // Validate body
  if (!Name) {
    res.status(400).send('Must provide one detail');
  } else {
    const sql = `
      UPDATE Classes SET ${
        Name ? `Name = "${Name}"` : ''
      } WHERE idClasses = ${classID};`;

    SQLConnection.query(sql, function (err, result) {
      if (err) throw err;
      res.send('Updated');
    });
  }
};
