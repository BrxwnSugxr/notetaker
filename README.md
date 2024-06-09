# Note Taker

## Description

The Note Taker application is designed to help users write, save, and manage notes. Utilizing an Express.js back end, the application stores note data in a JSON file, allowing for persistent data management. The front end of the application has already been created, and this project involves building the back end, connecting it to the front end, and deploying the entire application to Heroku.

## Mock-Up

The following GIF shows the web application's appearance and functionality:

![Existing notes are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text.](./Assets/11-express.gif)

## Getting Started

### Installation

To install the necessary dependencies, run the following command:

1. **Clone the repository**:

   ```sh
   git clone https://github.com/BrxwnSugxr/notetaker.git
   ```

2. **Navigate to the project directory**:

   ```sh
   cd Develop
   ```

```sh
npm install
```

### Usage

To start the server, run the following command:

```sh
npm start || npm run dev
```

For development mode with automatic reloading, use:

```sh
npm run dev
```

## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a "Save Note" button and a "Clear Form" button appear in the navigation at the top of the page
WHEN I click on the Save button
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes and the buttons in the navigation disappear
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column and a "New Note" button appears in the navigation
WHEN I click on the "New Note" button in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column and the button disappears

```

## Pseudo Code for JavaScript

1. **Setup Event Listeners**

   - Add event listeners for `DOMContentLoaded` to initialize the app.
   - Add event listener for the save button to handle saving a new note.
   - Add event listener for the delete button to handle deleting a note.
   - Add event listener for the new note button to clear the input fields.
   - Add event listener for clicking on a note in the list to display the note.

2. **Fetch Existing Notes**

   - Create a function to fetch existing notes from the server.
   - Use `fetch` to make a GET request to `/api/notes`.
   - Parse the JSON response and call a function to display the notes.

3. **Display Notes**

   - Create a function to display notes in the sidebar.
   - Clear any existing notes in the sidebar.
   - Iterate over the list of notes and create list items for each note.
   - Append each note to the sidebar.

4. **Save a New Note**

   - Create a function to handle saving a new note.
   - Get the title and text from the input fields.
   - Create a note object with the title and text.
   - Use `fetch` to make a POST request to `/api/notes` with the note object.
   - Fetch the updated list of notes and display them.

5. **Delete a Note**

   - Create a function to handle deleting a note.
   - Get the note ID from the clicked element.
   - Use `fetch` to make a DELETE request to `/api/notes/:id` with the note ID.
   - Fetch the updated list of notes and display them.

6. **Display Note Details**

   - Create a function to display the details of a clicked note.
   - Get the note ID from the clicked element.
   - Fetch the note details from the server.
   - Populate the input fields with the note details.

7. **Clear Note Input Fields**
   - Create a function to clear the input fields when creating a new note.

## Pseudo Code for Express

1. Setup Express Server

- Import required modules (express, path, fs).
- Create an instance of an Express application.
- Set up middleware to parse JSON and URL-encoded data.
- Serve static files from the public directory.

2. Define Routes

- Create routes to serve the HTML files:

  - GET /notes should serve notes.html.
  - GET \* should serve index.html.

- Create API routes:
  - GET /api/notes to fetch all notes.
  - POST /api/notes to add a new note.
  - DELETE /api/notes/:id to delete a note by ID.

3. Handle API Requests

- For GET /api/notes, read the db.json file and send the data as JSON.
- For POST /api/notes, receive the new note, add a unique ID, save it to db.json, and return the new note.
- For DELETE /api/notes/:id, read the db.json file, remove the note with the given ID, save the updated data, and send a confirmation response.

4. Start Server

- Set the server to listen on a specified port.
- Log a message indicating the server is running and the URL to access it.

## Getting Started

To get started with the Note Taker application, follow these steps:

Back End Setup:

The application should include a db.json file in the develop/db directory to store and retrieve notes.
Use the fs module to read and write to this file.
HTML Routes:

GET /notes should return the notes.html file.
GET \* should return the index.html file.
API Routes:

GET /api/notes should read the db.json file and return all saved notes as JSON.
POST /api/notes should receive a new note, save it to the db.json file with a unique id, and return the new note to the client.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
