import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const { replacements } = JSON.parse(
  fs.readFileSync(path.join(root, "scripts", "image-opt-report.json"), "utf8")
);
const imgDir = path.join(root, "public", "images");

for (const from of Object.keys(replacements)) {
  const p = path.join(imgDir, from);
  const to = replacements[from];
  if (from === to) continue;
  if (fs.existsSync(p)) {
    fs.unlinkSync(p);
    console.log("removed", from);
  }
}
