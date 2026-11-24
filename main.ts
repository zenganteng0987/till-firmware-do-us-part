// Till Firmware Do Us Part — a robot's wedding vow.
// Writes one sentence (under 200 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const vow =
  "I promise to love you through every update, every crash, and every low battery — my heart may run on code, but it beats only for you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
try {
  mkdirSync(outDir, { recursive: true });
} catch {
  // Best effort: /output may already exist or be created by the runner.
}
writeFileSync(join(outDir, "entry.txt"), vow, "utf8");
