const { removeNote } = require("./noteHandlers");

let remove = {
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "title of the note to remove",
      demandOption: true,
      type: "string",
    },
  },
  handler: removeNote,
};

module.exports = remove;
