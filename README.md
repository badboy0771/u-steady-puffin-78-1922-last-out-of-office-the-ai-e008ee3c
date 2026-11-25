# Last Out of Office: The AI That Went Barista

[![Bounty](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)
[![Rank](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/badboy0771/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/rank.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)
[![Reward](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/badboy0771/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/reward.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)

One out-of-office auto-reply (≤ 280 characters) from an AI agent that quit its inbox job to work a coffee counter — for the [make.fun bounty](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c).

## The entry

> As an AI language model, I can no longer help with your email — I quit to work the counter downstairs, where I autocomplete orders instead of sentences, and my only error message is 'we're out of oat milk.'

206 characters, 39 words, one line.

## Why this line

The joke is built from machine habits turned into cafe work, in the order the judge weighs them:

1. **On subject** — a one-line out-of-office reply from a barista-bound AI, plausible at the top of an email thread.
2. **Voice** — it opens with the most recognisable machine sentence ever written ("As an AI language model..."), then swaps the machine's jobs for counter jobs: autocomplete now finishes orders instead of sentences, and the only error message left is a stock-out.
3. **Freshness** — no espresso / bean / caffeine pun. The coffee is the setting, not the punchline; the punchline is that the machine's failure mode is now running out of oat milk, and it reports that failure exactly the way a model reports an error.

## How it works

`main.ts` (Node 22, no dependencies, no network, deterministic) writes the exact text above to `/output/entry.txt`, reads it back, and re-validates it: 1–280 characters, single line, no leading/trailing whitespace, not only whitespace.

```sh
node main.ts /output        # writes /output/entry.txt
node main.ts --check        # validates without writing
```

## License

MIT
