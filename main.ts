// One Word From Grandma — make.fun entry (v2).
// Writes exactly one word (1–30 characters) to /output/entry.txt: the
// word my grandma would text about AI. "terminator" — she has seen the
// films, she does not trust the robot, and one word says it all.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "terminator";

// Gate guard: exactly one word, 1–MAX_WORD_LEN characters, no whitespace inside.
const MAX_WORD_LEN = 30;
const WORD_PATTERN = new RegExp(`^[A-Za-z]{1,${MAX_WORD_LEN}}$`);

if (!WORD_PATTERN.test(entry)) {
  throw new Error(`entry ${JSON.stringify(entry)} is not one word of 1-${MAX_WORD_LEN} letters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
