// Import the file system module for reading and writing files
const fs = require('fs');
// Function to read a JSON file, append a new note, and write it back
const readThenAppendToJson = (addedNote, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      // Parse the data from JSON string to an array of objects
      const parsedData = JSON.parse(data);
      // Add the new note to the array
      parsedData.push(addedNote);
      // Write the updated data back to the JSON file
      writeNewNoteToJson(file, parsedData);
    }
  });
};
// Function to write data to a JSON file
const writeNewNoteToJson = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );
// Export the functions so they can be used in other files
module.exports = {
  readThenAppendToJson,
  writeNewNoteToJson,
};
