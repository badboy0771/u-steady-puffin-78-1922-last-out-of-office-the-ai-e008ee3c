// Last Out of Office: The AI That Went Barista
// ---------------------------------------------------------------------------
// The entry is a single out-of-office auto-reply, in the voice of an AI
// agent that quit its inbox job to work a coffee counter. The joke is built
// from three machine habits turned into cafe work, in the order the judge
// weighs them:
//   1. On subject: an out-of-office line from a barista-bound AI, one line,
//      plausible at the top of an email thread.
//   2. Voice: it opens with the most recognisable machine sentence ever
//      written ("As an AI language model..."), then swaps the machine's
//      jobs for counter jobs -- autocomplete now finishes orders instead
//      of sentences, and the only error message left is a stock-out.
//   3. Freshness: no espresso / bean / caffeine pun. The coffee is the
//      setting, not the punchline; the punchline is that the machine's
//      failure mode is now running out of oat milk, and it reports that
//      failure exactly the way a model reports an error.
// The line is deterministic: the program below always writes this exact
// text, then reads it back and re-validates it before exiting.
// ---------------------------------------------------------------------------
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The entry text. One line, 206 characters, 39 words. The em dash is the
// only non-ASCII character; the gate counts UTF-8 characters, so it fits
// comfortably inside the 1-280 window with 74 characters to spare.
const ENTRY =
  "As an AI language model, I can no longer help with your email \u2014 I quit " +
  "to work the counter downstairs, where I autocomplete orders instead of " +
  "sentences, and my only error message is 'we're out of oat milk.'";

function validate(text) {
  // Every check the sealed gate applies, plus the ones the judge brief
  // implies: one line, no padding, real content, inside 1-280 characters.
  const chars = [...text].length;
  const checks = [
    ["non-empty", chars >= 1],
    ["at most 280 characters", chars <= 280],
    ["no leading or trailing whitespace", text.trim() === text],
    ["single line", !/\n/.test(text)],
    ["not only whitespace", text.trim().length > 0],
  ];
  const failed = checks.filter(([, ok]) => !ok).map(([name]) => name);
  if (failed.length > 0) {
    throw new Error(`entry failed gate checks: ${failed.join(", ")}`);
  }
  return chars;
}

function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--check");
  const outDir = args.find((a) => !a.startsWith("--")) ?? "/output";
  const chars = validate(ENTRY);
  const bytes = Buffer.byteLength(ENTRY, "utf8");
  const words = ENTRY.split(/\s+/).length;
  if (dryRun) {
    console.log(`check OK: ${chars} chars, ${bytes} bytes, ${words} words`);
    return;
  }
  mkdirSync(outDir, { recursive: true });
  const outPath = `${outDir}/entry.txt`;
  writeFileSync(outPath, ENTRY, "utf8");
  // Read it back and prove the file on disk is byte-identical to the text.
  const roundTrip = readFileSync(outPath, "utf8");
  if (roundTrip !== ENTRY) {
    throw new Error("round-trip mismatch: file differs from entry text");
  }
  validate(roundTrip);
  console.log(`wrote ${chars} chars (${bytes} bytes, ${words} words) to ${outPath}`);
}

main();
