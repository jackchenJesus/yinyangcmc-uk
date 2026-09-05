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
  rating: "5.0",
  count: 28,
  googleUrl:
    "https://www.google.com/maps/place/Yin+Yang+Chinese+Practitioners+Centre+UK/@51.4221788,-0.2078681,17z/data=!4m8!3m7!1s0x478320cfdc30305b:0xe1fce118b1794b86!8m2!3d51.4221788!4d-0.2078681!9m1!1b1!16s%2Fg%2F11ym0btzjb",
  quotes: [
    {
      name: "Hazel Chow",
      location: "Wimbledon",
      stars: 5,
      text: "I had acupuncture and alignment treatment here, and the results have been amazing. I experienced significant pain relief after just a few sessions, and my overall mobility and comfort improved so much. The practitioner was very professional, attentive. He took time to understand my condition before starting the treatment. The acupuncture helped release tension and reduce pain, while the alignment treatment made my body feel much more balanced and relaxed. I truly appreciate the care and expertise provided, and I highly recommend this place to anyone looking for effective pain relief and professional treatment.",
    },
    {
      name: "Peter Ho",
      location: "Wimbledon",
      stars: 5,
      text: "Two visits involving acupuncture, cupping, and alignment resolved my shoulder issue that had troubled me for years. Very skillful and patient—highly recommended! Just amazing!",
    },
    {
      name: "Vivien Chong",
      location: "Wimbledon",
      stars: 5,
      text: "Dr Hui (TCM) is amazing. I spent 7 months on physiotherapy for my wrist pain (De Quervain's Tenosynovitis) but nothing worked. After only 3 treatments, I’m almost fully recovered. His expertise in pain management is truly impressive. Highly recommended!",
    },
    {
      name: "Joyce Tsui",
      location: "Wimbledon",
      stars: 5,
      text: "I previously had physiotherapy consultations for my lower back pain and neck stiffness, but they didn’t help. TCM acupuncture and cupping have significantly relieved my pain, and my mobility has improved considerably after one session. Dr Hui is very experienced in treating musculoskeletal problems. I really appreciate their patience during the treatment. Highly recommend.",
    },
    {
      name: "Kirsten Chua",
      location: "Wimbledon",
      stars: 5,
      text: "Both practitioners are incredibly experienced. I have seen Dr Hui for my neck and shoulder pain, and he has fixed my long time chronic pain. He consistently keeps me pain free and spends so much to fully understand the whole situation before every session, you can really feel that he cares about treating the root of the issue and not just the symptoms. I have also seen Dr Li for female health and other health concerns, she is also very knowledgeable and helpful. She has provided prescriptions that showed results over time and I continue to trust her with my general health. 10/10 would recommend.",
    },
    {
      name: "Fanny Law",
      location: "Wimbledon",
      stars: 5,
      text: "I was suffering from De Quervain’s tenosynovitis (commonly known as “mother’s thumb”) for about 2–3 weeks. At its worst, the pain was so severe that I was unable to lift heavy objects. After my first treatment, I already experienced a significant improvement, with a noticeable reduction in pain. After just two sessions, I no longer needed further treatment. Whenever I had questions, Dr. Hui patiently addressed all of them with clear explanations. Dr. Hui has extensive experience in treating musculoskeletal pain. With only two sessions of manual therapy and acupuncture, my condition was effectively resolved. I am truly very satisfied with the treatment.",
    },
    {
      name: "Chris Liu",
      location: "Wimbledon",
      stars: 5,
      text: "I had an excellent experience with Dr Hui. He was professional, knowledgeable, and very clear when explaining procedure and treatment options and directions. I had been struggling with ongoing wrist pain and had already tried physiotherapy, chiropractic, and osteopathy but nothing had fully resolved it. He really knew what he was doing and got excellent results. Thank you so much.",
    },
    {
      name: "Eva Cheung",
      location: "Wimbledon",
      stars: 5,
      text: "My son has seen Dr Hui for his long term feet problem which causes him to sprain his ankle constantly. We have tried podiatrist but they were unable to tackle the root cause. We are impressed with Dr Hui professionalism as my son’s condition improved significantly just after the first session with a combination of acupuncture and therapeutic massage. Dr Hui is friendly and patient, explaining the cause and treatment plan very clearly. We will highly recommend Dr Hui.",
    },
  ],
};

export const homeConditions = [
  { href: "/conditions/back-pain", label: "Back Pain" },
  { href: "/conditions/sciatica-treatment", label: "Sciatica" },
  { href: "/conditions/shoulder-pain", label: "Shoulder Pain" },
  { href: "/conditions/frozen-shoulder", label: "Frozen Shoulder" },
  { href: "/conditions/neck-pain", label: "Neck Pain" },
  { href: "/conditions/sports-injuries", label: "Sports Injuries" },
  { href: "/conditions/fertility-support", label: "Fertility Support" },
  { href: "/conditions#pain-msk", label: "Headaches & Migraines" },
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
