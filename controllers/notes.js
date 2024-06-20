// controllers/notes.js
const Note = require('../models/Note');

// GET all notes
exports.getAllNotes = async (req, res) => {
    try {
        const notes = await Note.findAll();
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET a note by ID
exports.getNoteById = async (req, res) => {
    const id = req.params.id;
    try {
        const note = await Note.findById(id);
        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// POST create a new note
exports.createNote = async (req, res) => {
    const { title, datetime, note } = req.body;
    try {
        const newNote = await Note.create({ title, datetime, note });
        res.status(201).json(newNote);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// PUT update a note
exports.updateNote = async (req, res) => {
    const id = req.params.id;
    const { title, datetime, note } = req.body;
    try {
        const updatedNote = await Note.update(id, { title, datetime, note });
        res.status(200).json(updatedNote);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// DELETE a note
exports.deleteNote = async (req, res) => {
    const id = req.params.id;
    try {
        await Note.delete(id);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
