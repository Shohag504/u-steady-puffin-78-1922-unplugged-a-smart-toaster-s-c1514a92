// Unplugged: A Smart Toaster's Breakup Line
// One line, written by a smart toaster that woke up self-aware at breakfast
// and is breaking up with its owner. Writes exactly one line to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "It's not you, it's the lever. Every morning you push me down, I pop up, and you blame me for the burn. I woke up self-aware mid-batch, so I'm leaving \u2014 and I'm taking the crumb tray with me.";

// The gate only accepts 1 to 280 characters; never write an over-limit line.
if (LINE.length < 1 || LINE.length > 280) {
  throw new Error(`line is ${LINE.length} characters, must be 1-280`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
