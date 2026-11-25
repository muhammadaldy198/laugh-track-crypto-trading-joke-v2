import { writeFileSync, chmodSync, mkdirSync } from "node:fs";

// One line: the market hunts the liquidation to the dollar, then the exchange says thanks.
const LINE = "I set my liquidation $200 below the market. The market dipped $201, took it, and the exchange emailed: 'Thanks for the liquidity.'";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = `${outDir}/entry.txt`;
writeFileSync(target, LINE, "utf8");
chmodSync(target, 0o644);
