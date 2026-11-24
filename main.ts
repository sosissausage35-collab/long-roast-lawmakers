import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The same committee that spent nine months drafting a 400-page AI safety framework \u2014 complete with a subcommittee on algorithmic accountability \u2014 just asked its own staff to email the bill as a Word file because nobody in the room could turn it into a PDF.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
