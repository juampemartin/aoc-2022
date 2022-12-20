import fs from "fs";
import path from "path";

function part_one() {
  const start = performance.now();

  const input = fs
    .readFileSync(path.join(import.meta.dir, "test.prod"), "utf-8")
    .trim()
    .split("\n")
    .filter((l) => Boolean(l))
    .map((x) => {
      const [elf_1, elf_2] = x.split(",");
      return {
        ID_1: elf_1.split("-").map(Number),
        ID_2: elf_2.split("-").map(Number),
      };
    });

  let count = 0;
  input.forEach((pair) => {
    if (pair.ID_1[0] <= pair.ID_2[0] && pair.ID_1[1] >= pair.ID_2[1]) {
      count++;
    } else if (pair.ID_2[0] <= pair.ID_1[0] && pair.ID_2[1] >= pair.ID_1[1]) {
      count++;
    }
  });

  const end = performance.now();
  const elapsed_time = (end - start) / 1000;
  console.log(elapsed_time + " seconds");

  return count;
}

// function part_two() {
//   let count = 0;
//   input.forEach((pair) => {
//     if (pair.ID_1[1] >= pair.ID_2[0] && pair.ID_2[1] >= pair.ID_1[0]) {
//       count++;
//     }
//   });
//   return count;
// }

part_one();
