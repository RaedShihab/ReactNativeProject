
const express = require('express');
const bodyparser = require('body-parser')
const db = require('./App/db/db');

const app = express()
var cors = require('cors');
app.use(cors({origin: true, credentials: true}));
const port = 3005

// parse application/json
app.use(bodyparser.json({type:'application/json'}));
app.use(
  bodyparser.urlencoded({
    extended: true
  })
);
/////

app.use('/route', require('./App/db/routes'))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
    next();
  });


db.authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

  
const PORT = process.env.PORT || port
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))