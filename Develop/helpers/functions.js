const fs = require('fs');
const readThenAppendToJson = (addedNote, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);

      parsedData.push(addedNote);
      writeNewNoteToJson(file, parsedData);
    }
  });
};

const writeNewNoteToJson = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );

module.exports = {
  readThenAppendToJson,
  writeNewNoteToJson,
};
