const fs = require('fs');
const path = require('path');

const uuid = require('../helpers/uuid');
const {
  readThenAppendToJson,
  writeNewNoteToJson,
} = require('../helpers/functions');

const getNotes = (req, res) => {
  fs.readFile(
    path.join(__dirname, '..', 'db', 'db.json'),
    'utf8',
    (err, data) => {
      let jsonData = JSON.parse(data);
      console.log(jsonData);
      res.json(jsonData);
    }
  );
};

const addNote = (req, res) => {
  const { title, text } = req.body;

  if (title && text) {
    const newNote = {
      title: title,
      text: text,
      id: uuid(),
    };

    readThenAppendToJson(newNote, path.join(__dirname, '..', 'db', 'db.json'));

    const response = {
      status: 'success',
      body: newNote,
    };

    res.json(response);
  } else {
    res.json('Error in posting new note');
  }
};

const deleteNote = (req, res) => {
  let id = req.params.id;
  let parsedData;
  const pathname = path.join(__dirname, '..', 'db', 'db.json');
  fs.readFile(pathname, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log('data', data);
      parsedData = JSON.parse(data);
      const filterData = parsedData.filter((note) => note.id !== id);
      writeNewNoteToJson(pathname, filterData);
      res.send(`Deleted note with ${req.params.id}`);
    }
  });
};

module.exports = { getNotes, addNote, deleteNote };
