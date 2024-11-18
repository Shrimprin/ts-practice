import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your name: ", (name) => {
  console.log(`Hello, ${name}!`);
  rl.close();
});
