import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const { replacements } = JSON.parse(
  fs.readFileSync(path.join(root, "scripts", "image-opt-report.json"), "utf8")
);

const srcRoot = path.join(root, "src");
const files = [];

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) walk(p);
    else if (/\.(astro|ts|tsx|js|mjs|css|json|md)$/.test(name)) files.push(p);
  }
}
walk(srcRoot);

let fileHits = 0;
let replHits = 0;
for (const file of files) {
  let text = fs.readFileSync(file, "utf8");
  let changed = false;
  for (const [from, to] of Object.entries(replacements)) {
    if (text.includes(from)) {
      const n = text.split(from).length - 1;
      text = text.split(from).join(to);
      replHits += n;
      changed = true;
    }
  }
  if (changed) {
    fs.writeFileSync(file, text);
    fileHits++;
    console.log("updated", path.relative(root, file));
  }
}
console.log("files", fileHits, "replacements", replHits);
