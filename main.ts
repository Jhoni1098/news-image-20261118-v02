// Entry program for news-image-20261118-v02.
// The picture itself is the entry; this file only moves it into place,
// copying entry.png from the repo root to the grader's output folder.
// Runs on Node 22 with the standard library alone.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const repoRoot = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });

try {
  copyFileSync(join(repoRoot, "entry.png"), join(outDir, "entry.png"));
} catch (err) {
  console.error("entry.png could not be copied:", (err as Error).message);
  process.exit(1);
}
