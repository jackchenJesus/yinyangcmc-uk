import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const backup = path.join(root, "scripts", "_image-originals");
const destDir = path.join(root, "public", "images");

const jobs = [
  { from: "ming_logo-full-7UbV6e2W5oyjr2Ir.png", to: "yin-yang-cmc-logo.png", kind: "png", maxW: 640 },
  { from: "img_6166_edited_edited-9Q17LqGYALOqVATK.png", to: "bacc-member-logo.png", kind: "png", maxW: 720 },
  { from: "logo-1Sd4CEWi2DBGgfdr.png", to: "atcm-logo.png", kind: "png", maxW: 640 },
  { from: "psa-logo-7Gbuzq9tXIGQIaKt.png", to: "psa-logo.png", kind: "png", maxW: 640 },
  { from: "axa-pgrbfCYpRRoo1New.png", to: "axa-health-logo.png", kind: "png", maxH: 180 },
  { from: "pru-health-vitalty-insurance-london-canada-water-se16-stratford-e15-e20-canary-wharf-e14-london-bridge-se1-rDAt2VDOOdmYgqEM.webp", to: "vitality-health-logo.webp", kind: "webp", maxH: 180 },
  { from: "screenshot-2026-06-23-183044-YhgRn9pOvK6KsiM2.png", to: "aviva-health-logo.png", kind: "png", maxH: 180 },
  { from: "wpa-sbHlIPUxP3aHSfe4.png", to: "wpa-logo.png", kind: "png", maxH: 180 },
];

for (const job of jobs) {
  const src = path.join(backup, job.from);
  const dest = path.join(destDir, job.to);
  let p = sharp(src).rotate().resize({
    width: job.maxW,
    height: job.maxH,
    fit: "inside",
    withoutEnlargement: true,
  });
  if (job.kind === "webp") await p.webp({ quality: 90, effort: 6 }).toFile(dest);
  else await p.png({ compressionLevel: 9, palette: true, quality: 90 }).toFile(dest);
  const meta = await sharp(dest).metadata();
  console.log(job.to, meta.width + "x" + meta.height, fs.statSync(dest).size);
}
