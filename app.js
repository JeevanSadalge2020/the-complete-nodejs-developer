import { readFileSync, writeFileSync } from "fs";

let content = readFileSync("./input.txt");

let output_file_name = new Date().toISOString() + ".txt";

writeFileSync(output_file_name, content);
