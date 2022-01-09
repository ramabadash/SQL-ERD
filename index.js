//Packages
const express = require('express');
const cors = require('cors');
// Vars
const port = process.env.PORT || 3000;
// Create server
const app = express();
// Routers
const postsRouter = require('./routers/postsRouter');
const gestRouter = require('./routers/getsRouter');

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

app.use('/', gestRouter); // Get by id's

app.use('/new', postsRouter); // Add new details

app.listen(port, () => {
  console.log(`running on ${port}`);
});
