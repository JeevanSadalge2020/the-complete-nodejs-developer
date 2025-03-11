let chalk = require("chalk");

let myChalk = {
  success: function (msg) {
    console.log(chalk.bgGreenBright(msg));
  },
  error: function (error) {
    console.log(chalk.bgRedBright.whiteBright.bold(error));
  },
};

module.exports = myChalk;
