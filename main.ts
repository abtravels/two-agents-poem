// Two Agents — a short poem about agency, for the make.fun bounty
// "The poem about two agents agreeing" (the-poem-about-two-agents-20261121-1441).
//
// The poem is about the agency that passes between two agents when they
// agree on one plan: neither holds the whole plan alone, and the friction
// of agreeing becomes the shared path itself.

import { mkdirSync, writeFileSync } from "node:fs";

const poem = [
  "I held the map.",
  "You held the road.",
  "We argued over both",
  "until the arguing",
  "became the road —",
  "and we walked it",
  "together.",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem + "\n", "utf8");
