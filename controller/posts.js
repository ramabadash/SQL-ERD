const { SQLConnection } = require('../db/index');

// Add new pupil by obj {"idPupils": 5, "Name": "Dan", "Classes_idClasses": 23}

exports.addPupil = (req, res) => {
  const { idPupils, Name, Classes_idClasses } = req.body;
  // Validate
  if (!idPupils || !Name || !Classes_idClasses) {
    res.status(400).send('Missing details!');
  } else {
    const sql = `INSERT INTO Pupils VALUES ('${idPupils}', '${Name}', ${Classes_idClasses})`;

    SQLConnection.query(sql, function (err, result) {
      if (err) throw err;
      res.send(`${Name} inserted into table - Pupils`);
    });
  }
};
