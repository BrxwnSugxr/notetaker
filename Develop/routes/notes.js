// Import the express module
const express = require('express');
// Import the controller functions
const { getNotes, addNote, deleteNote } = require('../controllers/notes');
// Create a router object
const Router = express.Router();
// Define a GET route to fetch all notes
Router.get('/notes', getNotes);
// Define a POST route to add a new note
Router.post('/notes', addNote);
// Define a DELETE route to delete a note by ID
Router.delete('/notes/:id', deleteNote);
// Export the router so it can be used in other files
module.exports = Router;
