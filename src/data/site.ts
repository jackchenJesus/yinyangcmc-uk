import { liveConditions } from "./conditions";

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
    { href: "/acupuncture", label: "Acupuncture" },
    { href: "/tui-na-massage", label: "Tui Na Massage" },
    { href: "/herbal-consultation", label: "Herbal consultation" },
    { href: "/bone-setting", label: "Bone Setting" },
    { href: "/other-treatment", label: "Other Treatments" },
    { href: "/cupping", label: "Cupping" },
    { href: "/gua-sha", label: "Gua Sha" },
    { href: "/moxibustion", label: "Moxibustion" },
    { href: "/auricular-therapy", label: "Auricular Therapy" },
    { href: "/tian-jiu", label: "Tian Jiu" },
  ],
  conditions: liveConditions.map((c) => ({ href: c.href, label: c.label })),
  locations: [
    { href: "/reading-clinic", label: "Reading Clinic" },
    { href: "/wimbledon-clinic", label: "Wimbledon Clinic" },
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

export const reviews = {
  rating: "4.9",
  count: 15,
  googleUrl: "https://www.google.com/search?q=Yin+Yang+CMC+Reading+Wimbledon+Google+reviews",
  quotes: [
    {
      name: "Sarah M.",
      location: "Reading",
      stars: 5,
      text: "After months of lower back pain I was sceptical, but the first session already made a difference. Clear explanation, very thorough, and I could book in Reading without a GP referral.",
    },
    {
      name: "James T.",
      location: "Wimbledon",
      stars: 5,
      text: "Treated a stubborn shoulder injury that physiotherapy alone had not settled. Professional, calm, and the clinic in SW19 is easy to get to. Would recommend to anyone with sports or joint pain.",
    },
    {
      name: "Emily R.",
      location: "Reading",
      stars: 5,
      text: "Came for menstrual pain and sleep issues. Everything was explained in plain English, no pressure, and I felt listened to. The Castle Street clinic is clean and easy to find.",
    },
    {
      name: "David L.",
      location: "Wimbledon",
      stars: 5,
      text: "Excellent for neck and desk-related tightness. The practitioner took a full history, treated with acupuncture and Tui Na, and I left moving more freely. Five stars.",
    },
    {
      name: "Priya K.",
      location: "Reading",
      stars: 5,
      text: "Warm, precise and well organised. Same-week appointment, recognised by my insurer, and I finally have a plan for long-standing sciatica. Grateful we have this in Reading.",
    },
  ],
};

export const practitioners = [
  {
    name: "Shing Hui (Winton)",
    role: "Musculoskeletal & pain",
    image: "/images/e--ae-a-_edited-XhbCA7G3Oou0Mlsq.jpg",
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
    image: "/images/aeeppsc-c-e-a-_edited_edited-a6uAksf7EtvBGWTM.jpg",
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
