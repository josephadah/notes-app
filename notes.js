const fs = require('fs');

const fetchNotes = () => {
    try {
        let oldNotesString = fs.readFileSync('./notes.json');
        return JSON.parse(oldNotesString);
    } catch (error) {
        return [];
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}

const addNote = (title, body) => {
    let notes = fetchNotes();
    let note = {title, body};

    let duplicateNote = notes.filter(x => x.title === title);
    if (duplicateNote.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return notes;
    }
}

const getAllNotes = () => {
    return fetchNotes();
}

const getNote = (title) => {
    let notes = fetchNotes();
    let note = notes.filter(note => note.title === title);
    return note[0];
}

const removeNote = (title) => {
    let notes = fetchNotes();
    let filteredNotes = notes.filter(note => note.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
}

module.exports = {
    addNote,
    getAllNotes,
    getNote,
    removeNote
}