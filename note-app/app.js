const chalk = require("chalk");
const yargs = require("yargs");
const add = require("./commands/addNote");
const remove = require("./commands/removeNote");
const read = require("./commands/readNote");
const list = require("./commands/listNotes");

yargs
  .command(add)
  .command(remove)
  .command(read)
  .command(list)
  .demandCommand(1, "Please provide a valid command")
  .help().argv;
