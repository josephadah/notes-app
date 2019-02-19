console.log("starting notes.js....");
const fs = require('fs');

const addNote = (title, body) => {
    let notes = [];
    let note = {title, body};

    try {
        let oldNotesString = fs.readFileSync('./notes.json');
        notes = JSON.parse(oldNotesString);
    } catch (error) {
        console.log(error);
    }

    let duplicateNote = notes.filter(x => x.title === title);
    if (duplicateNote.length > 0) {
        return;
    }

    notes.push(note);
    fs.writeFileSync('notes.json', JSON.stringify(notes));
    console.log("done adding note");
}

const getAllNotes = () => {
    console.log("Getting all notes");
}

const getNote = (title) => {
    console.log("Getting Note: ", title);
}

const removeNote = (title) => {
    console.log("Removing Note: ", title);
}

module.exports = {
    addNote,
    getAllNotes,
    getNote,
    removeNote
}