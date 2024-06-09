const express = require('express');
const { getNotes, addNote, deleteNote } = require('../controllers/notes');

const Router = express.Router();

Router.get('/notes', getNotes);

Router.post('/notes', addNote);

Router.delete('/notes/:id', deleteNote);

module.exports = Router;
