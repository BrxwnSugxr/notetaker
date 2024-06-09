// Import the file system module for reading and writing files
const fs = require('fs');
// Import the path module to handle file paths
const path = require('path');
// Import the uuid helper to generate unique IDs
const uuid = require('../helpers/uuid');
// Import custom functions to handle JSON operations
const {
  readThenAppendToJson,
  writeNewNoteToJson,
} = require('../helpers/functions');
// Function to get all notes
const getNotes = (req, res) => {
  // Read the JSON file that stores the notes
  fs.readFile(
    path.join(__dirname, '..', 'db', 'db.json'),
    'utf8',
    (err, data) => {
      // Parse the data from JSON string to an array of objects
      let jsonData = JSON.parse(data);
      console.log(jsonData);
      // Send the parsed data as JSON response
      res.json(jsonData);
    }
  );
};

// Function to add a new note
const addNote = (req, res) => {
  // Extract title and text from the request body
  const { title, text } = req.body;
  // Check if both title and text are provided
  if (title && text) {
    // Create a new note object
    const newNote = {
      title: title,
      text: text,
      id: uuid(), // Generate a unique ID for the note
    };
    // Append the new note to the JSON file
    readThenAppendToJson(newNote, path.join(__dirname, '..', 'db', 'db.json'));
    // Create a response object
    const response = {
      status: 'success',
      body: newNote,
    };
    // Send the response as JSON
    res.json(response);
  } else {
    // If title or text is missing, send an error response
    res.json('Error in posting new note');
  }
};
// Function to delete a note
const deleteNote = (req, res) => {
  // Get the ID of the note to be deleted from the request parameters
  let id = req.params.id;
  let parsedData;
  // Read the JSON file that stores the notes
  const pathname = path.join(__dirname, '..', 'db', 'db.json');
  fs.readFile(pathname, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log('data', data);
      // Parse the data from JSON string to an array of objects
      parsedData = JSON.parse(data);
      // Filter out the note with the given ID
      const filterData = parsedData.filter((note) => note.id !== id);
      writeNewNoteToJson(pathname, filterData);
      // Write the updated data back to the JSON file
      res.send(`Deleted note with ${req.params.id}`);
      // Send a confirmation response
    }
  });
};
// Export the functions so they can be used in other files
module.exports = { getNotes, addNote, deleteNote };
