let { readNote } = require("./noteHandlers");

let read = {
  command: "read",
  describe: "read a note",
  builder: {
    title: {
      describe: "title of the note to read",
      demandOption: true,
      type: "string",
    },
  },
  handler: readNote,
};

module.exports = read;
