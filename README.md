# Note Taker

## Description

The Note Taker application is designed to help users write, save, and manage notes. Utilizing an Express.js back end, the application stores note data in a JSON file, allowing for persistent data management. The front end of the application has already been created, and this project involves building the back end, connecting it to the front end, and deploying the entire application to Heroku.

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

## Mock-Up

The following GIF shows the web application's appearance and functionality:

![Existing notes are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text.](./Assets/11-express-homework-demo.gif)

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

## Getting Started
### Installation
To install the necessary dependencies, run the following command:

 ```sh
npm install
```

### Usage
To start the server, run the following command:


 ```sh
npm start
```
For development mode with automatic reloading, use:

 ```sh
npm run dev
```
## License
This project is licensed under the MIT License. See the LICENSE file for details.


© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
