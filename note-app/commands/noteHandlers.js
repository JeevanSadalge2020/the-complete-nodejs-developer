let chalk = require("chalk");
let fs = require("fs");
let myChalk = require("../myChalk");

function addNote({ title, body }) {
  let notes;

  try {
    let data = fs.readFileSync("notes.json");
    notes = JSON.parse(data);

    let check_if_note_already_exists = notes.find(
      (note) => note.title === title
    );
    if (check_if_note_already_exists) {
      myChalk.success("Note already exists");
    } else {
      notes.push({ title, body });
      let data = JSON.stringify(notes);
      fs.writeFileSync("notes.json", data);
      console.log(chalk.bgGreenBright("Note added"));
    }
  } catch (error) {
    myChalk.error(error);
  }
}

function readNote({ title }) {
  let data = fs.readFileSync("notes.json");
  let notes = JSON.parse(data);
  let noteToRead = notes.find((note) => note.title === title);
  if (noteToRead) {
    console.log(chalk.bgGreenBright("Note details:"));
    console.log(noteToRead);
  } else {
    console.log(chalk.bgRedBright("Note does not exists"));
  }
}

function removeNote({ title }) {
  let notes;
  try {
    let data = fs.readFileSync("notes.json");

    if (data.length === 0) {
      console.log(
        chalk.bgRedBright.whiteBright.bold("There are no notes to delete")
      );
    } else {
      notes = JSON.parse(data);
      if (notes.length === 0) {
        console.log(chalk.bgRedBright.whiteBright.bold("There are no notes"));
      } else {
        let noteInd = notes.findIndex((note) => note.title === title);
        if (noteInd !== -1) {
          notes.splice(noteInd, 1);
          let data = JSON.stringify(notes);
          fs.writeFileSync("notes.json", data);
          console.log(chalk.bgGreenBright("Note deleted successfully"));
        } else {
          console.log(
            chalk.bgRedBright.whiteBright.bold(
              "Add a correct note title to remove"
            )
          );
        }
      }
    }
  } catch (error) {
    console.log(chalk.bgRedBright.whiteBright.bold("Error reading notes"));
  }
}

function listNotes() {
  try {
    let data = fs.readFileSync("notes.json");
    if (data.length === 0) {
      console.log(
        chalk.bgRedBright.whiteBright.bold("There are no notes to show")
      );
    } else {
      let notes = JSON.parse(data);
      console.log(chalk.bgGreenBright("Notes -"), notes);
    }
  } catch (error) {
    console.log(chalk.bgRedBright.whiteBright.bold("Error reading notes"));
  }
}

module.exports = {
  addNote,
  readNote,
  removeNote,
  listNotes,
};
