console.log("Starting App....");

const yargs = require("yargs");

const notes = require("./notes.js");

const argv = yargs.argv;
const command = argv._[0];

if (command === "add") {
    notes.addNote(argv.title, argv.body);
} else if (command === "list") {
    notes.getAllNotes();
} else if (command === "read") {
    notes.getNote(argv.title);
} else if (command === "remove") {
    notes.removeNote(argv.title)
} else {
    console.log("command not known.");
}

console.log("Exiting app...");