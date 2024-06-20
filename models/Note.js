// models/Note.js
const pool = require('../config/dbConfig');

const Note = {
    findAll: async () => {
        const [rows] = await pool.query('SELECT * FROM notes');
        return rows;
    },

    findById: async (id) => {
        const [rows] = await pool.query('SELECT * FROM notes WHERE id = ?', [id]);
        return rows[0];
    },

    create: async ({ title, datetime, note }) => {
        const [result] = await pool.query('INSERT INTO notes (title, datetime, note) VALUES (?, ?, ?)', [title, datetime, note]);
        return { id: result.insertId, title, datetime, note };
    },

    update: async (id, { title, datetime, note }) => {
        await pool.query('UPDATE notes SET title = ?, datetime = ?, note = ? WHERE id = ?', [title, datetime, note, id]);
        return { id, title, datetime, note };
    },

    delete: async (id) => {
        await pool.query('DELETE FROM notes WHERE id = ?', [id]);
    }
};

module.exports = Note;
