'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.json({status: 200, message:'Hello Kubectl Services, and Dinesh is cool!'});
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
