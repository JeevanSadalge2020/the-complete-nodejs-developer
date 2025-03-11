let fs = require("fs");
let chalk = require("chalk");
let { addNote } = require("./noteHandlers");

let add = {
  command: "add",
  describe: "add a note",
  handler: addNote,
  builder: {
    title: {
      describe: "title of the note",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "body of the note",
      demandOption: true,
      type: "string",
    },
  },
};

// function addNote({ title, body }) {
//   let notes;
//   try {
//     let data = fs.readFileSync("notes.json");
//     notes = JSON.parse(data);
//   } catch (error) {
//     notes = [];
//   }
//   let check_if_note_already_exists = notes.find((note) => note.title === title);
//   if (check_if_note_already_exists) {
//     console.log(chalk.bgRedBright("Note already exists"));
//   } else {
//     notes.push({ title, body });
//     let data = JSON.stringify(notes);
//     fs.writeFileSync("notes.json", data);
//     console.log(chalk.bgGreenBright("Note added"));
//   }
// }

module.exports = add;
