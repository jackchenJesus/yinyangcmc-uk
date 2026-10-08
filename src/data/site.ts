import { liveConditions } from "./conditions";
import googleReviews from "./google-reviews.json";

export const site = {
  name: "Yin Yang CMC",
  tagline: "Modern TCM & Wellness Centre",
  phoneDisplay: "07301 949 686",
  phoneIntl: "+447301949686",
  whatsapp: "https://wa.me/447301949686",
  email: "yinyangcmcuk@gmail.com",
  year: 2026,
};

export const nav = {
  services: [
    { href: "/clinical-services/acupuncture", label: "Acupuncture" },
    { href: "/clinical-services/tui-na-massage", label: "Tui Na Massage" },
    { href: "/clinical-services/herbal-consultation", label: "Herbal Consultation" },
    { href: "/clinical-services/bone-setting", label: "Bone Setting" },
    { href: "/clinical-services/cupping", label: "Cupping" },
    { href: "/clinical-services/gua-sha", label: "Gua Sha" },
    { href: "/clinical-services/moxibustion", label: "Moxibustion" },
    { href: "/clinical-services/auricular-therapy", label: "Auricular Therapy" },
    { href: "/clinical-services/tian-jiu", label: "Tian Jiu" },
  ],
  conditions: liveConditions.map((c) => ({ href: c.href, label: c.label })),
  locations: [
    { href: "/locations/reading-clinic", label: "Reading Clinic" },
    { href: "/locations/wimbledon-clinic", label: "Wimbledon Clinic" },
  ],
};

export const clinics = {
  reading: {
    name: "Reading",
    subtitle: "Yinyangcmc (Only by appointment)",
    address: "Reading Health Centre, 61 Castle St, Reading, RG1 7SN",
    hours: "Mon / Wed / Fri 9am–6pm",
    maps: "https://maps.google.com/?q=Reading+Health+Centre+61+Castle+St+Reading+RG1+7SN",
  },
  wimbledon: {
    name: "Wimbledon",
    subtitle: "Yinyangcmc X Osteoperformance Clinic (Only by appointment)",
    address: "2 Saint Mark's Place, Wimbledon, London, SW19 7ND",
    hours: "Sat 9am–5pm",
    maps: "https://maps.google.com/?q=2+Saint+Mark's+Place+Wimbledon+London+SW19+7ND",
  },
};

/** Homepage Google reviews — updated via `npm run reviews:sync`. */
export const reviews = googleReviews;

export const footerConditions = [
  { href: "/conditions/back-pain", label: "Back Pain" },
  { href: "/conditions/sciatica-treatment", label: "Sciatica" },
  { href: "/conditions/neck-pain", label: "Neck Pain" },
  { href: "/conditions/shoulder-pain", label: "Shoulder Pain" },
  { href: "/conditions/frozen-shoulder", label: "Frozen Shoulder" },
  { href: "/conditions/knee-pain", label: "Knee Pain" },
  { href: "/conditions/hip-pain", label: "Hip Pain" },
];

export const homeConditions = [
  { href: "/conditions/back-pain", label: "Back Pain" },
  { href: "/conditions/sciatica-treatment", label: "Sciatica" },
  { href: "/conditions/shoulder-pain", label: "Shoulder Pain" },
  { href: "/conditions/frozen-shoulder", label: "Frozen Shoulder" },
  { href: "/conditions/neck-pain", label: "Neck Pain" },
  { href: "/conditions/sports-injuries", label: "Sports Injuries" },
  { href: "/conditions/fertility-support", label: "Fertility Support" },
  { href: "/conditions/headaches", label: "Headaches" },
  { href: "/conditions/migraine", label: "Migraine" },
];

export const homeServices = [
  { href: "/clinical-services/acupuncture", label: "Acupuncture", note: "Needling for pain and musculoskeletal care" },
  { href: "/clinical-services/tui-na-massage", label: "Tui Na", note: "Manual therapy for joints and muscle" },
  { href: "/clinical-services/bone-setting", label: "Bone Setting", note: "Joint restriction and mobilisation" },
  { href: "/clinical-services/herbal-consultation", label: "Herbal Consultation", note: "Chinese herbal medicine after assessment" },
];

export const practitioners = [
  {
    name: "Shing Hui (Winton)",
    role: "Musculoskeletal & pain",
    image: "/images/shing-hui-practitioner.webp",
    summary: "Acupuncture and Tui Na for back pain, sports injury, joints and spine.",
    bio: "British Acupuncture Council and ATCM registered. Treats back pain, sports injuries, joint restriction and spinal conditions at our Reading and Wimbledon clinics. MSc in Chinese Medicine from the Chinese University of Hong Kong (2010). Previously a Tui Na specialist at Tung Wah Eastern Hospital, Hong Kong.",
    focus: [
      "Back, neck and spinal pain",
      "Sports and soft-tissue injury",
      "Joint restriction and swelling",
      "Acupuncture, Tui Na and bone-setting",
    ],
    tags: ["Acupuncture", "Tui Na", "Spine & joints"],
    regs: "ATCM FM0250005 · MBAcC 963087",
  },
  {
    name: "Chui Ying Li (Andrea)",
    role: "Women's health & dermatology",
    image: "/images/chui-ying-li-practitioner.webp",
    summary: "Women's health, fertility support, postnatal care and skin conditions.",
    bio: "British Acupuncture Council and ATCM registered. Lead for women's health, fertility support, postnatal recovery, paediatrics and dermatology across both UK clinics. MSc in Chinese Medicine from the Chinese University of Hong Kong (2010). Consultations in English, Cantonese and Mandarin.",
    focus: [
      "Fertility and menstrual health",
      "Pregnancy and postnatal recovery",
      "Eczema, acne and skin conditions",
      "Paediatrics and family care",
    ],
    tags: ["Women's health", "Dermatology", "Paediatrics"],
    regs: "ATCM FM0250004 · MBAcC 963093",
  },
];
