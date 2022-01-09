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

// Add new teacher by obj {"idTeachers": 5, "Name": "Tova", "Phone": "0521356166"}
exports.addTeachers = (req, res) => {
  const { idTeachers, Name, Phone } = req.body;
  // Validate
  if (!idTeachers || !Name || !Phone) {
    res.status(400).send('Missing details!');
  } else {
    const sql = `INSERT INTO Teachers VALUES ('${idTeachers}', '${Name}', ${Phone})`;

    SQLConnection.query(sql, function (err, result) {
      if (err) throw err;
      res.send(`${Name} inserted into table - Teachers`);
    });
  }
};
