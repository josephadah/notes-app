console.log("Starting App....");

const yargs = require("yargs");

const notes = require("./notes.js");

const argv = yargs.argv;
const command = argv._[0];

if (command === "add") {
    let noteAdded = notes.addNote(argv.title, argv.body);
    if (noteAdded) {
        console.log('successfull add note: ', argv.title);
    } else {
        console.log('unable to add note');
    }
} else if (command === "list") {
    notes.getAllNotes();
} else if (command === "read") {
    let note = notes.getNote(argv.title);
    if (note) {
        console.log('---------------------');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
        console.log('---------------------');
    } else {
        console.log('Note note found.');
    }
} else if (command === "remove") {
    let noteRemoved = notes.removeNote(argv.title);
    let message = noteRemoved ? `Note: ${argv.title}, Removed Successfully.` : `Unable to remove note.`;
    console.log(message);
} else {
    console.log("command not known.");
}

console.log("Exiting app...");