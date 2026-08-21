import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const imgDir = path.join(root, "public", "images");
const backupDir = path.join(root, "scripts", "_image-originals");

fs.mkdirSync(backupDir, { recursive: true });

const PHOTO_Q = 82;
const LOGO_Q = 90;

/** @type {Array<{from: string, to: string, kind: "photo"|"logo-png"|"logo-webp"|"graphic-webp", maxW?: number, maxH?: number}>} */
const jobs = [
  { from: "webbanner-eQwGJSc8Re6udP6z.jpg", to: "acupuncture-back-treatment.webp", kind: "photo", maxW: 1920 },
  { from: "img_6058-eVlfhKuykGV6M98J.jpg", to: "reading-clinic-treatment-room.webp", kind: "photo", maxW: 1600 },
  { from: "ed61151b-8db1-40a1-9f0f-4d9fee7567c5_edi-B2yhs2iysFxKirqN.jpg", to: "reading-clinic-interior.webp", kind: "photo", maxW: 1600 },
  { from: "screenshot-2025-12-05-at-10.17.22-1VPeecyL0rBlKQh4.jpg", to: "wimbledon-clinic-interior.webp", kind: "photo", maxW: 1600 },
  { from: "e--ae-a-_edited-XhbCA7G3Oou0Mlsq.jpg", to: "shing-hui-practitioner.webp", kind: "photo", maxW: 800 },
  { from: "aeeppsc-c-e-a-_edited_edited-a6uAksf7EtvBGWTM.jpg", to: "chui-ying-li-practitioner.webp", kind: "photo", maxW: 800 },
  { from: "adobestock_88537046-low-My8DbSswqH0l0J9t.jpg", to: "acupuncture-abdomen-treatment.webp", kind: "photo", maxW: 1400 },
  { from: "lesson-1-sqDt7CzsVqOfjk8h.jpg", to: "tcm-workshop-presentation.webp", kind: "photo", maxW: 1400 },
  { from: "lesson-2-lRbBjXWM7hxFlTSo.jpg", to: "tcm-workshop-2.webp", kind: "photo", maxW: 1400 },
  { from: "lesson-3-KEj7Q3TDqNbc5hA8.jpg", to: "tcm-workshop-3.webp", kind: "photo", maxW: 1400 },
  { from: "lesson-4-FeX7VoWsezomSvjS.jpg", to: "tcm-workshop-4.webp", kind: "photo", maxW: 1400 },
  { from: "lesson-5-uPJtsceVCgOAp9aF.jpg", to: "tcm-workshop-5.webp", kind: "photo", maxW: 1400 },
  { from: "back_pain_treatment-vMLmusxJIAVKmYK5.png", to: "back-assessment-treatment.webp", kind: "photo", maxW: 1600 },
  { from: "sciatica-lower-back-pain-CiEnhdaob4WbteY2.png", to: "sciatica-nerve-illustration.webp", kind: "photo", maxW: 1600 },
  { from: "sports-injuries-orthopaedics-7F9Mh61pjr43DjEH.png", to: "knee-assessment-clinic.webp", kind: "photo", maxW: 1600 },
  { from: "back-pain-sciatica-hAE6tS5ptUz32TSo.png", to: "manual-therapy-side-lying.webp", kind: "photo", maxW: 1600 },
  { from: "acupuncture-for-shoulder-pain-k9uul1g0Hqlp9Qaa.webp", to: "shoulder-pain-symptom.webp", kind: "photo", maxW: 1600 },
  { from: "acupuncture_for_frozen_shoulder-LYlyaUQ7GqsYzZB5.webp", to: "shoulder-pain-holding-shoulder.webp", kind: "photo", maxW: 1600 },
  { from: "tui-na-massage-8YKIYR6VTwdVMTdx.webp", to: "tui-na-massage-treatment.webp", kind: "photo", maxW: 1600 },
  { from: "bone-setting-orthopaedic-care-o6PPJu9WdXDef1r7.webp", to: "bone-setting-treatment.webp", kind: "photo", maxW: 1600 },
  { from: "chinese-herbal-medicine-6MuZIXMBnlhegCyU.webp", to: "chinese-herbal-medicine.webp", kind: "photo", maxW: 1600 },
  { from: "conditions-we-treat-OWrWp19D0BpU3xPw.webp", to: "pulse-diagnosis-consultation.webp", kind: "photo", maxW: 1600 },
  { from: "label_other_white-ilyOGIeZEF3BJ6hg.png", to: "other-treatment-icon.webp", kind: "graphic-webp", maxW: 1200 },
  { from: "ming_logo-full-7UbV6e2W5oyjr2Ir.png", to: "yin-yang-cmc-logo.png", kind: "logo-png", maxW: 480 },
  { from: "img_6166_edited_edited-9Q17LqGYALOqVATK.png", to: "bacc-member-logo.png", kind: "logo-png", maxW: 400 },
  { from: "logo-1Sd4CEWi2DBGgfdr.png", to: "atcm-logo.png", kind: "logo-png", maxW: 400 },
  { from: "psa-logo-7Gbuzq9tXIGQIaKt.png", to: "psa-logo.png", kind: "logo-png", maxW: 400 },
  { from: "axa-pgrbfCYpRRoo1New.png", to: "axa-health-logo.png", kind: "logo-png", maxH: 96 },
  { from: "pru-health-vitalty-insurance-london-canada-water-se16-stratford-e15-e20-canary-wharf-e14-london-bridge-se1-rDAt2VDOOdmYgqEM.webp", to: "vitality-health-logo.webp", kind: "logo-webp", maxH: 96 },
  { from: "screenshot-2026-06-23-183044-YhgRn9pOvK6KsiM2.png", to: "aviva-health-logo.png", kind: "logo-png", maxH: 96 },
  { from: "wpa-sbHlIPUxP3aHSfe4.png", to: "wpa-logo.png", kind: "logo-png", maxH: 96 },
];

