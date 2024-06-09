const express = requier('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3001;

app.use(static.express('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json);

app.get('/', (req, res) => {
  res.json();
});

app.listen(PORT, () => console.info(`port number is http://localhost:${PORT}`));
