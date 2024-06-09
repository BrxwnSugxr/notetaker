const express = requier('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3001;

app.use(static.express('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});
app.get('note', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/note.html'));
});

app.get('/api/notes', (req, res) => {
  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    let jsonData = JSON.parse(data);
    console.log(jsonData);
    res.json(jsonData);
  });
});

app.listen(PORT, () => console.info(`port number is http://localhost:${PORT}`));
