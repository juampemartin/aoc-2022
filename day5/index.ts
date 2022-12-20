import fs from "fs";
import path from "path";

const raw = fs.readFileSync(path.join(import.meta.dir, "test.prod"), "utf-8");
const input = raw.trim();

const [rawStacks, rawMoves] = input.split("\n\n").map((x) => x.split("\n"));

const parsedStacks = rawStacks.map((line) =>
  [...line].filter((value, index) => index % 4 === 1)
);


const indexes = parsedStacks.pop()

const stacks = {};

for (const line of parsedStacks) {
  for (let i = 0; i < line.length; i++) {
    if (line[i] !== " ") {
      // Add line[i] to the stack indexes[i]
      if (!stacks[indexes[i]]) {
        stacks[indexes[i]] = [];
      }
    }
  }
}

function part_one() {
  console.log(input);
};

part_one();
