console.log("Starting App....");

const yargs = require("yargs");

const notes = require("./notes.js");

const titleOptions = {
    describe: 'title of the new note',
    demand: true,
    alias: 't'
}
const bodyOptions = {
    describe: 'body of the new note',
    demand: true,
    alias: 'b'
}
const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('read', 'Read a particular note', {
        title: titleOptions
    })
    .command('list', 'List all notes')
    .command('remove', 'Remove a particular note', {
        title: titleOptions
    })
    .help()
    .argv;
const command = argv._[0];

if (command === "add") {
    let noteAdded = notes.addNote(argv.title, argv.body);
    if (noteAdded) {
        console.log('successfull add note: ', argv.title);
    } else {
        console.log('unable to add note');
    }

} else if (command === "list") {
    const allNotes = notes.getAllNotes();
    console.log(`Printing ${allNotes.length} notes`);
    allNotes.forEach(note => logNote(note));

} else if (command === "read") {
    let note = notes.getNote(argv.title);
    if (note) {
        logNote(note);
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

function logNote(note) {
    console.log('---------------------');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
    console.log('---------------------');
}

console.log("Exiting app...");