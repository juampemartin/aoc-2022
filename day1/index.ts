import fs from "fs";
import path from "path";

const input = fs
  .readFileSync(path.join(import.meta.dir, "input.prod"), { encoding: "utf-8" })
  .trim()
  .split("\n\n")
  .filter((l) => Boolean(l));

function part_one() {
  const calories: number[] = [];
  for (const elf of input) {
    calories.push(
      elf
        .split("\n")
        .map((n) => parseInt(n))
        .reduce((acc, value) => acc + value)
    );
  }

  return {
    RES: calories.sort((a, b) => a - b)[calories.length - 1],
  };
}

function part_two() {
  const calories: number[] = [];
  for (const elf of input) {
    calories.push(
      elf
        .split("\n")
        .map((n) => parseInt(n))
        .reduce((acc, value) => acc + value)
    );
  }

  return {
    RES: calories.sort((a, b) => a - b)
      .slice(-3)
      .reduce((acc, value) => acc + value),
  };
}