function fmt(n) {
  return (n / 1024).toFixed(1) + " KB";
}

const report = [];

for (const job of jobs) {
  const src = path.join(imgDir, job.from);
  const dest = path.join(imgDir, job.to);
  if (!fs.existsSync(src)) {
    console.error("MISSING", job.from);
    continue;
  }

  const before = fs.statSync(src).size;
  const meta = await sharp(src).metadata();
  fs.copyFileSync(src, path.join(backupDir, job.from));

  let pipeline = sharp(src).rotate();
  pipeline = pipeline.resize({
    width: job.maxW,
    height: job.maxH,
    fit: "inside",
    withoutEnlargement: true,
  });

  if (job.kind === "photo" || job.kind === "graphic-webp" || job.kind === "logo-webp") {
    const q = job.kind === "photo" ? PHOTO_Q : LOGO_Q;
    await pipeline.webp({ quality: q, effort: 6 }).toFile(dest);
  } else {
    await pipeline.png({ compressionLevel: 9, palette: true, quality: 90 }).toFile(dest);
  }

  const afterMeta = await sharp(dest).metadata();
  const after = fs.statSync(dest).size;
  const saving = before - after;
  const pct = ((saving / before) * 100).toFixed(1);
  const row = {
    from: job.from,
    to: job.to,
    beforeBytes: before,
    afterBytes: after,
    savingBytes: saving,
    pct,
    beforeDim: `${meta.width}x${meta.height}`,
    afterDim: `${afterMeta.width}x${afterMeta.height}`,
  };
  report.push(row);
  console.log(
    `${job.from}\n  -> ${job.to}  ${row.beforeDim} ${fmt(before)}  =>  ${row.afterDim} ${fmt(after)}  (${pct}%)`
  );

  if (after >= before * 0.97 && job.from !== job.to) {
    console.log("  NOTE: little saving; keeping new file for naming/format consistency.");
  }
}

const replacements = Object.fromEntries(jobs.map((j) => [j.from, j.to]));
fs.writeFileSync(
  path.join(root, "scripts", "image-opt-report.json"),
  JSON.stringify({ replacements, report }, null, 2)
);

console.log("\nDONE", report.length, "files");
console.log(
  "TOTAL",
  fmt(report.reduce((a, r) => a + r.beforeBytes, 0)),
  "=>",
  fmt(report.reduce((a, r) => a + r.afterBytes, 0))
);
