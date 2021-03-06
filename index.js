//Packages
const express = require('express');
const cors = require('cors');
// Vars
const port = process.env.PORT || 3000;
// Create server
const app = express();
// Routers
const postsRouter = require('./routers/postsRouter');
const getsRouter = require('./routers/getsRouter');
const deleteRouter = require('./routers/deleteRouter');
const putsRouter = require('./routers/putsRouter');

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

app.use('/', getsRouter); // Get by id's
app.use('/new', postsRouter); // Add new details
app.use('/update', putsRouter); // Update by id and details
app.use('/remove', deleteRouter); // Remove by id

app.listen(port, () => {
  console.log(`running on ${port}`);
});
