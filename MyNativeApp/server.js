
const express = require('express');
const db = require('./App/db/db');
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))


db.authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });
  
const PORT = process.env.PORT || port
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))