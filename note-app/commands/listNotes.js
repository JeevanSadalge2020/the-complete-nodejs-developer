const { listNotes } = require("./noteHandlers");

let list = {
  command: "list",
  describe: "list all the notes",
  handler: listNotes,
};

module.exports = list;
