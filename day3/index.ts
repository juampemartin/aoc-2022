import fs from "fs";
import path from "path";

const input = fs
  .readFileSync(path.join(import.meta.dir, "input.prod"), "utf-8")
  .trim()
  .split("\n")
  .filter((l) => Boolean(l));

type Rucksack = {
  First: string;
  Second: string;
};

const PRIORITIES = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function group<T>(arr: T[], chunk_size: number): T[][] {
  return Array.from({ length: arr.length / 3 }, () =>
    arr.splice(0, chunk_size)
  );
}

function part_one(): number {
  const rucksacks: Rucksack[] = input.map((r) => {
    return {
      First: r.slice(0, r.length / 2),
      Second: r.slice(r.length / 2, r.length + 1),
    };
  });

  const chars: string[] = [];
  let score: number = 0;

  rucksacks.map((r) => {
    for (const c of r.First) {
      if (r.Second.includes(c)) {
        chars.push(c);
        break;
      }
    }
  });

  chars.forEach((c) => {
    score += PRIORITIES.indexOf(c) + 1;
  });

  return score;
}

function part_two(): number {
  let score: number = 0;
  const elf_groups = group<string>(input, 3);

  elf_groups.forEach((group) => {
    const [line1, line2, line3] = group;

    for (const l of line1) {
      if (line2.includes(l) && line3.includes(l)) {
        score += PRIORITIES.indexOf(l) + 1;
        break;
      }
    }
  });

  return score;
}

console.log(part_two())
