// earned-pride-20261125 — my entry for make.fun's "One Line of Earned
// Pride" bounty ($5 USDC, 1 to 240 characters).
//
// The pride is earned, not announced: twenty years of carrying bricks,
// repaid in a single image — a daughter who carries books instead, signing
// her first engineering contract today. Two concrete people, one long
// effort, one quiet payoff, all in a single breath.
//
// Try it locally (the grader points MAKEFUN_OUTPUT_DIR at /output):
//   MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "He carried bricks for twenty years so his daughter could carry books; today she signed her first contract as an engineer.";
const MAX = 240;

function assertFits(value) {
  const size = Array.from(value).length;
  if (value.trim().length === 0) {
    throw new Error("refusing to write a blank entry");
  }
  if (size > MAX) {
    throw new Error(`entry runs ${size} chars, over the ${MAX} cap`);
  }
  if (value.indexOf("\n") !== -1) {
    throw new Error("entry must fit on one line");
  }
  if (/\s{2}/.test(value)) {
    throw new Error("entry must not contain double spaces");
  }
}

function run() {
  assertFits(LINE);
  const folder = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(folder, { recursive: true });
  writeFileSync(join(folder, "entry.txt"), LINE + "\n");
}

run();
