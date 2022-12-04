import fs from "fs";
import path from "path";

const input = fs
  .readFileSync(path.join(import.meta.dir, "input.prod"), {
    encoding: "utf-8",
  })
  .trim()
  .split("\n")
  .filter((l) => Boolean(l));

type aChoice = "A" | "B" | "C";
type bChoice = "X" | "Y" | "Z";

type gameScore = 0 | 3 | 6;
type myScore = 1 | 2 | 3;

function getOutCome(a: aChoice, b: bChoice) {
  switch (a) {
    case "A":
      if (b == "X") return 3;
      if (b == "Y") return 6;
      if (b == "Z") return 0;
      break;

    case "B":
      if (b == "X") return 0;
      if (b == "Y") return 3;
      if (b == "Z") return 6;
      break;

    case "C":
      if (b == "X") return 6;
      if (b == "Y") return 0;
      if (b == "Z") return 3;
      break;
  }
  return 0;
}

function getScore(b: bChoice): myScore {
  switch (b) {
    case "X":
      return 1;
    case "Y":
      return 2;
    case "Z":
      return 3;
    default:
      break;
  }
  return 1;
}

const gameMapper: Record<aChoice, Record<bChoice, bChoice>> = {
  A: { X: "Z", Y: "X", Z: "Y" },
  B: { X: "X", Y: "Y", Z: "Z" },
  C: { X: "Y", Y: "Z", Z: "X" },
};

const myScoreMapper: Record<bChoice, myScore> = { X: 1, Y: 2, Z: 3 }
const gameScoreMapper: Record<bChoice, gameScore> = { X: 0, Y: 3, Z: 6};

function part_one(): number {
  let totalScore: number = 0;
  input.forEach((line) => {
    const [elfChoice, myChoice] = line.split(" ") as [aChoice, bChoice];

    totalScore += getOutCome(elfChoice, myChoice);
    totalScore += getScore(myChoice);
  });
  return totalScore;
}

function part_two(): number {
  let totalScore: number = 0;

  input.forEach((line) => {
    const [elfChoice, myChoice] = line.split(" ") as [aChoice, bChoice];
    const myShape = gameMapper[elfChoice][myChoice];
    totalScore += gameScoreMapper[myChoice] + myScoreMapper[myShape]
  });

  return totalScore;
}
