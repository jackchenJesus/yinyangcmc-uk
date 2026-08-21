import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const srcRoot = path.join(root, "src");
const files = [];

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (p.endsWith(".astro")) files.push(p);
  }
}
walk(srcRoot);

const pairs = [
  [
    /(<img\n\s+class="page-hero-bg"\n\s+src="[^"]+"\n\s+)alt="[^"]+"/,
    '$1alt=""',
  ],
  ['alt="Yin Yang CMC Reading clinic"', 'alt="Reception and hallway at the Reading clinic"'],
  ['alt="Yin Yang CMC Wimbledon clinic"', 'alt="Reception area at the Wimbledon clinic"'],
  ['alt="Yin Yang CMC clinic interior"', 'alt="Treatment room at Yin Yang CMC in Reading"'],
  ['alt="Yin Yang CMC clinical consultation"', 'alt="Treatment room at Yin Yang CMC in Reading"'],
  ['alt="Acupuncture treatment at Yin Yang CMC"', 'alt="Acupuncture needles being inserted into a patient\'s abdomen"'],
  ['alt="Clinical orthopaedic assessment at Yin Yang CMC"', 'alt="Acupuncture needles being inserted into a patient\'s abdomen"'],
  ['alt="Chinese medicine clinical treatment"', 'alt="Acupuncture needles being inserted into a patient\'s abdomen"'],
  ['alt="Treatment room at Yin Yang CMC in Reading and Wimbledon"', 'alt="Treatment room at Yin Yang CMC in Reading"'],
  ['alt="Winton Hui (Shing Hui), Yin Yang CMC practitioner"', 'alt="Portrait of Shing Hui (Winton)"'],
  ['alt="Andrea Li (Chui Ying Li), Yin Yang CMC practitioner"', 'alt="Portrait of Chui Ying Li (Andrea)"'],
  ['alt="Yin Yang CMC UK clinic"', 'alt=""'],
];

for (const file of files) {
  let text = fs.readFileSync(file, "utf8");
  const orig = text;
  for (const [from, to] of pairs) {
    text = typeof from === "string" ? text.split(from).join(to) : text.replace(from, to);
  }
  if (text !== orig) {
    fs.writeFileSync(file, text);
    console.log("patched", path.relative(root, file));
  }
}
