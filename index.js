//Packages
const express = require('express');
const cors = require('cors');
// Vars
const port = process.env.PORT || 3000;
// Create server
const app = express();
// Routers
const postsRouter = require('./routers/postsRouter');

//Connect to db
const { connect } = require('./db/index');
connect().then(
  () => console.log('Connected!'),
  err => console.error(err)
);

/***** MIDDLEWARE *****/
app.use(express.json());
app.use(cors());

/***** ROUTERS ******/
app.get('/', function (req, res) {
  res.send('Testing my server');
});

app.use('/new', postsRouter); // Add new details

app.listen(port, () => {
  console.log(`running on ${port}`);
});

// Fetching number's table
// app.get('/fetch', function (req, res) {
//   const sql = `SELECT * FROM numbers`;
//   SQLConnection.query(sql, function (err, result, fields) {
//     console.log(result);
//     if (err) throw err;
//     res.send(JSON.stringify(result));
//   });
// });
