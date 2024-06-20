// index.js
const express = require('express');
const bodyParser = require('body-parser');
const notesRouter = require('./routes/notes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.APP_PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/notes', notesRouter);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
