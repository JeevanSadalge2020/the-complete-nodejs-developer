const fs = require("fs");

let data = {
  name: "Jeevan",
  age: 32,
};

fs.writeFileSync("test.json", JSON.stringify(data));

let readData = fs.readFileSync("test.json").toString();

console.log("readData", readData);
