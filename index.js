const express = require('express');
const app = express();
const port = 5000;
// const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

// app.use(cors());
app.use(bodyParser.json());

app.get('/', async (req, res) => {
  res.send('success');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
