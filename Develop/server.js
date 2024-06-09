// Import the express module
const express = require('express');
// Import the path module to handle file paths
const path = require('path');
// Import the routes for notes
const notesRoutes = require('./routes/notes');

const PORT = 3001;
// Create an Express application
const app = express();
// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Serve static files from the 'public' directory
app.use(express.static('public'));
// Use the notes routes for any requests to /api
app.use('/api', notesRoutes);
// Route to serve the notes HTML file
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public', 'notes.html'))
);
// Route to serve the index HTML file for any other requests
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
);
// Start the server and listen on the specified port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}/`)
);
