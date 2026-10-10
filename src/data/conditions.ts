import { expansionConditions } from "./conditions-expansion";

export const conditionCategories = [
  { id: "pain-msk", label: "Pain & Musculoskeletal", short: "Pain & MSK" },
  { id: "womens-health", label: "Women's Health", short: "Women's Health" },
  { id: "internal", label: "Internal, Skin & Sleep", short: "Internal & Skin" },
] as const;

export type ConditionCategoryId = (typeof conditionCategories)[number]["id"];

export type ConditionTreatment = {
  href: string;
  label: string;
  why: string;
};

/** Opt-in section order for condition pages; default layout unchanged when omitted. */
export type ConditionSectionId =
  | "hero"
  | "intro-with-symptoms"
  | "intro"
  | "symptoms"
  | "causes"
  | "treatments"
  | "patterns"
  | "evidence"
  | "expect"
  | "safety"
  | "practitioner"
  | "clinic"
  | "related"
  | "faq"
  | "cta";

export const defaultConditionSectionOrder: ConditionSectionId[] = [
  "hero",
  "intro-with-symptoms",
  "causes",
  "treatments",
  "patterns",
  "expect",
  "safety",
  "related",
  "faq",
  "cta",
];

export type LiveCondition = {
  slug: string;
  href: string;
  label: string;
  category: ConditionCategoryId;
  status: "live";
  summary: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  lede: string;
  image: string;
  heroImage?: string;
  sectionImage?: string;
  sectionImageAlt?: string;
  intro: string[];
  symptoms: string[];
  causes: { title: string; body: string }[];
  treatments: ConditionTreatment[];
  patterns: { title: string; body: string }[];
  related: string[];
  faqs: { q: string; a: string }[];
  imageAlt?: string;
  ogTitle?: string;
  ogDescription?: string;
  introHeading?: string;
  causesHeading?: string;
  causesIntro?: string;
  treatmentsHeading?: string;
  expectHeading?: string;
  heroSecondaryLabel?: string;
  heroSecondaryHref?: string;
  expect?: { title: string; body: string }[];
  safety?: { intro: string; items: string[] };
  ctaHeading?: string;
  /** Prefilled WhatsApp enquiry (page CTAs only; sitewide float unchanged). */
  whatsappMessage?: string;
  heroPrimaryLabel?: string;
  /** Short availability line shown under the hero CTA (HTML allowed for clinic links). */
  heroAvailabilityHtml?: string;
  sectionOrder?: ConditionSectionId[];
  /** Override default MSK-oriented patterns section copy when set. */
  patternsEyebrow?: string;
  patternsHeading?: string;
  patternsIntro?: string;
  /** Evidence / guideline context (visible on page; not a substitute for medical advice). */
  evidence?: { heading: string; paragraphs: string[] };
  /** Practitioner trust block — use only verified profile information. */
  practitioner?: {
    heading?: string;
    name: string;
    role: string;
    image: string;
    imageAlt: string;
    paragraphs: string[];
    profileHref: string;
    regs: string;
  };
};

export type ListedCondition = {
  slug: string;
  href: string;
  label: string;
  category: ConditionCategoryId;
  status: "listed";
  summary: string;
};

export type Condition = LiveCondition | ListedCondition;

export const conditions: Condition[] = [
  // ── Pain & MSK — live ─────────────────────────────────
  {
    slug: "back-pain",
    href: "/conditions/back-pain",
    label: "Back Pain",
    category: "pain-msk",
    status: "live",
    summary:
      "Mechanical, inflammatory and chronic lower-back pain — acupuncture, Tui Na and bone-setting as part of musculoskeletal care, not painkillers alone.",
    title: "Back Pain Treatment & Acupuncture | Reading & Wimbledon",
    description:
      "Back pain treatment with acupuncture in Reading and Wimbledon. Assessment first for mechanical, nerve-related and longer-standing flare-ups.",
    ogTitle: "Back Pain Treatment & Acupuncture | Reading & Wimbledon",
    ogDescription:
      "Acupuncture and manual therapy for back pain at our Reading and Wimbledon clinics. Assessment first — not a fixed package.",
    introHeading: "Back pain, stiffness and what we assess",
    treatmentsHeading: "Acupuncture, Tui Na and bone-setting for back pain",
    ctaHeading: "Ready to book back pain treatment?",
    h1: "Acupuncture for Back Pain in Reading & Wimbledon",
    eyebrow: "Conditions · Back Pain",
    lede: "Painkillers manage the sensation. We assess the musculoskeletal picture, then use acupuncture and manual therapy for back pain at our Reading and Wimbledon clinics — tailored to your presentation.",
    image: "/images/back-assessment-treatment.webp",
    imageAlt: "Practitioner assessing a patient's back in clinic",
    heroImage: "/images/generated/back-pain-patient-hero.webp",
    sectionImage: "/images/acupuncture-needles-back.webp",
    sectionImageAlt: "Close-up of acupuncture needles being placed on a patient's back during treatment",
    intro: [
      "Back pain is one of the most common reasons people in the UK reduce activity, take time off work, or live with daily discomfort that gradually wears them down. It is a symptom with many drivers — not a single diagnosis.",
      "Whether the pain sits in the lower back, mid-spine, or radiates into the hips, our practitioners combine classical TCM diagnosis with modern musculoskeletal assessment. Treatment is typically a combination of <a href=\"/clinical-services/acupuncture\">acupuncture</a>, <a href=\"/clinical-services/tui-na-massage\">Tui Na</a> and <a href=\"/clinical-services/bone-setting\">bone-setting</a>, calibrated to your presentation — not a fixed package. Appointments are at our <a href=\"/locations/reading-clinic\">Reading</a> and <a href=\"/locations/wimbledon-clinic\">Wimbledon</a> clinics. If pain travels into a leg, we also assess for <a href=\"/conditions/sciatica-treatment\">sciatica</a>, a <a href=\"/conditions/herniated-disc\">herniated disc</a>, or a <a href=\"/conditions/pinched-nerve\">pinched nerve</a>. New bladder or bowel change, saddle numbness, or rapidly worsening leg weakness needs urgent NHS or emergency assessment first.",
    ],
    symptoms: [
      "Aching or stiffness that worsens with sitting or standing",
      "Pain that travels into the hip, buttock or thigh",
      "Reduced range of motion when bending or rotating",
      "Pain that wakes you at night or on first getting up",
      "Recurrent flare-ups after lifting, sport or desk work",
    ],
    causes: [
      {
        title: "Mechanical strain",
        body: "Injury or overload of muscles, ligaments, discs or vertebral joints. Typically worsens with movement and eases with rest. Prolonged sitting and repetitive loading are frequent contributors.",
      },
      {
        title: "Nerve-related pain",
        body: "When inflammation or disc material compresses spinal nerves, pain travels beyond the back — into the buttock, thigh or calf. Herniated discs, sacroiliac dysfunction and facet irritation fall here.",
      },
      {
        title: "Chronic compensation",
        body: "After 12 weeks, neighbouring muscles change movement patterns and the original source becomes harder to isolate. Whole-body assessment is often more useful here than chasing a single imaging finding.",
      },
    ],
    treatments: [
      {
        href: "/clinical-services/acupuncture",
        label: "Acupuncture",
        why: "Reduces local inflammation, modulates nerve signalling, and interrupts the pain-spasm cycle that maintains many chronic back presentations.",
      },
      {
        href: "/clinical-services/tui-na-massage",
        label: "Tui Na",
        why: "Targets fascia, deep musculature and spinal joints — used to ease restriction and support mobility where mechanical tightness has become entrenched.",
      },
      {
        href: "/clinical-services/bone-setting",
        label: "Bone Setting",
        why: "Where joint restriction contributes to pain, Zheng Gu is used for mobilisation after assessment. Often introduced once acute inflammation has settled.",
      },
    ],
    patterns: [
      {
        title: "Kidney Deficiency 腎虛",
        body: "Chronic aching that worsens with fatigue, often with a cold sensation in the lower back. Common in long-term sufferers and older patients.",
      },
      {
        title: "Qi & Blood Stagnation 氣滯血瘀",
        body: "Sharp, fixed pain worsened by pressure and improved by gentle movement. Typically follows acute injury or prolonged immobility.",
      },
      {
        title: "Cold-Damp Obstruction 寒濕痹阻",
        body: "A heavy, stiff sensation that worsens in cold or damp weather. Often responds to warming needle techniques and moxibustion.",
      },
    ],
    related: ["sciatica-treatment", "herniated-disc", "pinched-nerve"],
    expect: [
      {
        title: "History and examination",
        body: "We map where the pain sits, what sitting, standing or lifting does to it, and how long it has been present. Bring any imaging or GP letters if you have them — useful, not required.",
      },
      {
        title: "Plan, then treatment",
        body: "Your practitioner explains which structures seem relevant and which modalities they propose. Treatment often begins in the same session where it is appropriate.",
      },
      {
        title: "Review the response",
        body: "Change is reviewed visit by visit. We do not prescribe a fixed package in advance, and we will say if medical imaging or a GP review is the safer next step.",
      },
    ],
    safety: {
      intro: "Chinese medicine is not a substitute for urgent NHS or emergency care. Seek medical assessment promptly if you notice:",
      items: [
        "New bladder or bowel change with back or leg pain",
        "Saddle numbness or rapidly worsening leg weakness",
        "Symptoms after a major fall or accident",
        "Unexplained fever, night sweats or unplanned weight loss with back pain",
      ],
    },
    faqs: [
      {
        q: "How many sessions will I need for back pain?",
        a: "Acute presentations often show change within 2–4 sessions. Chronic back pain is typically reviewed over a 6–8 session course. Your practitioner will give a realistic timeline at the first assessment and adjust according to your response — we do not prescribe a fixed package in advance.",
      },
      {
        q: "Is acupuncture useful for back pain?",
        a: "<a href=\"/clinical-services/acupuncture\">Acupuncture</a> is widely used as part of care for musculoskeletal back pain. It is not a replacement for emergency or surgical assessment where those are indicated. Your practitioner will be clear about what is appropriate for your presentation.",
      },
      {
        q: "Do you treat older or post-surgical patients?",
        a: "Yes, where TCM is an appropriate adjunct. We review your medical history, imaging and current medications at the first appointment. If there is clinical uncertainty, we will advise you to speak with your GP or specialist first.",
      },
      {
        q: "Can I use health insurance?",
        a: "We are recognised by AXA Health, Vitality, Aviva and WPA. Coverage varies by policy — confirm with your insurer before the first visit.",
      },
      {
        q: "Do you treat back pain in Reading and Wimbledon?",
        a: "Yes. Appointments are at our <a href=\"/locations/reading-clinic\">Reading clinic</a> midweek and <a href=\"/locations/wimbledon-clinic\">Wimbledon clinic</a> on Saturday. WhatsApp to book — no GP referral needed.",
      },
    ],
  },
  {
    slug: "sciatica-treatment",
    href: "/conditions/sciatica-treatment",
    label: "Sciatica",
    category: "pain-msk",
    status: "live",
    summary:
      "Nerve-root and piriformis-related sciatica — sharp, burning or electric pain down the leg — acupuncture and manual therapy for the symptoms and the surrounding musculoskeletal picture.",
    title: "Sciatica Treatment & Acupuncture | Reading & Wimbledon",
    description:
      "Sciatica treatment with acupuncture in Reading and Wimbledon. Assessment for sciatic nerve pain radiating down the leg. No GP referral needed.",
    ogTitle: "Sciatica Treatment & Acupuncture | Reading & Wimbledon",
    ogDescription:
      "Sciatica treatment at Yin Yang CMC — assessment first, then acupuncture and manual therapy where appropriate. Reading midweek, Wimbledon Saturday.",
    ctaHeading: "Ready to book sciatica treatment?",
    introHeading: "Sciatica, sciatic nerve pain and pain down the leg",
    causesHeading: "What can cause sciatica or pain radiating down the leg",
    treatmentsHeading: "Acupuncture and TCM for sciatica",
    expectHeading: "What a Yin Yang CMC appointment involves",
    heroSecondaryLabel: "Contact the clinic",
    heroSecondaryHref: "/contact",
    heroPrimaryLabel: "WhatsApp the Clinic",
    heroAvailabilityHtml:
      '<a href="/locations/reading-clinic">Reading</a> — Monday, Wednesday &amp; Friday<br /><a href="/locations/wimbledon-clinic">Wimbledon</a> — Saturday',
    whatsappMessage:
      "Hi, I'd like to enquire about a consultation for sciatica. I'm interested in the Reading / Wimbledon clinic. Could you let me know the available appointments?",
    sectionOrder: [
      "hero",
      "expect",
      "treatments",
      "symptoms",
      "safety",
      "clinic",
      "intro",
      "causes",
      "related",
      "patterns",
      "faq",
      "cta",
    ],
    h1: "Acupuncture for Sciatica in Reading & Wimbledon",
    eyebrow: "Conditions · Sciatica",
    lede: "Sciatica is sciatic nerve pain — often felt as lower-back pain radiating down the leg. At our Reading and Wimbledon clinics we assess the likely source, then use acupuncture and traditional Chinese medicine as part of care. Suitability is decided at consultation.",
    image: "/images/sciatica-nerve-illustration.webp",
    imageAlt: "Illustration of sciatic nerve pain with manual therapy and herbal medicine",
    heroImage: "/images/generated/sciatica-patient-hero.webp",
    sectionImage: "/images/acupuncture-needles-back.webp",
    sectionImageAlt: "Close-up of acupuncture needles being placed on a patient's back during treatment",
    intro: [
      "Sciatica describes pain from irritation or compression of the sciatic nerve — running from the lower back through the buttock and down the leg, sometimes to the calf or foot. It is often felt as sciatic nerve pain, or as lower-back pain that travels down the leg. Sitting, standing up, coughing or walking can all stir it.",
      "The useful question is not the search term. It is which structure is irritating the nerve — a <a href=\"/conditions/herniated-disc\">herniated disc</a>, the <a href=\"/conditions/piriformis-syndrome\">piriformis</a>, or a <a href=\"/conditions/pinched-nerve\">pinched</a> / <a href=\"/conditions/trapped-nerve\">trapped nerve</a> picture — and what that means for movement, sleep and work. New bladder or bowel change, saddle numbness, or rapidly worsening leg weakness needs urgent NHS or emergency assessment first.",
      "Where treatment is appropriate, we typically combine <a href=\"/clinical-services/acupuncture\">acupuncture</a> with <a href=\"/clinical-services/tui-na-massage\">Tui Na</a>, and <a href=\"/clinical-services/bone-setting\">bone-setting</a> if joint restriction is part of the picture. The mix is chosen after assessment at our <a href=\"/locations/reading-clinic\">Reading</a> or <a href=\"/locations/wimbledon-clinic\">Wimbledon</a> clinic — not from a fixed sciatica package. Fees and insurer recognition are on <a href=\"/pricing-and-insurance\">Pricing &amp; Insurance</a>.",
    ],
    symptoms: [
      "Sharp, electric or burning pain down one leg",
      "Pain from the lower back through the buttock",
      "Numbness or tingling into the calf or foot",
      "Worse when sitting, standing up, or coughing",
      "Pain that travels past the knee — not only in the hip",
    ],
    causes: [
      {
        title: "Herniated or prolapsed disc",
        body: "The most frequent cause. Disc material presses directly on a nerve root at L4, L5 or S1. Symptoms follow that root's specific path down the leg.",
      },
      {
        title: "Piriformis syndrome",
        body: "The piriformis muscle in the buttock compresses the sciatic nerve directly — without disc involvement. Common in people who sit for long periods or train the hips heavily.",
      },
      {
        title: "Stenosis and spondylolisthesis",
        body: "Narrowing of the spinal canal (more common over 50) or a vertebra slipping forward can both reduce the space the nerve has to exit. Prolonged sitting loads the lumbar spine and piriformis continuously.",
      },
    ],
    treatments: [
      {
        href: "/clinical-services/acupuncture",
        label: "Acupuncture",
        why: "Used to modulate nerve pain signalling and local inflammation along the affected root pathway — including paravertebral and distal points selected after assessment.",
      },
      {
        href: "/clinical-services/tui-na-massage",
        label: "Tui Na",
        why: "Manual mobilisation of the lumbar and gluteal tissues, including work around the piriformis where muscle compression is contributing.",
      },
      {
        href: "/clinical-services/bone-setting",
        label: "Bone Setting",
        why: "Where joint restriction is feeding nerve-root irritation, Zheng Gu may be introduced once acute inflammation has settled.",
      },
      {
        href: "/clinical-services/moxibustion",
        label: "Moxibustion",
        why: "Added for Cold-Damp presentations — heavy, weather-sensitive sciatica that does not respond to needling alone.",
      },
    ],
    patterns: [
      {
        title: "Qi & Blood Stagnation 氣滯血瘀",
        body: "Sharp, fixed, stabbing pain — often after strain. Burning sciatica is treated differently from a heavy, cold presentation.",
      },
      {
        title: "Cold-Damp Obstruction 寒濕痹阻",
        body: "Heavy, dull radiation that worsens in cold or damp weather. Warming methods are often part of the protocol.",
      },
      {
        title: "Kidney Deficiency 腎虛",
        body: "Recurrent, fatiguing lumbar and leg pain in longer-standing cases. Treatment addresses both the nerve path and systemic depletion.",
      },
    ],
    related: ["back-pain", "piriformis-syndrome", "herniated-disc"],
    expect: [
      {
        title: "History and examination",
        body: "We map where the pain starts, where it travels, and what sitting, standing or coughing does to it. Bring any MRI or GP letters if you have them — useful, not required.",
      },
      {
        title: "Plan, then treatment",
        body: "Your practitioner explains which structures seem relevant and which modalities they propose. Treatment often begins in the same session where it is appropriate.",
      },
      {
        title: "Review the response",
        body: "Change is reviewed visit by visit. We do not prescribe a fixed package in advance, and we will say if medical imaging or a GP review is the safer next step.",
      },
    ],
    safety: {
      intro: "Chinese medicine is not a substitute for urgent NHS or emergency care. Seek medical assessment promptly if you notice:",
      items: [
        "New bladder or bowel change with back or leg pain",
        "Saddle numbness or rapidly worsening leg weakness",
        "Symptoms after a major fall or accident",
        "Unexplained fever, night sweats or unplanned weight loss with back pain",
      ],
    },
    faqs: [
      {
        q: "How do I know if it is sciatica or ordinary back pain?",
        a: "Pain that stays in the back or hip is more often muscular or joint-related. Sciatic nerve pain follows the nerve path — frequently past the knee into the calf or foot, sometimes with numbness or tingling. Lower-back pain radiating down the leg is assessed at the first appointment; we do not treat a search term.",
      },
      {
        q: "Can acupuncture help sciatica?",
        a: "Acupuncture is widely used as part of care for sciatica and sciatic nerve pain. It may help with pain signalling and muscle guarding around the affected pathway. It is not a replacement for emergency, surgical or specialist assessment where those are indicated. Suitability is decided at consultation — see our <a href=\"/clinical-services/acupuncture\">acupuncture</a> page.",
      },
      {
        q: "How many sessions might I need?",
        a: "Acute presentations sometimes change within a few visits. Longer-standing or disc-related sciatica is typically reviewed over a longer course. Your practitioner will give a realistic timeline at the first appointment and adjust it according to your response. We do not promise a set number of sessions.",
      },
      {
        q: "Can I have treatment if I already have an MRI?",
        a: "Yes. Bring any imaging you have — it is useful but not required. TCM assessment adds a pattern-based layer imaging does not show, and helps shape the treatment plan.",
      },
      {
        q: "Do you treat sciatica in Reading and Wimbledon?",
        a: "Yes. Sciatica treatment is available at our <a href=\"/locations/reading-clinic\">Reading clinic</a> (Monday, Wednesday and Friday) and <a href=\"/locations/wimbledon-clinic\">Wimbledon clinic</a> (Saturday). Same practitioners at both. WhatsApp to book — no GP referral needed.",
      },
      {
        q: "Can I claim through health insurance?",
        a: "We are recognised by AXA Health, Vitality, Aviva and WPA. Cover depends on your policy and usually relates to eligible acupuncture treatment. Confirm with your insurer before the first visit — details are on our <a href=\"/pricing-and-insurance\">Pricing &amp; Insurance</a> page.",
      },
    ],
  },
  {
    slug: "shoulder-pain",
    href: "/conditions/shoulder-pain",
    label: "Shoulder Pain",
    category: "pain-msk",
    status: "live",
    summary:
      "Rotator cuff strain, impingement and postural shoulder pain — identified at source before treatment, including pain referred from the neck.",
    title: "Shoulder Pain Treatment & Acupuncture | Reading & Wimbledon",
    description:
      "Shoulder pain treatment with acupuncture in Reading and Wimbledon — rotator cuff strain, pain when lifting the arm, and neck-referred ache.",
    ogTitle: "Shoulder Pain Treatment & Acupuncture | Reading & Wimbledon",
    ogDescription:
      "Assessment for rotator cuff, shoulder-blade and neck-referred shoulder pain, then acupuncture and manual therapy where appropriate.",
    ctaHeading: "Ready to book shoulder pain treatment?",
    introHeading: "Shoulder pain, rotator cuff strain and referred pain",
    causesHeading: "Why the shoulder hurts when you lift the arm",
    treatmentsHeading: "Acupuncture and TCM for shoulder pain",
    expectHeading: "What a Yin Yang CMC appointment involves",
    heroSecondaryLabel: "Contact the clinic",
    heroSecondaryHref: "/contact",
    heroPrimaryLabel: "WhatsApp the Clinic",
    heroAvailabilityHtml:
      '<a href="/locations/reading-clinic">Reading</a> — Monday, Wednesday &amp; Friday<br /><a href="/locations/wimbledon-clinic">Wimbledon</a> — Saturday',
    whatsappMessage:
      "Hi, I'd like to enquire about a consultation for shoulder pain. I'm interested in the Reading / Wimbledon clinic. Could you let me know the available appointments?",
    sectionOrder: [
      "hero",
      "expect",
      "treatments",
      "symptoms",
      "clinic",
      "safety",
      "intro",
      "causes",
      "related",
      "patterns",
      "faq",
      "cta",
    ],
    h1: "Acupuncture for Shoulder Pain in Reading & Wimbledon",
    eyebrow: "Conditions · Shoulder Pain",
    lede: "Pain when lifting the arm, aching around the shoulder blade, or stiffness after desk work is rarely “just a tight shoulder”. We assess whether the picture is rotator cuff strain, referred neck pain, or something else — then use acupuncture and manual therapy where that picture fits.",
    image: "/images/shoulder-pain-symptom.webp",
    imageAlt: "Woman holding her shoulder, with the joint highlighted to show pain",
    heroImage: "/images/generated/shoulder-pain-patient-hero.webp",
    sectionImage: "/images/shoulder-pain-symptom.webp",
    sectionImageAlt: "Woman holding her shoulder, with the joint highlighted to show pain",
    intro: [
      "The shoulder is held more by the rotator cuff, tendons and ligaments than by a deep bony socket. That mobility makes it prone to strain, inflammation and restriction from posture, overuse, sport and gym training. Pain when lifting the arm, an ache around the shoulder blade, or stiffness after desk work is a symptom — not yet a diagnosis.",
      "Shoulder pain can also be referred from the <a href=\"/conditions/neck-pain\">neck</a>, or signal <a href=\"/conditions/frozen-shoulder\">frozen shoulder</a> or impingement. A <a href=\"/conditions/trapped-nerve\">trapped nerve</a> in the neck can be felt across the shoulder or under the blade. Identifying the likely source is the first job. Painkillers manage discomfort; they do not address how the joint is moving.",
      "Where treatment is appropriate, we typically combine <a href=\"/clinical-services/acupuncture\">acupuncture</a> with <a href=\"/clinical-services/tui-na-massage\">Tui Na</a>, and <a href=\"/clinical-services/bone-setting\">bone-setting</a> if joint or scapular restriction is part of the picture. Appointments are at <a href=\"/locations/reading-clinic\">Reading</a> or <a href=\"/locations/wimbledon-clinic\">Wimbledon</a>. Suitability is decided at consultation — not from a webpage. See <a href=\"/pricing-and-insurance\">Pricing &amp; Insurance</a> for fees.",
    ],
    symptoms: [
      "Sharp pain when lifting the arm or reaching overhead",
      "Aching across the shoulder, shoulder blade or upper back",
      "Pain that wakes you when lying on that side",
      "Stiff, restricted movement or catching on certain angles",
      "Neck and shoulder pain together",
    ],
    causes: [
      {
        title: "Rotator cuff strain & tendinopathy",
        body: "Strain or irritation of the tendons that stabilise the shoulder — often described as rotator cuff pain. Common after lifting, sport, or repetitive overhead movement.",
      },
      {
        title: "Shoulder tendonitis & tendinopathy",
        body: "Tendon irritation around the shoulder — sometimes called shoulder tendonitis or tendinopathy — can contribute to pain. Symptoms may feel worse when lifting or moving the arm, but shoulder pain has several possible causes. Assessment is needed before treatment recommendations; what we suggest depends on what we find at consultation.",
      },
      {
        title: "Shoulder impingement",
        body: "Tendons catching under the acromion during overhead motion — often worse when reaching or lifting the arm out to the side.",
      },
      {
        title: "Posture and neck referral",
        body: "Desk work and a prolonged forward head load the neck and shoulder girdle. Pain confined to one point is often local; pain that travels with neck stiffness may originate in the cervical spine.",
      },
    ],
    treatments: [
      {
        href: "/clinical-services/acupuncture",
        label: "Acupuncture",
        why: "Used to reduce local inflammation and muscle guarding around the rotator cuff and scapular stabilisers, and to address neck-referred patterns where relevant.",
      },
      {
        href: "/clinical-services/tui-na-massage",
        label: "Tui Na",
        why: "Mobilises the glenohumeral joint and surrounding soft tissue — used to support range of motion where postural loading and overuse have restricted movement.",
      },
      {
        href: "/clinical-services/bone-setting",
        label: "Bone Setting",
        why: "For joint restriction and scapular or cervical contribution that manual mobilisation alone has not eased.",
      },
      {
        href: "/clinical-services/cupping",
        label: "Cupping",
        why: "Often combined for upper-back and shoulder-girdle stasis — particularly postural tightness across the scapula.",
      },
    ],
    patterns: [
      {
        title: "Wind-Cold-Damp Bi 風寒濕痺",
        body: "Aching, weather-sensitive shoulder pain with stiffness — common after exposure to cold or prolonged immobility.",
      },
      {
        title: "Qi & Blood Stagnation 氣滯血瘀",
        body: "Fixed, stabbing pain after strain or overuse. Often worse at a specific angle of movement.",
      },
      {
        title: "Liver-Kidney Deficiency 肝腎不足",
        body: "Recurrent, weaker shoulder with slower recovery — more common in longer-standing or age-related presentations.",
      },
    ],
    related: ["frozen-shoulder", "neck-pain", "trapped-nerve"],
    expect: [
      {
        title: "Where it hurts, what you cannot do",
        body: "We look at lifting, reaching, lying on that side, and whether the neck or shoulder blade is involved. Bring any scan or physio letters if you have them.",
      },
      {
        title: "Plan, then treatment",
        body: "Your practitioner explains whether the picture looks more like rotator cuff strain, impingement, referred neck pain or <a href=\"/conditions/frozen-shoulder\">frozen shoulder</a>, and which modalities they propose.",
      },
      {
        title: "Review the response",
        body: "Change is reviewed visit by visit. We do not prescribe a fixed package, and we will say if a GP or imaging review is the safer next step.",
      },
    ],
    safety: {
      intro: "Chinese medicine is not a substitute for urgent NHS or emergency care. Seek medical assessment promptly if you notice:",
      items: [
        "Sudden inability to lift the arm after a fall or wrenching injury",
        "A visibly deformed joint, or pain with fever after recent surgery",
        "New arm weakness, or numbness spreading into the hand",
        "Unexplained swelling, redness or night pain that is getting rapidly worse",
      ],
    },
    faqs: [
      {
        q: "Is this frozen shoulder or a rotator cuff problem?",
        a: "With rotator cuff pain, someone else can usually still lift your arm (passive movement is often preserved). With <a href=\"/conditions/frozen-shoulder\">frozen shoulder</a>, the joint is restricted in both active and passive movement. We distinguish this at consultation — the treatment plan is not the same.",
      },
      {
        q: "Can acupuncture help shoulder pain?",
        a: "Acupuncture is widely used as part of care for musculoskeletal shoulder pain, including rotator cuff strain and postural loading. It may help with pain signalling and muscle guarding. It is not a replacement for orthopaedic assessment where that is indicated. Suitability is decided at consultation — see our <a href=\"/clinical-services/acupuncture\">acupuncture</a> page.",
      },
      {
        q: "The pain is more in my shoulder blade — does that still count?",
        a: "Yes, that is a common presentation. Pain under or around the shoulder blade may be local muscle and scapular load, or referred from the <a href=\"/conditions/neck-pain\">neck</a>. We assess both rather than treating the sore spot in isolation.",
      },
      {
        q: "Do you treat neck and shoulder pain together?",
        a: "Yes. If the pain travels with neck stiffness, or a <a href=\"/conditions/trapped-nerve\">trapped nerve</a> picture is possible, we assess the cervical spine as a source rather than treating the shoulder alone.",
      },
      {
        q: "Can I continue going to the gym?",
        a: "Often yes, with modification. Your practitioner will advise which movements to pause and which to keep so the tendon or joint can settle without full deconditioning.",
      },
      {
        q: "Do you treat shoulder pain in Reading and Wimbledon?",
        a: "Yes. Appointments are at our <a href=\"/locations/reading-clinic\">Reading clinic</a> midweek and <a href=\"/locations/wimbledon-clinic\">Wimbledon clinic</a> on Saturday. WhatsApp to book — no GP referral needed. Fees are on <a href=\"/pricing-and-insurance\">Pricing &amp; Insurance</a>.",
      },
    ],
  },
  {
    slug: "frozen-shoulder",
    href: "/conditions/frozen-shoulder",
    label: "Frozen Shoulder",
    category: "pain-msk",
    status: "live",
    summary:
      "Adhesive capsulitis — progressive pain then stiffness. Acupuncture, Tui Na and bone-setting for frozen shoulder symptoms across a course that can otherwise last many months.",
    title: "Frozen Shoulder Treatment & Acupuncture | Reading & Wimbledon",
    description:
      "Frozen shoulder (adhesive capsulitis) care with acupuncture in Reading and Wimbledon. Pain and restricted movement after assessment — no set timeline.",
    ogTitle: "Frozen Shoulder Treatment & Acupuncture | Reading & Wimbledon",
    ogDescription:
      "Assessment-led frozen shoulder treatment with acupuncture and manual therapy. Reading midweek, Wimbledon Saturday.",
    ctaHeading: "Ready to book frozen shoulder treatment?",
    introHeading: "What frozen shoulder feels like",
    causesHeading: "Why the shoulder can lock",
    treatmentsHeading: "Acupuncture and manual therapy for frozen shoulder",
    expectHeading: "What a Yin Yang CMC appointment involves",
    heroSecondaryLabel: "Contact the clinic",
    heroSecondaryHref: "/contact",
    heroPrimaryLabel: "WhatsApp the Clinic",
    heroAvailabilityHtml:
      '<a href="/locations/reading-clinic">Reading</a> — Monday, Wednesday &amp; Friday<br /><a href="/locations/wimbledon-clinic">Wimbledon</a> — Saturday',
    whatsappMessage:
      "Hi, I'd like to enquire about a consultation for frozen shoulder. I'm interested in the Reading / Wimbledon clinic. Could you let me know the available appointments?",
    sectionOrder: [
      "hero",
      "expect",
      "treatments",
      "symptoms",
      "clinic",
      "safety",
      "intro",
      "causes",
      "related",
      "patterns",
      "faq",
      "cta",
    ],
    h1: "Acupuncture for Frozen Shoulder in Reading & Wimbledon",
    eyebrow: "Conditions · Frozen Shoulder",
    lede: "Frozen shoulder treatment starts with the stage you are in — painful freezing, a locked joint, or slow thawing. We use acupuncture and manual therapy to support pain and usable range. There is no guaranteed timeline.",
    image: "/images/shoulder-pain-holding-shoulder.webp",
    imageAlt: "Woman holding her left shoulder, with a highlight showing pain",
    heroImage: "/images/generated/frozen-shoulder-patient-hero.webp",
    sectionImage: "/images/shoulder-pain-holding-shoulder.webp",
    sectionImageAlt: "Woman holding her left shoulder, with a highlight showing pain",
    intro: [
      "Frozen shoulder — adhesive capsulitis — occurs when the joint capsule becomes inflamed, then thickens and tightens. Range of motion is restricted in all directions. Most people cannot lift the arm, reach behind the back, or dress without pain. Night pain that disrupts sleep is a hallmark. It is a different picture from ordinary <a href=\"/conditions/shoulder-pain\">shoulder pain</a> or stiffness that mainly sits in the <a href=\"/conditions/neck-pain\">neck</a>.",
      "Without treatment, the natural course is often long — commonly described in months to years, with residual stiffness in some people. Painkillers manage symptoms; they do not restore range of motion on their own. Early care is aimed at supporting usable range sooner, not at promising a shorter course.",
      "Where treatment is appropriate, we typically combine <a href=\"/clinical-services/acupuncture\">acupuncture</a> with <a href=\"/clinical-services/tui-na-massage\">Tui Na</a>, and <a href=\"/clinical-services/bone-setting\">bone-setting</a> once inflammation has settled enough for mobilisation. Appointments are at <a href=\"/locations/reading-clinic\">Reading</a> or <a href=\"/locations/wimbledon-clinic\">Wimbledon</a>. Suitability is decided at consultation. See <a href=\"/pricing-and-insurance\">Pricing &amp; Insurance</a> for fees.",
    ],
    symptoms: [
      "Pain when lifting the arm",
      "Cannot reach behind the back or do up a bra / belt",
      "Pain dressing, washing hair or reaching a seatbelt",
      "Progressive loss of both active and passive movement",
      "Night pain that wakes you when you roll onto that side",
    ],
    causes: [
      {
        title: "Idiopathic onset",
        body: "Many cases develop without an obvious trigger. Most common in women aged 40–60. Hormonal change may contribute to capsular inflammation.",
      },
      {
        title: "After injury or immobilisation",
        body: "Prolonged rest after a shoulder injury or surgery allows adhesions to form in the capsule.",
      },
      {
        title: "Systemic risk",
        body: "Diabetes is a recognised risk factor for frozen shoulder. Thyroid disorders are also associated with a higher risk. We take this history at consultation; it does not on its own decide the treatment plan.",
      },
    ],
    treatments: [
      {
        href: "/clinical-services/acupuncture",
        label: "Acupuncture",
        why: "Used in the freezing stage to reduce inflammatory pain and slow further restriction — before the joint fully locks.",
      },
      {
        href: "/clinical-services/tui-na-massage",
        label: "Tui Na",
        why: "In the frozen and thawing stages, manual work focuses on restricted soft tissue and supporting range that needling alone cannot open.",
      },
      {
        href: "/clinical-services/bone-setting",
        label: "Bone Setting",
        why: "Joint mobilisation for the locked capsule, introduced when inflammation has settled enough for structural work.",
      },
      {
        href: "/clinical-services/moxibustion",
        label: "Moxibustion",
        why: "Warming therapy for Cold-Damp and Wind-Cold presentations — stiffness that worsens in cold weather or after exposure.",
      },
    ],
    patterns: [
      {
        title: "Wind-Cold Invasion 風寒侵襲",
        body: "Sudden onset of painful restriction after cold exposure. Early-stage presentations often sit here.",
      },
      {
        title: "Qi & Blood Stagnation 氣滯血瘀",
        body: "Fixed, stabbing pain with marked restriction — typical of the frozen stage.",
      },
      {
        title: "Qi & Blood Deficiency 氣血虧虛",
        body: "Longer-standing stiffness with weaker recovery, more common later in the course or in depleted patients.",
      },
    ],
    related: ["shoulder-pain", "neck-pain", "sports-injuries"],
    expect: [
      {
        title: "Which stage, which restriction",
        body: "We look at pain versus stiffness, active and passive range, and what dressing, reaching and sleep currently look like. Bring any scan or specialist letters if you have them.",
      },
      {
        title: "Plan, then treatment",
        body: "Your practitioner explains whether this looks like frozen shoulder rather than rotator cuff pain, and which modalities they propose for the stage you are in.",
      },
      {
        title: "Review the response",
        body: "Frozen shoulder is reviewed over a course, not a single visit. We do not prescribe a fixed package, and we will say if a GP or orthopaedic review is the safer next step.",
      },
    ],
    safety: {
      intro: "Chinese medicine is not a substitute for urgent NHS or emergency care. Seek medical assessment promptly if you notice:",
      items: [
        "Sudden inability to move the arm after a fall or dislocation",
        "A hot, swollen joint, or pain with fever",
        "New arm weakness or numbness spreading into the hand",
        "Unexplained weight loss or night pain that is getting rapidly worse",
      ],
    },
    faqs: [
      {
        q: "Which stage of frozen shoulder am I in?",
        a: "Freezing: pain rising, movement shrinking week by week. Frozen: pain may plateau but stiffness is worst. Thawing: movement gradually returns. Treatment emphasis changes at each stage — we assess this at the first visit rather than assigning a stage from a webpage.",
      },
      {
        q: "How is frozen shoulder different from rotator cuff injury?",
        a: "A rotator cuff injury usually still allows passive movement — someone else can lift your arm. With frozen shoulder the joint is locked both ways. That distinction changes the treatment plan. See also our <a href=\"/conditions/shoulder-pain\">shoulder pain</a> page.",
      },
      {
        q: "What does frozen shoulder treatment involve here?",
        a: "Usually a combination of <a href=\"/clinical-services/acupuncture\">acupuncture</a> with <a href=\"/clinical-services/tui-na-massage\">Tui Na</a>, and bone-setting if joint mobilisation is appropriate for the stage. The mix is chosen after assessment. We do not claim to shorten every case to a set number of weeks.",
      },
      {
        q: "Will it resolve on its own?",
        a: "It can, but the natural course is often long, and residual stiffness is common. Treatment is aimed at supporting usable range sooner across that course — not at guaranteeing a shorter recovery.",
      },
      {
        q: "Do you treat frozen shoulder in Reading and Wimbledon?",
        a: "Yes. Appointments are at our <a href=\"/locations/reading-clinic\">Reading clinic</a> midweek and <a href=\"/locations/wimbledon-clinic\">Wimbledon clinic</a> on Saturday. WhatsApp to book — no GP referral needed.",
      },
      {
        q: "Can I claim through health insurance?",
        a: "We are recognised by AXA Health, Vitality, Aviva and WPA. Cover depends on your policy and usually relates to eligible acupuncture. Check your policy terms before booking — details are on <a href=\"/pricing-and-insurance\">Pricing &amp; Insurance</a>.",
      },
    ],
  },
  {
    slug: "sports-injuries",
    href: "/conditions/sports-injuries",
    label: "Sports Injuries",
    category: "pain-msk",
    status: "live",
    summary:
      "Acute strain, overuse and lingering sports injuries — acupuncture, Tui Na and bone-setting as an adjunct to training, not a replacement for sports medicine.",
    title: "Sports Injury Treatment & Acupuncture | Reading & Wimbledon",
    description:
      "Sports injury treatment with acupuncture in Reading and Wimbledon. Strains, overuse injuries and stalled recovery after assessment.",
    ogTitle: "Sports Injury Treatment & Acupuncture | Reading & Wimbledon",
    ogDescription:
      "Acupuncture and manual therapy for sports strains, overuse injuries and stalled recovery at our Reading and Wimbledon clinics.",
    introHeading: "Sports injuries, overuse and stalled recovery",
    treatmentsHeading: "Acupuncture, Tui Na and bone-setting for sports injuries",
    ctaHeading: "Ready to book sports injury treatment?",
    h1: "Acupuncture for Sports Injuries in Reading & Wimbledon",
    eyebrow: "Conditions · Sports Injuries",
    lede: "You trained. Now the knee catches on the stairs, the shoulder pulls overhead, or the lower back seizes after a run. We use acupuncture and manual therapy for the tissue and the compensation pattern — not only the sore spot.",
    image: "/images/knee-assessment-clinic.webp",
    imageAlt: "Practitioner examining a patient's knee in clinic",
    heroImage: "/images/sports-injuries-hero.webp",
    sectionImage: "/images/acupuncture-needles-back.webp",
    sectionImageAlt: "Close-up of acupuncture needles being placed on a patient's back during treatment",
    intro: [
      "Sports injuries range from acute trauma to cumulative overuse. Rest and anti-inflammatories often settle symptoms without restoring full biomechanical function. That gap is where TCM is used as a parallel clinical system — tissue care, pain modulation and joint mobility — not as a replacement for sports medicine or imaging where those are needed.",
      "Plans are built around your sport, training volume and recovery window. We typically combine <a href=\"/clinical-services/acupuncture\">acupuncture</a> with <a href=\"/clinical-services/tui-na-massage\">Tui Na</a>, and <a href=\"/clinical-services/bone-setting\">bone-setting</a> if joint restriction is feeding compensation. Appointments are at <a href=\"/locations/reading-clinic\">Reading</a> or <a href=\"/locations/wimbledon-clinic\">Wimbledon</a>. <a href=\"/conditions/knee-pain\">Knee pain</a>, <a href=\"/conditions/hip-pain\">hip pain</a>, <a href=\"/conditions/tennis-elbow\">tennis elbow</a> and <a href=\"/conditions/back-pain\">lower-back pain</a> are assessed as part of the same chain, not as isolated sore spots.",
    ],
    symptoms: [
      "Muscle strain or ligament sprain that is slow to settle",
      "Knee, shoulder or Achilles pain that returns when you train",
      "Lower-back seizure after running, lifting or racquet sport",
      "Tendinopathy or plantar fasciitis that has plateaued with rest",
      "An injury unresolved for more than three months",
    ],
    causes: [
      {
        title: "Acute strain and sprain",
        body: "Grades I–III ankle, wrist, knee and muscle tears. Without targeted repair, partial tears can scar in poorly aligned collagen patterns.",
      },
      {
        title: "Overuse",
        body: "Patellofemoral pain, IT-band friction, rotator cuff impingement, Achilles tendinopathy and plantar fasciitis. These escalate if load is not addressed.",
      },
      {
        title: "Lumbar and kinetic-chain failure",
        body: "Lumbar strain, disc compression and sacroiliac dysfunction are a common reason active adults abandon training. The injury site is not always the driver.",
      },
    ],
    treatments: [
      {
        href: "/clinical-services/acupuncture",
        label: "Acupuncture",
        why: "Used to modulate inflammation and pain signalling at the injury site, and to support range of motion alongside load management.",
      },
      {
        href: "/clinical-services/tui-na-massage",
        label: "Tui Na",
        why: "Graded manual pressure to ease myofascial restriction and support tissue glide around the injured structure.",
      },
      {
        href: "/clinical-services/bone-setting",
        label: "Bone Setting",
        why: "Used for joint restriction that persists after injury and feeds compensation through the rest of the chain.",
      },
    ],
    patterns: [
      {
        title: "Qi & Blood Stagnation 氣滯血瘀",
        body: "Acute, local, well-defined pain after trauma or a specific incident. Treatment starts with settling stasis and swelling.",
      },
      {
        title: "Wind-Damp Bi 風濕痹",
        body: "Recurrent, weather-sensitive joint pain in athletes who train through incomplete recovery.",
      },
      {
        title: "Liver-Kidney Deficiency 肝腎不足",
        body: "Repeated niggles, slower tissue repair, and injuries that return at the same load — more common in longer-standing overuse.",
      },
    ],
    related: ["knee-pain", "tennis-elbow", "plantar-fasciitis"],
    expect: [
      {
        title: "How the injury happened, what you still do",
        body: "We take the training and recovery history — what you can still load, what you have already tried, and what you need to return to. Bring any scan or physio letters if you have them.",
      },
      {
        title: "Plan, then treatment",
        body: "Your practitioner explains which tissues seem relevant and which modalities they propose. Treatment often begins in the same session where it is appropriate.",
      },
      {
        title: "Review the response",
        body: "Change is reviewed against your training week. We do not prescribe a fixed package, and we will say if sports-medicine, imaging or a GP review is the safer next step.",
      },
    ],
    safety: {
      intro: "Chinese medicine is not a substitute for urgent NHS, A&E or sports-medicine assessment. Seek medical attention promptly if you notice:",
      items: [
        "Inability to weight-bear after a fall, twist or impact",
        "A joint that looks deformed, or swelling that is rapidly worsening",
        "A suspected fracture, dislocation, or complete tendon rupture",
        "Head injury, loss of consciousness, or unexplained fever with the injury",
      ],
    },
    faqs: [
      {
        q: "Can I still train while having treatment?",
        a: "In most cases, yes — with the load adjusted. Treatment is timed around your training week so sessions support recovery rather than interrupting it. Your practitioner will be specific about what to pause.",
      },
      {
        q: "What if physiotherapy has already plateaued?",
        a: "Physio and TCM address different layers. Where strengthening has stalled, acupuncture is often used alongside load management as part of ongoing care. Many patients use both.",
      },
      {
        q: "Do I need a GP or physio referral?",
        a: "No. Book directly at Reading or Wimbledon. Bring any MRI, ultrasound or X-ray reports if you have them — useful, not required.",
      },
      {
        q: "Do you only treat competitive athletes?",
        a: "No. Club tennis, parkrun, gym training and weekend cycling are the majority of the caseload. The clinical approach is the same: assessment first, then a targeted treatment plan.",
      },
      {
        q: "Do you treat sports injuries in Reading and Wimbledon?",
        a: "Yes. Book at our <a href=\"/locations/reading-clinic\">Reading clinic</a> midweek or <a href=\"/locations/wimbledon-clinic\">Wimbledon clinic</a> on Saturday. Bring any MRI, ultrasound or X-ray reports if you have them.",
      },
    ],
  },

  // ── Pain & MSK — additional live pages ───────────────
  {
    slug: "pinched-nerve",
    href: "/conditions/pinched-nerve",
    label: "Pinched Nerve",
    category: "pain-msk",
    status: "live",
    summary:
      "Nerve compression in the neck, shoulder or back — pain, tingling or numbness assessed before acupuncture and manual therapy.",
    title: "Pinched Nerve Treatment & Acupuncture | Reading & Wimbledon",
    description:
      "Pinched nerve treatment with acupuncture in Reading and Wimbledon. Assessment for compression in the neck, shoulder or back — suitability decided at consultation.",
    ogTitle: "Pinched Nerve Treatment & Acupuncture | Reading & Wimbledon",
    ogDescription:
      "Assessment and acupuncture-led care for pinched nerve symptoms — pain, tingling or numbness from nerve compression. Suitability decided at consultation.",
    ctaHeading: "Ready to book pinched nerve treatment?",
    introHeading: "Pinched nerve pain, tingling and compression",
    treatmentsHeading: "Acupuncture and TCM for a pinched nerve",
    h1: "Acupuncture for Pinched Nerve in Reading & Wimbledon",
    eyebrow: "Conditions · Pinched Nerve",
    lede: "A pinched nerve is a compression problem — pain, tingling or numbness where a nerve is under pressure. We assess the likely site, then use acupuncture and manual therapy as part of care. Suitability is decided at consultation.",
    image: "/images/sciatica-nerve-illustration.webp",
    imageAlt: "Illustration of sciatic nerve pain with manual therapy and herbal medicine",
    heroImage: "/images/generated/pinched-nerve-patient-hero.webp",
    sectionImage: "/images/acupuncture-needles-back.webp",
    sectionImageAlt: "Close-up of acupuncture needles being placed on a patient's back during treatment",
    intro: [
      "“Pinched nerve” describes irritation or compression of a nerve — often in the neck, shoulder girdle or lower back. The nerve itself is not always the only structure involved: nearby joints, discs and tight muscle can all reduce the space a nerve has to move.",
      "Typical symptoms include pain, tingling, numbness or a radiating ache along the nerve’s path. This page cannot tell you which structure is responsible. In the UK the same picture is often called a <a href=\"/conditions/trapped-nerve\">trapped nerve</a>; we keep that page for location-led questions (neck, shoulder or back) and this one for compression and treatment options. Disc-related back pain is covered separately under <a href=\"/conditions/herniated-disc\">herniated disc</a>.",
      "Where treatment is appropriate, we typically combine <a href=\"/clinical-services/acupuncture\">acupuncture</a> with <a href=\"/clinical-services/tui-na-massage\">Tui Na</a>, and bone-setting if joint restriction is part of the picture. The mix is chosen after assessment at our <a href=\"/locations/reading-clinic\">Reading</a> or <a href=\"/locations/wimbledon-clinic\">Wimbledon</a> clinic — not from a fixed package.",
    ],
    symptoms: [
      "Sharp, burning or aching pain in the neck, shoulder or back",
      "Tingling or pins-and-needles into an arm or leg",
      "Numbness or a “dead” patch of skin",
      "Pain that travels away from the spine rather than staying in one spot",
      "Symptoms that change with turning, reaching, sitting or coughing",
    ],
    causes: [
      {
        title: "Reduced space around the nerve",
        body: "A disc bulge, joint inflammation or bony narrowing can reduce the space a nerve root has as it leaves the spine. This is mechanical compression — imaging can help, but many people arrive with symptoms and no recent scan.",
      },
      {
        title: "Inflammation and guarding",
        body: "Swelling and muscle spasm around an irritated segment can aggravate nerve pain even when the original strain was modest. The pain-spasm cycle is a common reason symptoms linger after the first few days.",
      },
      {
        title: "Posture and repeated loading",
        body: "Desk work, driving and overhead tasks load the neck and shoulder. Repeated bending and sitting load the lower back. These are contributing factors, not a diagnosis on their own.",
      },
    ],
    treatments: [
      {
        href: "/clinical-services/acupuncture",
        label: "Acupuncture",
        why: "Used to modulate local inflammation and nerve-pain signalling. Point selection follows the affected pathway after assessment — it is not a standard “pinched nerve protocol”.",
      },
      {
        href: "/clinical-services/tui-na-massage",
        label: "Tui Na",
        why: "Manual work on the muscles and fascia around the irritated segment, aimed at easing guarding that may be adding to compression.",
      },
      {
        href: "/clinical-services/bone-setting",
        label: "Bone Setting",
        why: "Where joint restriction is contributing, Zheng Gu may be introduced once acute irritation has settled enough for mobilisation.",
      },
    ],
    patterns: [
      {
        title: "Qi & Blood Stagnation 氣滯血瘀",
        body: "Sharp, fixed, radiating pain after strain. Often worse in a particular position and easier with gentle movement.",
      },
      {
        title: "Wind-Damp Bi 風濕痹",
        body: "Aching, weather-sensitive nerve pain with heaviness or stiffness — common when symptoms linger through cold or damp spells.",
      },
      {
        title: "Kidney Deficiency 腎虛",
        body: "Recurrent, fatiguing spinal and nerve symptoms in longer-standing cases. Treatment addresses both the local pathway and systemic depletion.",
      },
    ],
    related: ["trapped-nerve", "carpal-tunnel-syndrome", "neck-pain"],
    expect: [
      {
        title: "Compression picture",
        body: "We take a history of where the pain started, where it travels, and what eases or aggravates it. Bring any MRI or GP letters if you have them — useful, not required.",
      },
      {
        title: "Plan, then treatment",
        body: "Your practitioner explains which structures seem relevant and which modalities they propose. Treatment often begins in the same session where it is appropriate.",
      },
      {
        title: "Review the response",
        body: "Change is reviewed visit by visit. We do not prescribe a fixed package in advance, and we will say if medical imaging or a GP review is the safer next step.",
      },
    ],
    safety: {
      intro: "Chinese medicine is not a substitute for urgent NHS or emergency care. Seek medical assessment promptly if you notice:",
      items: [
        "Rapidly worsening weakness in an arm or leg",
        "Significant new numbness, especially in the saddle area",
        "New bladder or bowel change with back or nerve pain",
        "Symptoms after a major fall or accident",
      ],
    },
    faqs: [
      {
        q: "Can acupuncture help a pinched nerve?",
        a: "Acupuncture is widely used as part of care for nerve-related musculoskeletal pain. It may help with pain signalling and muscle guarding. It does not “un-pinch” a nerve in a mechanical sense, and it is not a replacement for medical or surgical assessment where those are indicated. Suitability is assessed at consultation.",
      },
      {
        q: "What is the difference between a pinched nerve and a trapped nerve?",
        a: "In clinic they often describe a similar problem. “Pinched nerve” emphasises compression; “trapped nerve” is the phrase many UK patients use for radiating neck, shoulder or back symptoms. We wrote a separate page for <a href=\"/conditions/trapped-nerve\">trapped nerve treatment</a> because the search questions are different — location and next steps, rather than the compression mechanism.",
      },
      {
        q: "Can a pinched nerve in the neck cause shoulder or arm pain?",
        a: "Yes — cervical nerve irritation can be felt in the shoulder, arm or hand. That does not mean every shoulder ache is a pinched nerve. We assess the neck and shoulder together; see also <a href=\"/conditions/neck-pain\">neck pain</a> and <a href=\"/conditions/shoulder-pain\">shoulder pain</a>.",
      },
      {
        q: "How is pinched nerve pain treated here?",
        a: "Usually a combination of <a href=\"/clinical-services/acupuncture\">acupuncture</a> with <a href=\"/clinical-services/tui-na-massage\">Tui Na</a>, and bone-setting if joint restriction is part of the picture. The mix is chosen after assessment, not from a menu.",
      },
      {
        q: "How many sessions might I need?",
        a: "Acute presentations sometimes change within a few visits. Longer-standing nerve pain is typically reviewed over a longer course. Your practitioner will give a realistic timeline at the first appointment and adjust it according to your response.",
      },
      {
        q: "When should I see a doctor instead?",
        a: "After major trauma, or if weakness, numbness or bladder/bowel symptoms are new or worsening, contact NHS services first. We can still be part of later care once serious causes have been considered.",
      },
      {
        q: "Can I claim through health insurance?",
        a: "We are recognised by AXA Health, Vitality, Aviva and WPA. Cover depends on your policy and usually relates to eligible acupuncture treatment. Confirm with your insurer before the first visit — details are on our <a href=\"/pricing-and-insurance\">Pricing &amp; Insurance</a> page.",
      },
    ],
  },
  {
    slug: "trapped-nerve",
    href: "/conditions/trapped-nerve",
    label: "Trapped Nerve",
    category: "pain-msk",
    status: "live",
    summary:
      "UK term for radiating neck, shoulder or back nerve pain — assessment first, then acupuncture and Tui Na if appropriate.",
    title: "Trapped Nerve Treatment & Acupuncture | Neck, Shoulder or Back",
    description:
      "Acupuncture for a trapped nerve in the neck, shoulder or back. Reading and Wimbledon clinics. Assessment first, then treatment only where appropriate.",
    ogTitle: "Trapped Nerve Treatment & Acupuncture | Neck, Shoulder or Back",
    ogDescription:
      "If pain shoots from the neck, shoulder or back into an arm or leg, the next step is assessment. Book at Reading or Wimbledon — no GP referral needed.",
    ctaHeading: "Ready to book for a trapped nerve?",
    introHeading: "A trapped nerve in the neck, shoulder or back",
    treatmentsHeading: "Acupuncture, Tui Na and cupping for a trapped nerve",
    h1: "Acupuncture for a Trapped Nerve in Reading & Wimbledon",
    eyebrow: "Conditions · Trapped Nerve",
    lede: "In the UK, “trapped nerve” usually means pain that shoots from the neck, shoulder or back into the arm or leg. The next step is assessment — then acupuncture and manual therapy only where they are appropriate.",
    image: "/images/shoulder-pain-symptom.webp",
    imageAlt: "Woman holding her shoulder, with the joint highlighted to show pain",
    heroImage: "/images/generated/trapped-nerve-patient-hero.webp",
    sectionImage: "/images/acupuncture-needles-back.webp",
    sectionImageAlt: "Close-up of acupuncture needles being placed on a patient's back during treatment",
    intro: [
      "People search for a trapped nerve in the neck, a trapped nerve in the shoulder, or a trapped nerve in the back because that is how the pain presents in daily life — turning to check a blind spot, reaching for a seatbelt, sitting at a desk, or getting out of a chair. The useful clinical question is not the label. It is where the symptoms start, where they travel, and what they do to sleep, work and movement.",
      "If you want the compression-mechanism explanation, that sits on our <a href=\"/conditions/pinched-nerve\">pinched nerve</a> page. Here the focus is what to do next: a structured consultation at <a href=\"/locations/reading-clinic\">Reading</a> or <a href=\"/locations/wimbledon-clinic\">Wimbledon</a>, then <a href=\"/clinical-services/acupuncture\">acupuncture</a> and <a href=\"/clinical-services/tui-na-massage\">Tui Na</a> only where they are appropriate. Neck-and-shoulder presentations are often assessed alongside <a href=\"/conditions/neck-pain\">neck pain</a> and <a href=\"/conditions/shoulder-pain\">shoulder pain</a>.",
    ],
    symptoms: [
      "Pain starting in the neck and travelling into the shoulder, arm or hand",
      "A sharp or electric ache under the shoulder blade",
      "Back pain that shoots into the buttock or down the leg",
      "Worse when turning the head, reaching, sitting or lying on that side",
      "Sleep broken by a shooting or burning sensation",
    ],
    causes: [
      {
        title: "Neck-driven arm symptoms",
        body: "Desk posture, driving and looking down at a phone load the cervical spine. Pain felt in the shoulder or arm is sometimes coming from the neck — which is why treating the sore spot alone can disappoint.",
      },
      {
        title: "Shoulder-girdle tightness",
        body: "The muscles around the scapula and upper ribs can irritate nearby nerves and refer pain into the arm. This is not the same problem as a <a href=\"/conditions/frozen-shoulder\">frozen shoulder</a>, where the joint itself is restricted both ways.",
      },
      {
        title: "Lower-back radiation",
        body: "When symptoms travel from the back into a leg, we assess whether this is muscular, joint-related, disc-related or true <a href=\"/conditions/sciatica-treatment\">sciatica</a>. The next step is the same: history and examination, not a label from a search.",
      },
    ],
    treatments: [
      {
        href: "/clinical-services/acupuncture",
        label: "Acupuncture",
        why: "Selected after mapping where symptoms start and travel. Used to ease pain signalling and muscle guarding along that path — not as a one-size needle recipe.",
      },
      {
        href: "/clinical-services/tui-na-massage",
        label: "Tui Na",
        why: "Hands-on work for the neck, shoulder girdle or lumbar tissues that are holding the pattern, especially where desk or driving load has become entrenched.",
      },
      {
        href: "/clinical-services/cupping",
        label: "Cupping",
        why: "Often added for upper-back and shoulder-girdle tightness when muscular stasis is part of a neck or shoulder presentation.",
      },
    ],
    patterns: [
      {
        title: "Wind-Cold-Damp Bi 風寒濕痺",
        body: "Stiff, weather-sensitive radiating pain — common after cold exposure or long immobility at a desk.",
      },
      {
        title: "Qi Stagnation 氣滯",
        body: "Symptoms that build through the working day and ease a little with movement. Often a neck-and-shoulder desk pattern.",
      },
      {
        title: "Blood Stasis 血瘀",
        body: "A more fixed, stabbing path of pain after a specific incident — reaching, lifting or a sudden turn.",
      },
    ],
    related: ["pinched-nerve", "carpal-tunnel-syndrome", "shoulder-pain"],
    expect: [
      {
        title: "Map the path",
        body: "We ask where it started, how far it travels, and which daily tasks set it off — driving, desk work, reaching or sleep. That map matters more than the search term.",
      },
      {
        title: "Explain the next step",
        body: "You will be told whether acupuncture, Tui Na or cupping is proposed, and why. If the picture needs a GP, imaging or urgent care first, we will say so.",
      },
      {
        title: "Treat and review",
        body: "Where treatment starts the same day, we review the response at the following visit rather than selling a long package up front.",
      },
    ],
    safety: {
      intro: "A webpage cannot triage a trapped nerve. Contact NHS services first if you have:",
      items: [
        "Rapidly worsening arm or leg weakness",
        "New loss of sensation, or symptoms after a significant injury",
        "Severe unexplained pain with fever, or pain that is getting worse very quickly",
        "Back or leg symptoms with bladder or bowel change",
      ],
    },
    faqs: [
      {
        q: "I think I have a trapped nerve in my neck — what should I do next?",
        a: "Book an assessment rather than stretching aggressively into the painful direction. If you have rapidly worsening weakness, trauma, or other concerning symptoms, speak to NHS services first. Otherwise we can see you at Reading or Wimbledon without a GP referral.",
      },
      {
        q: "Is a trapped nerve the same as a pinched nerve?",
        a: "Often people mean the same thing. We keep two pages because the questions differ: this one is about radiating symptoms in the neck, shoulder or back and what to do next; <a href=\"/conditions/pinched-nerve\">pinched nerve treatment</a> explains compression, tingling and numbness in more mechanistic terms.",
      },
      {
        q: "Can a trapped nerve in the shoulder cause arm or hand tingling?",
        a: "It can — though the source is sometimes the neck rather than the shoulder joint. That is why we examine both. Tingling alone is not a diagnosis.",
      },
      {
        q: "Can acupuncture help a trapped nerve?",
        a: "It may help with pain and muscle tightness around the affected pathway. It will not suit every presentation, and it does not replace medical care where nerve injury or serious spinal pathology is suspected. Your practitioner will be clear after assessment.",
      },
      {
        q: "Is the treatment painful?",
        a: "Acupuncture needles are much finer than an injection needle. Most people feel a dull ache or warmth rather than a sharp sting. Tui Na pressure is graded to what you can tolerate that day.",
      },
      {
        q: "How many sessions might I need?",
        a: "That depends on how long symptoms have been present and whether the neck, shoulder or back is the main driver. We outline a review period at the first visit and adjust it according to your response — we do not lock you into a package.",
      },
      {
        q: "Can I use health insurance?",
        a: "We are recognised by AXA Health, Vitality, Aviva and WPA. Cover depends on your individual policy and usually relates to eligible acupuncture. Check before you book — see <a href=\"/pricing-and-insurance\">Pricing &amp; Insurance</a>.",
      },
    ],
  },
  {
    slug: "neck-pain",
    href: "/conditions/neck-pain",
    label: "Neck Pain",
    category: "pain-msk",
    status: "live",
    summary:
      "Cervical stiffness, desk-related neck pain and pain referring into the shoulder or arm — acupuncture, Tui Na and Gua Sha after assessment.",
    title: "Neck Pain Treatment & Acupuncture | Reading & Wimbledon",
    description:
      "Neck pain treatment with acupuncture in Reading and Wimbledon. Desk stiffness and pain into the shoulder assessed together. No GP referral needed.",
    ogTitle: "Neck Pain Treatment & Acupuncture | Reading & Wimbledon",
    ogDescription:
      "Stiff neck, desk tension or pain into the shoulder. Assessed and treated with acupuncture and manual therapy at our two UK clinics.",
    introHeading: "Neck pain, stiffness and neck-and-shoulder tension",
    treatmentsHeading: "Acupuncture, Tui Na and Gua Sha for neck pain",
    h1: "Acupuncture for Neck Pain in Reading & Wimbledon",
    eyebrow: "Conditions · Neck Pain",
    lede: "Stiff neck, desk tension, or pain that spreads into the shoulder is common — and often mixed. We assess the neck and the shoulder girdle together, then use acupuncture and manual therapy accordingly.",
    image: "/images/tui-na-massage-treatment.webp",
    imageAlt: "Practitioner using Tui Na manual therapy on a patient’s upper back",
    heroImage: "/images/generated/neck-pain-patient-hero.webp",
    sectionImage: "/images/acupuncture-needles-back.webp",
    sectionImageAlt: "Close-up of acupuncture needles being placed on a patient's back during treatment",
    intro: [
      "Neck pain ranges from a stiff neck after sleep to a chronic ache that builds through the working day. Many people also feel it across the shoulders or into the upper back. Muscular neck pain, postural loading and joint stiffness often overlap — which is why a single stretch or heat pack is not always enough.",
      "We commonly combine <a href=\"/clinical-services/acupuncture\">acupuncture</a> with <a href=\"/clinical-services/tui-na-massage\">Tui Na</a> at our <a href=\"/locations/reading-clinic\">Reading</a> and <a href=\"/locations/wimbledon-clinic\">Wimbledon</a> clinics. Where nerve-type symptoms travel into an arm, we also consider a <a href=\"/conditions/pinched-nerve\">pinched nerve</a> or <a href=\"/conditions/trapped-nerve\">trapped nerve</a> picture. Local shoulder joint pain is covered on our <a href=\"/conditions/shoulder-pain\">shoulder pain</a> page.",
    ],
    symptoms: [
      "Stiffness when turning to look over a shoulder",
      "Aching at the base of the skull or across the upper trapezius",
      "Neck and shoulder pain together, especially after desk work",
      "Tension that builds through the day and eases a little with movement",
      "Discomfort when looking up, driving, or using a phone",
    ],
    causes: [
      {
        title: "Postural and desk load",
        body: "A prolonged forward head position loads the joints and muscles of the cervical spine. This is one of the most common presentations we see in working-age patients.",
      },
      {
        title: "Muscular neck tension",
        body: "Guarding after a sudden turn, a cold draught, or simply holding stress in the shoulders. The pain is often bilateral and described as tight rather than electric.",
      },
      {
        title: "Referral into the shoulder or arm",
        body: "When symptoms travel, the neck may be the source even if the shoulder feels like the problem. We distinguish this from rotator-cuff pain and from <a href=\"/conditions/frozen-shoulder\">frozen shoulder</a> at consultation.",
      },
    ],
    treatments: [
      {
        href: "/clinical-services/acupuncture",
        label: "Acupuncture",
        why: "Used to ease local muscle guarding and pain signalling in the cervical and upper-back region, with distal points added after assessment.",
      },
      {
        href: "/clinical-services/tui-na-massage",
        label: "Tui Na",
        why: "Manual mobilisation of the neck, scapula and upper thoracic tissues — particularly useful where desk posture has become entrenched.",
      },
      {
        href: "/clinical-services/gua-sha",
        label: "Gua Sha",
        why: "Often used for stubborn neck and shoulder stasis when scraping techniques are appropriate for the tissue picture that day.",
      },
    ],
    patterns: [
      {
        title: "Wind-Cold Invasion 風寒侵襲",
        body: "Sudden stiff neck after cold exposure or an awkward sleep. Early, acute presentations often sit here.",
      },
      {
        title: "Qi & Blood Stagnation 氣滯血瘀",
        body: "A more fixed ache, often one-sided, after strain or long hours at a screen.",
      },
      {
        title: "Liver Qi Constraint 肝氣鬱結",
        body: "Tension that tracks stress, sleep and a tight jaw or shoulders — the neck is part of a wider holding pattern.",
      },
    ],
    related: ["shoulder-pain", "headaches", "migraine"],
    expect: [
      {
        title: "Neck and shoulder together",
        body: "We look at how you turn, desk habits, sleep position and whether symptoms travel into an arm. The shoulder is not ignored if the neck is the headline complaint.",
      },
      {
        title: "A clear combination",
        body: "You will know whether acupuncture, Tui Na or Gua Sha is proposed that day, and why. Nothing is added as a default extra.",
      },
      {
        title: "Advice you can use",
        body: "Simple load advice — not a generic stretch sheet — so you are not undoing the session at a laptop the next morning.",
      },
    ],
    safety: {
      intro: "Most muscular neck pain can be assessed in clinic. Seek urgent medical care if neck pain comes with:",
      items: [
        "A significant injury or accident",
        "Rapidly worsening arm weakness or loss of coordination",
        "A severe headache unlike your usual pattern, with neck stiffness",
        "Fever, unexplained unsteadiness, or symptoms that alarm you",
      ],
    },
    faqs: [
      {
        q: "Can acupuncture help neck pain?",
        a: "Many people use acupuncture as part of care for muscular and postural neck pain. It may support pain relief and muscle relaxation. It is tailored to the individual, and it is not appropriate for every cause of neck pain — for example after major trauma, medical assessment comes first.",
      },
      {
        q: "Is this just a stiff neck, or something in the shoulder?",
        a: "They often travel together. If lifting the arm is the main problem, see <a href=\"/conditions/shoulder-pain\">shoulder pain</a>. If turning the head is the main problem, the neck is usually the starting point. We examine both.",
      },
      {
        q: "Can neck pain cause tingling in the arm?",
        a: "It can. That does not automatically mean a trapped nerve, but it is a reason to assess the cervical spine rather than only massaging the sore shoulder. See our pages on <a href=\"/conditions/trapped-nerve\">trapped nerve</a> and <a href=\"/conditions/pinched-nerve\">pinched nerve</a> if that is your main search.",
      },
      {
        q: "How is neck pain treated besides acupuncture?",
        a: "<a href=\"/clinical-services/tui-na-massage\">Tui Na</a> and, where suitable, <a href=\"/clinical-services/gua-sha\">Gua Sha</a> are commonly used for neck and shoulder tension. Bone-setting is only considered if joint restriction is part of the picture after assessment.",
      },
      {
        q: "How many sessions might I need?",
        a: "A recent stiff neck may settle over a short course. Desk-related neck pain that has built for months is reviewed over a longer period. We reassess rather than repeating the same plan indefinitely.",
      },
      {
        q: "Do you treat neck pain at both clinics?",
        a: "Yes. <a href=\"/locations/reading-clinic\">Reading</a> (Mon / Wed / Fri) and <a href=\"/locations/wimbledon-clinic\">Wimbledon</a> (Saturday). Same practitioners at both.",
      },
      {
        q: "Can I claim through health insurance?",
        a: "We are recognised by AXA Health, Vitality, Aviva and WPA. Cover depends on your policy and usually relates to eligible acupuncture. See <a href=\"/pricing-and-insurance\">Pricing &amp; Insurance</a>.",
      },
    ],
  },
  {
    slug: "herniated-disc",
    href: "/conditions/herniated-disc",
    label: "Herniated Disc",
    category: "pain-msk",
    status: "live",
    summary:
      "Slipped disc and disc-related back pain — acupuncture and manual therapy for symptoms, not a claim to physically repair the disc.",
    title: "Slipped Disc Pain & Acupuncture | Reading & Wimbledon",
    description:
      "Acupuncture for herniated and slipped disc symptoms in Reading and Wimbledon. Care for disc-related back pain — not a claim to repair the disc.",
    ogTitle: "Slipped Disc Pain & Acupuncture | Reading & Wimbledon",
    ogDescription:
      "UK patients often say slipped disc. We treat the pain and movement limitation — we do not claim to put a disc back in place.",
    ctaHeading: "Ready to book slipped disc treatment?",
    introHeading: "Herniated disc, slipped disc and disc-related back pain",
    treatmentsHeading: "Acupuncture and TCM for disc-related back pain",
    h1: "Acupuncture for Herniated Disc in Reading & Wimbledon",
    eyebrow: "Conditions · Herniated Disc",
    lede: "“Slipped disc” is the name most people in the UK use. It does not mean the disc has slid out of the spine. We may use acupuncture for the pain, muscle guarding and movement limitation — we do not claim to put a disc back in place.",
    image: "/images/manual-therapy-side-lying.webp",
    imageAlt: "Practitioner treating the lower back with the patient in a side-lying position",
    heroImage: "/images/generated/herniated-disc-patient-hero.webp",
    sectionImage: "/images/acupuncture-needles-back.webp",
    sectionImageAlt: "Close-up of acupuncture needles being placed on a patient's back during treatment",
    intro: [
      "A herniated disc — often called a slipped disc in the UK — is when disc material bulges or leaks enough to irritate nearby tissue, sometimes including a nerve root. Many people first notice it as disc-related back pain; others notice leg pain and look up <a href=\"/conditions/sciatica-treatment\">sciatica</a>.",
      "<a href=\"/clinical-services/acupuncture\">Acupuncture</a> does not physically repair, replace or “move” a spinal disc. What we may support is pain, muscle spasm and how comfortably you can move while medical advice and, where needed, imaging remain in the picture. Related searches such as <a href=\"/conditions/back-pain\">back pain</a> and <a href=\"/conditions/pinched-nerve\">pinched nerve</a> are often the same clinical visit from a different starting phrase. Appointments are at <a href=\"/locations/reading-clinic\">Reading</a> or <a href=\"/locations/wimbledon-clinic\">Wimbledon</a>.",
    ],
    symptoms: [
      "Lower-back pain that started after bending, lifting or a long drive",
      "Pain into the buttock or down one leg",
      "Worse when sitting, coughing, sneezing or bending forward",
      "A catching or guarding feeling when standing up from a chair",
      "Symptoms that came with an MRI report mentioning a disc bulge or herniation",
    ],
    causes: [
      {
        title: "Disc irritation, not a disc that has “slipped out”",
        body: "The everyday phrase “slipped disc” is misleading. The disc stays between the vertebrae; material from it can irritate a nerve root. That irritation is one reason people also search for pinched-nerve pain.",
      },
      {
        title: "Muscle spasm around the segment",
        body: "The back often splints itself. That guarding can be as limiting as the original disc irritation and is one of the layers treatment may help with.",
      },
      {
        title: "Overlap with sciatica",
        body: "When a lumbar nerve root is involved, symptoms can follow a sciatic path. Not all sciatica is a herniated disc, and not all disc findings on a scan explain the pain you feel — which is why assessment still matters.",
      },
    ],
    treatments: [
      {
        href: "/clinical-services/acupuncture",
        label: "Acupuncture",
        why: "Used to modulate pain and local muscle spasm around the affected lumbar segment. It is adjunctive care, not a procedure that repairs disc tissue.",
      },
      {
        href: "/clinical-services/tui-na-massage",
        label: "Tui Na",
        why: "Graded manual work for lumbar and gluteal guarding once the acute picture allows it. Forceful “putting the disc back” is not the aim.",
      },
      {
        href: "/clinical-services/bone-setting",
        label: "Bone Setting",
        why: "Considered only after assessment, and usually once acute inflammation has settled, if joint restriction is feeding the presentation.",
      },
    ],
    patterns: [
      {
        title: "Qi & Blood Stagnation 氣滯血瘀",
        body: "Sudden, sharp lumbar pain after strain — the picture many people call an acute slipped disc episode.",
      },
      {
        title: "Cold-Damp Obstruction 寒濕痹阻",
        body: "Heavy, stiff, weather-sensitive back and leg symptoms that linger beyond the first flare.",
      },
      {
        title: "Kidney Deficiency 腎虛",
        body: "Recurrent disc-related back pain with fatigue. Treatment addresses both the local segment and constitutional depletion.",
      },
    ],
    related: ["back-pain", "sciatica-treatment", "pinched-nerve"],
    expect: [
      {
        title: "History and reports",
        body: "We want the story of the flare, what you can and cannot do, and any MRI or specialist letters. Scans are useful context, not a script we treat blindly.",
      },
      {
        title: "Honest scope",
        body: "You will hear what we may be able to help with — pain and movement — and what we will not claim, including physically relocating a disc.",
      },
      {
        title: "A reviewed course",
        body: "If red-flag symptoms are absent and treatment is appropriate, we start and then review. If you need GP or spinal-service input first, we will say so.",
      },
    ],
    safety: {
      intro: "Disc-related pain still needs the same urgent filters as other spinal nerve presentations. Seek emergency or NHS assessment if you have:",
      items: [
        "New bladder or bowel change, or saddle numbness",
        "Rapidly worsening leg weakness",
        "Pain after major trauma",
        "Unexplained fever with severe back pain",
      ],
    },
    faqs: [
      {
        q: "Is a slipped disc the same as a herniated disc?",
        a: "In everyday UK language, yes — people say slipped disc for what clinicians call a herniated or prolapsed disc. The disc has not fallen out of the spine. The issue is irritation from disc material and the tissues around it.",
      },
      {
        q: "Can acupuncture help a herniated or slipped disc?",
        a: "Acupuncture may help with pain and muscle spasm associated with disc-related back pain. It does not repair the disc or replace orthopaedic or neurosurgical advice when that is needed. Suitability is assessed in clinic.",
      },
      {
        q: "I have sciatica and a disc bulge on MRI — which page applies?",
        a: "Often both are relevant. If the dominant symptom is pain down the leg, start with <a href=\"/conditions/sciatica-treatment\">sciatica</a>. If the dominant story is the disc report and back pain, this page is the better fit. We assess the same body either way.",
      },
      {
        q: "Will you try to put the disc back in place?",
        a: "No. That is not a medically accurate description of what acupuncture or Tui Na does. Manual therapy here is about easing restriction and spasm after a proper assessment — not forcing disc material.",
      },
      {
        q: "How many sessions might I need?",
        a: "Disc-related presentations are often reviewed over a longer course than a simple muscular strain. Your practitioner will be realistic at the first visit and will not promise a set number of sessions to “fix” the disc.",
      },
      {
        q: "Do I need an MRI before I book?",
        a: "No. Bring imaging if you have it. If your history suggests you need medical investigation first, we will advise you to speak with your GP or specialist.",
      },
      {
        q: "Can I claim through health insurance?",
        a: "We are recognised by AXA Health, Vitality, Aviva and WPA. Cover depends on your policy and usually relates to eligible acupuncture. See <a href=\"/pricing-and-insurance\">Pricing &amp; Insurance</a>.",
      },
    ],
  },
  {
    slug: "piriformis-syndrome",
    href: "/conditions/piriformis-syndrome",
    label: "Piriformis Syndrome",
    category: "pain-msk",
    status: "live",
    summary:
      "Deep buttock pain and pain down the leg that can resemble sciatica — assessed before acupuncture and Tui Na, not labelled from a webpage.",
    title: "Piriformis Pain Treatment & Acupuncture | Reading & Wimbledon",
    description:
      "Acupuncture for piriformis-related buttock pain and leg pain in Reading and Wimbledon. It can resemble sciatica — we assess rather than guess.",
    ogTitle: "Piriformis Pain Treatment & Acupuncture | Reading & Wimbledon",
    ogDescription:
      "Buttock pain or pain down the leg is not always spinal sciatica. We assess piriformis-related symptoms before treating.",
    ctaHeading: "Ready to book piriformis treatment?",
    introHeading: "Piriformis pain, buttock pain and pain down the leg",
    treatmentsHeading: "Acupuncture and Tui Na for piriformis-related pain",
    h1: "Acupuncture for Piriformis Syndrome in Reading & Wimbledon",
    eyebrow: "Conditions · Piriformis Syndrome",
    lede: "Deep buttock pain that travels down the leg is often labelled sciatica. Sometimes the piriformis muscle is the irritant. Assessment is what distinguishes the two — a webpage cannot.",
    image: "/images/back-assessment-treatment.webp",
    imageAlt: "Practitioner assessing a patient's back in clinic",
    heroImage: "/images/generated/piriformis-syndrome-patient-hero.webp",
    sectionImage: "/images/acupuncture-needles-back.webp",
    sectionImageAlt: "Close-up of acupuncture needles being placed on a patient's back during treatment",
    intro: [
      "The piriformis is a small muscle deep in the buttock. When it is tight or irritated, it can aggravate the sciatic nerve that runs beneath (and in some people, through) the muscle. The result can be piriformis pain, buttock pain, and pain down the leg that looks and feels like <a href=\"/conditions/sciatica-treatment\">sciatica</a>.",
      "That overlap is exactly why self-diagnosis from symptoms is unreliable. True nerve-root sciatica, <a href=\"/conditions/back-pain\">back pain</a>, and <a href=\"/conditions/hip-pain\">hip pain</a> can all occupy the same neighbourhood. We examine rather than assume the piriformis is the culprit. Where the picture fits, we typically combine <a href=\"/clinical-services/acupuncture\">acupuncture</a> with <a href=\"/clinical-services/tui-na-massage\">Tui Na</a> at <a href=\"/locations/reading-clinic\">Reading</a> or <a href=\"/locations/wimbledon-clinic\">Wimbledon</a>.",
    ],
    symptoms: [
      "A deep ache in one buttock, sometimes described as sitting on a tennis ball",
      "Pain down the back of the thigh, with or without back pain",
      "Worse after sitting, driving, or climbing stairs",
      "Tenderness deep in the buttock rather than on the lumbar spine",
      "Symptoms that started after hip-heavy training or a long period of sitting",
    ],
    causes: [
      {
        title: "Muscle irritation of the sciatic nerve",
        body: "Unlike a disc compressing a nerve root in the spine, the irritation here can be in the buttock. The leg pain can still be very convincing — which is why the sciatica comparison comes up so often.",
      },
      {
        title: "Sitting and hip loading",
        body: "Long hours on a chair or in a car, plus running, cycling or gym work that loads the hips, are common backgrounds. They are clues, not proof.",
      },
      {
        title: "Overlap with the lumbar spine",
        body: "Some people have both a spinal contribution and a tight piriformis. Treating only one layer is a reason progress stalls — we assess both.",
      },
    ],
    treatments: [
      {
        href: "/clinical-services/acupuncture",
        label: "Acupuncture",
        why: "Local and distal points may be used to ease pain and muscle guarding in the gluteal region after the source picture is clearer.",
      },
      {
        href: "/clinical-services/tui-na-massage",
        label: "Tui Na",
        why: "Manual work around the hip and buttock, graded carefully — this is not aggressive deep pressure as a default.",
      },
      {
        href: "/clinical-services/bone-setting",
        label: "Bone Setting",
        why: "Considered if pelvic or lumbar joint restriction is feeding the buttock and leg symptoms.",
      },
    ],
    patterns: [
      {
        title: "Qi & Blood Stagnation 氣滯血瘀",
        body: "A fixed, deep buttock pain after sitting or a specific training load.",
      },
      {
        title: "Damp-Heat or Damp obstruction 濕阻",
        body: "A heavy, aching buttock and thigh that feels worse in still positions.",
      },
      {
        title: "Liver-Kidney Deficiency 肝腎不足",
        body: "Recurrent hip-and-buttock niggles with slower recovery, more often in longer-standing cases.",
      },
    ],
    related: ["sciatica-treatment", "hip-pain", "back-pain"],
    expect: [
      {
        title: "Sciatica or piriformis?",
        body: "We compare back involvement, sitting tolerance, and where the pain is most convincing. The aim is a working hypothesis, not a label you must live with.",
      },
      {
        title: "Treat the layer in front of us",
        body: "If gluteal muscle and nerve irritation seem dominant, acupuncture and Tui Na are often the starting pair. If the lumbar spine is driving it, the plan shifts.",
      },
      {
        title: "Review sitting and load",
        body: "Simple advice on sitting, driving and training is part of the visit so the next week is not an exact repeat of the last.",
      },
    ],
    safety: {
      intro: "Buttock and leg pain still needs spinal red-flag screening. Seek medical care if you have:",
      items: [
        "Saddle numbness, or bladder or bowel change",
        "Rapidly worsening leg weakness",
        "Pain after a fall onto the hip or pelvis",
        "Unexplained swelling, redness or fever around the hip",
      ],
    },
    faqs: [
      {
        q: "Is piriformis syndrome the same as sciatica?",
        a: "They can feel similar — pain in the buttock and down the leg. Sciatica often starts with a spinal nerve root; piriformis-related pain is generated more locally in the buttock. Plenty of people have a mixed picture. That is why we assess rather than treating a search term. See our <a href=\"/conditions/sciatica-treatment\">sciatica treatment</a> page if the spinal story is stronger.",
      },
      {
        q: "Can acupuncture help piriformis syndrome?",
        a: "It may help with pain and muscle guarding in the gluteal region. It is not a guaranteed outcome and it does not replace medical assessment if your symptoms suggest a spinal emergency or a hip joint problem that needs imaging.",
      },
      {
        q: "Can piriformis pain go down the leg?",
        a: "Yes. That is why it is so often confused with sciatica. Pain down the leg is a symptom, not a diagnosis.",
      },
      {
        q: "Should I stretch the piriformis at home first?",
        a: "Aggressive stretching into a painful nerve-type sensation can aggravate some presentations. We would rather see how the muscle and the lumbar spine are behaving before giving you a stretch list.",
      },
      {
        q: "How many sessions might I need?",
        a: "That depends on whether the piriformis is the main driver or part of a back-and-hip pattern. We review after the first few visits rather than selling a long package.",
      },
      {
        q: "Do you treat this at Reading and Wimbledon?",
        a: "Yes. Book either clinic via WhatsApp — <a href=\"/locations/reading-clinic\">Reading</a> midweek or <a href=\"/locations/wimbledon-clinic\">Wimbledon</a> on Saturday. No GP referral is required, but bring any existing letters or scans.",
      },
      {
        q: "Can I claim through health insurance?",
        a: "We are recognised by AXA Health, Vitality, Aviva and WPA. Cover depends on your policy and usually relates to eligible acupuncture. See <a href=\"/pricing-and-insurance\">Pricing &amp; Insurance</a>.",
      },
    ],
  },
  {
    slug: "knee-pain",
    href: "/conditions/knee-pain",
    label: "Knee Pain",
    category: "pain-msk",
    status: "live",
    summary:
      "Knee pain, stiffness and pain when walking — acupuncture and Tui Na as part of musculoskeletal care, not a stand-in for surgery when surgery is needed.",
    title: "Knee Pain Treatment & Acupuncture | Reading & Wimbledon",
    description:
      "Knee pain treatment with acupuncture in Reading and Wimbledon. Stiffness when walking assessed in clinic — not a stand-in for surgery when that is needed.",
    ogTitle: "Knee Pain Treatment & Acupuncture | Reading & Wimbledon",
    ogDescription:
      "Chronic knee pain or stiffness when walking. We may support symptoms with acupuncture and manual therapy after assessment.",
    introHeading: "Knee pain, stiffness and pain when walking",
    treatmentsHeading: "Acupuncture and Tui Na for knee pain",
    h1: "Acupuncture for Knee Pain in Reading & Wimbledon",
    eyebrow: "Conditions · Knee Pain",
    lede: "Knee pain when walking, stiffness after sitting, or a chronic ache in the joint. We may support symptoms with acupuncture and manual therapy. Significant injury, locking or a hot swollen knee needs medical assessment first.",
    image: "/images/knee-assessment-clinic.webp",
    imageAlt: "Practitioner examining a patient's knee in clinic",
    heroImage: "/images/generated/knee-pain-patient-hero.webp",
    sectionImage: "/images/acupuncture-needles-back.webp",
    sectionImageAlt: "Close-up of acupuncture needles being placed on a patient's back during treatment",
    intro: [
      "People look for knee pain treatment without surgery because they want to keep walking, working and training. That is a reasonable aim — and it is not the same as saying <a href=\"/clinical-services/acupuncture\">acupuncture</a> can replace an operation when an orthopaedic surgeon has already judged surgery to be necessary. Suitability is assessed in clinic at <a href=\"/locations/reading-clinic\">Reading</a> or <a href=\"/locations/wimbledon-clinic\">Wimbledon</a>, alongside whatever NHS or specialist advice you already have.",
      "We see overuse-related discomfort, longer-standing stiffness, and sports-related knees as part of <a href=\"/conditions/sports-injuries\">sports injury</a> care. Pain around the knee can also be influenced by the <a href=\"/conditions/hip-pain\">hip</a> or <a href=\"/conditions/back-pain\">back</a>, which is why we look at how you walk, not only at the sore joint.",
    ],
    symptoms: [
      "Pain when walking, going downstairs, or standing up from a chair",
      "Stiffness after sitting that eases with a few steps",
      "An ache that lingers after training or a long day on your feet",
      "A feeling of weakness or caution on uneven ground",
      "Chronic knee pain that has plateaued with rest or painkillers",
    ],
    causes: [
      {
        title: "Load and wear on the joint",
        body: "Repeated loading, previous injury and age-related change can all irritate the knee. We do not diagnose osteoarthritis from a webpage; we treat the presentation in front of us and respect any existing medical diagnosis.",
      },
      {
        title: "Sports and overuse",
        body: "Running, racquet sports, gym work and sudden increases in training volume are common backgrounds. The sore point is not always the only driver in the chain.",
      },
      {
        title: "Referral and compensation",
        body: "Hip stiffness or back pain can change how the knee is loaded. Treating the knee in isolation then disappoints — we check the chain.",
      },
    ],
    treatments: [
      {
        href: "/clinical-services/acupuncture",
        label: "Acupuncture",
        why: "Local and distal points may be used to support pain relief and ease guarding around the joint after assessment.",
      },
      {
        href: "/clinical-services/tui-na-massage",
        label: "Tui Na",
        why: "Graded manual work for the soft tissue around the knee and the muscles that control it, without forcing a locked or acutely swollen joint.",
      },
      {
        href: "/clinical-services/moxibustion",
        label: "Moxibustion",
        why: "Sometimes added for chronic, cold-sensitive knee stiffness where warming methods fit the TCM pattern.",
      },
    ],
    patterns: [
      {
        title: "Wind-Cold-Damp Bi 風寒濕痺",
        body: "Stiff, weather-sensitive knee pain that dislikes cold and prolonged sitting.",
      },
      {
        title: "Qi & Blood Stagnation 氣滯血瘀",
        body: "A more local, activity-related ache after sport or a specific twist.",
      },
      {
        title: "Liver-Kidney Deficiency 肝腎不足",
        body: "Longer-standing knee weakness and slower recovery — treated as a local and constitutional picture.",
      },
    ],
    related: ["sports-injuries", "hip-pain", "arthritis"],
    expect: [
      {
        title: "What the knee is doing",
        body: "We ask about walking, stairs, swelling, locking, previous injuries and any surgeon or physio advice you already have.",
      },
      {
        title: "What we will not over-promise",
        body: "If the joint needs imaging, a GP review, or a surgical opinion, we say so. Treatment here is complementary care, not a bypass of that pathway.",
      },
      {
        title: "A reviewed plan",
        body: "Where acupuncture and Tui Na are appropriate, we start and then judge the response — not a pre-paid “avoid surgery” package.",
      },
    ],
    safety: {
      intro: "Do not use this page to delay medical care. See a doctor or urgent service if you have:",
      items: [
        "A significant twist, fall or impact",
        "A knee that locks, gives way repeatedly, or cannot bear weight",
        "Marked swelling, heat, redness, or fever with joint pain",
        "A rapidly worsening or unexplained joint problem",
      ],
    },
    faqs: [
      {
        q: "Can acupuncture help knee pain?",
        a: "Many people use acupuncture as part of care for chronic knee pain and stiffness. It may help with pain and muscle guarding. Results vary, and it is not appropriate for every knee problem — especially acute trauma or a hot, swollen joint that needs medical diagnosis first.",
      },
      {
        q: "Can you treat knee pain without surgery?",
        a: "People often explore acupuncture and manual therapy while they are managing knee pain without an operation. That is not the same as saying we can replace surgery when surgery is clinically indicated. If a specialist has recommended an operation, that decision sits with you and your medical team. We can discuss whether adjunctive care is still appropriate.",
      },
      {
        q: "I have pain when walking — is that something you see?",
        a: "Yes, pain when walking is one of the most common reasons people book. We still need to know whether there is swelling, locking, recent injury or hip-and-back involvement before treating.",
      },
      {
        q: "Is treatment painful?",
        a: "Needles used in acupuncture are very fine. Around the knee, most people feel a dull ache rather than a sharp sting. Tui Na is kept within what the joint will tolerate that day.",
      },
      {
        q: "How many sessions might I need?",
        a: "Longer-standing knee pain is typically reviewed over a course rather than a single visit. Acute sports irritation may change faster. We set a review point at the first appointment.",
      },
      {
        q: "Do I need a GP referral?",
        a: "No. Bring any existing X-ray, MRI or specialist letters. If your history suggests medical investigation first, we will advise that.",
      },
      {
        q: "Can I claim through health insurance?",
        a: "We are recognised by AXA Health, Vitality, Aviva and WPA. Cover depends on your policy and usually relates to eligible acupuncture. See <a href=\"/pricing-and-insurance\">Pricing &amp; Insurance</a>.",
      },
    ],
  },
  {
    slug: "hip-pain",
    href: "/conditions/hip-pain",
    label: "Hip Pain",
    category: "pain-msk",
    status: "live",
    summary:
      "Hip pain, stiffness and pain when walking — assessed against back, buttock and knee sources, then treated with acupuncture and manual therapy if appropriate.",
    title: "Hip Pain Treatment & Acupuncture | Reading & Wimbledon",
    description:
      "Hip pain treatment with acupuncture in Reading and Wimbledon. Groin, outer-hip and buttock symptoms assessed against back and knee sources.",
    ogTitle: "Hip Pain Treatment & Acupuncture | Reading & Wimbledon",
    ogDescription:
      "Pain around the hip is not always the hip joint. We assess back, buttock and knee contributions before treating.",
    introHeading: "Hip pain, stiffness and pain when walking",
    treatmentsHeading: "Acupuncture and TCM for hip pain",
    h1: "Acupuncture for Hip Pain in Reading & Wimbledon",
    eyebrow: "Conditions · Hip Pain",
    lede: "Pain around the hip is not always the hip joint. It can come from the back, the buttock, or further down the chain. We assess before we treat, then use acupuncture and manual therapy where the picture fits.",
    image: "/images/bone-setting-treatment.webp",
    imageAlt: "Practitioner using manual therapy on a patient's back and shoulder",
    heroImage: "/images/generated/hip-pain-patient-hero.webp",
    sectionImage: "/images/acupuncture-needles-back.webp",
    sectionImageAlt: "Close-up of acupuncture needles being placed on a patient's back during treatment",
    intro: [
      "Hip pain when walking, stiffness after sitting, or an ache in the buttock and hip can have several sources: the hip joint itself, the lumbar spine, the sacroiliac region, or muscles such as the piriformis. Searching the symptom is useful. Naming the structure from a webpage is not.",
      "We therefore treat hip presentations as a differential, not a single protocol. Related pages include <a href=\"/conditions/back-pain\">back pain</a>, <a href=\"/conditions/sciatica-treatment\">sciatica</a>, <a href=\"/conditions/piriformis-syndrome\">piriformis syndrome</a> and <a href=\"/conditions/knee-pain\">knee pain</a> — because those are the neighbourhoods this symptom lives in. Where treatment is appropriate, we typically use <a href=\"/clinical-services/acupuncture\">acupuncture</a> with <a href=\"/clinical-services/tui-na-massage\">Tui Na</a>, and bone-setting if pelvic or lumbar restriction is part of the picture, at <a href=\"/locations/reading-clinic\">Reading</a> or <a href=\"/locations/wimbledon-clinic\">Wimbledon</a>.",
    ],
    symptoms: [
      "Pain in the side of the hip, groin, or deep in the buttock",
      "Stiffness when putting on socks or getting out of a car",
      "Pain when walking, especially on the first few steps",
      "An ache that sits between the lower back and the hip",
      "Discomfort that seems to move between hip and knee",
    ],
    causes: [
      {
        title: "Local hip and soft-tissue irritation",
        body: "The joint, tendons and surrounding muscles can all generate pain around the hip. Activity, previous injury and age-related change are common backgrounds — still not a diagnosis from this page.",
      },
      {
        title: "Referred from the lower back",
        body: "Lumbar and sacroiliac problems are frequently felt in the hip or buttock. If the back is the driver, treating only the outer hip will not be enough.",
      },
      {
        title: "Buttock and knee chain",
        body: "Piriformis-related buttock pain and knee loading both change how the hip is used. We look at walking and sitting, not only at where you point with one finger.",
      },
    ],
    treatments: [
      {
        href: "/clinical-services/acupuncture",
        label: "Acupuncture",
        why: "Point selection follows whether the picture is more joint, muscle, or referred from the lumbar region — decided after assessment.",
      },
      {
        href: "/clinical-services/tui-na-massage",
        label: "Tui Na",
        why: "Manual therapy for the hip girdle, gluteal tissues and lumbar-pelvic region where tightness is maintaining the pain.",
      },
      {
        href: "/clinical-services/bone-setting",
        label: "Bone Setting",
        why: "Used when pelvic or lumbar joint restriction is part of the picture, not as a routine “hip crack”.",
      },
    ],
    patterns: [
      {
        title: "Qi & Blood Stagnation 氣滯血瘀",
        body: "A more local hip ache after a specific strain, long walk or training block.",
      },
      {
        title: "Cold-Damp Bi 寒濕痹",
        body: "Stiff, weather-sensitive hip and buttock pain that dislikes inactivity.",
      },
      {
        title: "Liver-Kidney Deficiency 肝腎不足",
        body: "Recurrent hip stiffness with slower recovery, often alongside knee or lumbar complaints.",
      },
    ],
    related: ["piriformis-syndrome", "arthritis", "knee-pain"],
    expect: [
      {
        title: "Where is the pain really from?",
        body: "We map groin versus outer hip versus buttock, and whether the back or knee is involved. The aim is to avoid treating the wrong neighbourhood.",
      },
      {
        title: "A matched combination",
        body: "Acupuncture, Tui Na and, where relevant, bone-setting are chosen for that picture — not listed because they exist on the website.",
      },
      {
        title: "Medical filters first",
        body: "Inability to bear weight, trauma, or a hot swollen joint belongs with medical services first. We are clear when clinic treatment can wait.",
      },
    ],
    safety: {
      intro: "Hip pain can hide spinal or joint problems that need medical care. Seek assessment if you have:",
      items: [
        "A fall or inability to bear weight",
        "A hot, swollen or rapidly worsening joint",
        "Leg weakness, saddle numbness, or bladder or bowel change",
        "Unexplained fever with hip or back pain",
      ],
    },
    faqs: [
      {
        q: "Can acupuncture help hip pain?",
        a: "It may help with pain and muscle guarding around the hip and referred patterns from the back. It is not a cure for structural hip disease, and it will not replace a hip replacement or other surgery when that is indicated.",
      },
      {
        q: "Why does my hip hurt when I walk?",
        a: "Walking loads the hip, pelvis and lower back together. The sore spot is a clue, not the whole answer. That is why we look at gait, sitting and whether symptoms travel into the leg or knee.",
      },
      {
        q: "Is this sciatica or hip pain?",
        a: "If the pain shoots down the leg from the back or buttock, read our <a href=\"/conditions/sciatica-treatment\">sciatica</a> and <a href=\"/conditions/piriformis-syndrome\">piriformis</a> pages as well. Groin pain with rotation is more often a local hip question. We distinguish this in the room, not from a form.",
      },
      {
        q: "Can hip pain cause knee pain?",
        a: "Yes — the chain is two-way. Knee problems also change hip loading. If both are noisy, we will not pretend one page solves both; we assess the pair.",
      },
      {
        q: "How many sessions might I need?",
        a: "A recent muscular hip ache may change over a short course. Longer-standing stiffness is reviewed over more visits. We set that expectation at the first appointment.",
      },
      {
        q: "Is treatment available in Reading and Wimbledon?",
        a: "Yes. <a href=\"/locations/reading-clinic\">Reading</a> midweek and <a href=\"/locations/wimbledon-clinic\">Wimbledon</a> on Saturday. WhatsApp to book — no GP referral needed.",
      },
      {
        q: "Can I claim through health insurance?",
        a: "We are recognised by AXA Health, Vitality, Aviva and WPA. Cover depends on your policy and usually relates to eligible acupuncture. See <a href=\"/pricing-and-insurance\">Pricing &amp; Insurance</a>.",
      },
    ],
  },

  ...expansionConditions,

  // ── Women's health ────────────────────────────────────
  {
    slug: "fertility-support",
    href: "/conditions/fertility-support",
    label: "Fertility Support",
    category: "womens-health",
    status: "live",
    summary:
      "Acupuncture and herbal medicine as an adjunct around fertility and IVF cycles — assessed individually, not as a package.",
    title: "Acupuncture & TCM for Fertility | Reading & Wimbledon",
    description:
      "Acupuncture and Chinese herbal medicine for fertility in Reading and Wimbledon. Assessment-led adjunct care, including around IVF — not a fertility-clinic replacement.",
    ogTitle: "Acupuncture & TCM for Fertility | Reading & Wimbledon",
    ogDescription:
      "A guide from our clinic: how we assess fertility, prescribe herbal medicine and acupuncture, and support patients trying naturally or alongside IVF.",
    ctaHeading: "We look forward to supporting you on your journey",
    h1: "Acupuncture & Traditional Chinese Medicine for Fertility",
    eyebrow: "Women's Health · Fertility",
    lede: "A guide from our clinic — how we assess, diagnose and support you, whether you are trying naturally or alongside IVF.",
    image: "/images/generated/clinic-consultation.webp",
    imageAlt: "Clinic consultation at Yin Yang CMC",
    heroImage: "/images/generated/clinic-consultation.webp",
    sectionImage: "/images/generated/chinese-medicine-pulse-assessment.webp",
    sectionImageAlt: "Practitioner taking a patient's pulse during a Traditional Chinese Medicine consultation",
    intro: [
      "Infertility is a deeply personal journey, and the causes are often multifaceted. Some are structural — such as uterine fibroids, polycystic ovarian syndrome (PCOS), or blocked fallopian tubes. Others relate to hormonal imbalances, irregular menstrual cycles, diminished egg or sperm quality, age-related factors, or a general state of physical and reproductive exhaustion.",
      "Traditional Chinese Medicine, including acupuncture and herbal therapy, is used to restore balance, regulate the menstrual cycle, nourish the reproductive system, and support overall vitality — both for natural fertility and as an adjunct around IVF. Read the full clinic guide on this page.",
    ],
    symptoms: [
      "Difficulty conceiving, including after previous fertility treatment or IVF",
      "Irregular, painful or absent menstrual cycles",
      "PCOS, fibroids, or a history of hormonal imbalance",
      "Concerns about egg or sperm quality, or age-related fertility",
      "Physical or reproductive exhaustion alongside trying to conceive",
    ],
    causes: [
      {
        title: "Structural and hormonal factors",
        body: "Fibroids, PCOS, blocked tubes, irregular cycles and hormonal imbalance are among the presentations we take a history of — they do not automatically dictate a single protocol.",
      },
      {
        title: "Egg, sperm and age-related factors",
        body: "Diminished egg or sperm quality and age-related change are common reasons people seek TCM as part of a wider fertility plan, including alongside assisted treatment.",
      },
      {
        title: "Constitutional depletion",
        body: "A general state of physical and reproductive exhaustion is treated as part of the TCM picture, not as a separate add-on.",
      },
    ],
    treatments: [
      {
        href: "/clinical-services/acupuncture",
        label: "Acupuncture",
        why: "Fine, single-use needles selected to your pattern. Electroacupuncture may be added where clinically appropriate.",
      },
      {
        href: "/clinical-services/herbal-consultation",
        label: "Chinese Herbal Medicine",
        why: "Concentrated granules from certified Hong Kong suppliers, prescribed only after consultation and compliant with UK regulatory standards.",
      },
    ],
    patterns: [
      {
        title: "Qi & Blood Deficiency 氣血虧虛",
        body: "Fatigue, a pale or scanty cycle, and a depleted reproductive picture. Treatment is aimed at nourishing rather than pushing.",
      },
      {
        title: "Liver & Kidney Insufficiency 肝腎不足",
        body: "A longer-standing constitutional pattern often discussed in fertility presentations — explained in clinic in plain language.",
      },
      {
        title: "Blood Stasis 血瘀",
        body: "Fixed, clotty or painful cycles, or a history that suggests stagnation. Often combined with another pattern rather than standing alone.",
      },
    ],
    related: ["menopause", "menstrual-pain", "postnatal-recovery"],
    expect: [
      {
        title: "Initial health assessment",
        body: "A detailed questionnaire before you arrive covers menstrual history, general health, lifestyle and any previous fertility or IVF outcomes.",
      },
      {
        title: "In-clinic consultation",
        body: "Pulse diagnosis (切脈) and tongue diagnosis (望舌) sit alongside a face-to-face history so we can identify the underlying pattern.",
      },
      {
        title: "Diagnosis and treatment plan",
        body: "You leave with a clear TCM explanation and a plan: herbs, acupuncture or both; expected duration; and dietary and lifestyle guidance.",
      },
    ],
    faqs: [
      {
        q: "Can acupuncture and TCM be used alongside IVF?",
        a: "Yes. Many patients come to us while preparing for, or going through, assisted reproductive treatment. TCM is used as an adjunct, not a replacement for your fertility clinic.",
      },
      {
        q: "Do I need Chinese herbal medicine as well as acupuncture?",
        a: "Not automatically. After assessment, the practitioner explains whether herbal medicine, acupuncture, or a combination is recommended.",
      },
    ],
  },
  {
    slug: "menopause",
    href: "/conditions/menopause",
    label: "Menopause",
    category: "womens-health",
    status: "live",
    summary:
      "Menopause and perimenopause acupuncture consultations in Reading and Wimbledon — hot flushes, night sweats, sleep, mood and joint discomfort assessed individually.",
    title: "Menopause Acupuncture in Reading & Wimbledon | Yin Yang CMC",
    description:
      "Explore acupuncture and Chinese medicine consultations for menopause and perimenopause in Reading and Wimbledon. BAcC-registered practitioners. Book an assessment.",
    ogTitle: "Menopause Acupuncture in Reading & Wimbledon | Yin Yang CMC",
    ogDescription:
      "Acupuncture and TCM consultations for perimenopause and menopause at our Reading and Wimbledon clinics. Assessment first — complementary to GP and menopause care, not a replacement for HRT.",
    ctaHeading: "Book a menopause acupuncture assessment",
    h1: "Acupuncture for Menopause in Reading & Wimbledon",
    eyebrow: "Women's Health · Menopause",
    lede:
      "Perimenopause and menopause can bring hot flushes, night sweats, broken sleep, mood change and joint discomfort. We offer assessment-led acupuncture and Chinese medicine consultations at our Reading and Wimbledon clinics.",
    image: "/images/generated/clinic-consultation.webp",
    imageAlt: "Consultation at Yin Yang CMC",
    heroImage: "/images/generated/clinic-consultation.webp",
    sectionImage: "/images/generated/chinese-medicine-pulse-assessment.webp",
    sectionImageAlt:
      "Practitioner taking a patient's pulse during a Traditional Chinese Medicine consultation",
    introHeading: "Menopause, perimenopause and your consultation",
    causesHeading: "What we explore at assessment",
    causesIntro:
      "Menopause and perimenopause can affect hot flushes, sleep, mood, joints and energy in different combinations. We take a full history — including any HRT, contraception or GP and menopause clinic care — so your assessment reflects your situation rather than a generic symptom checklist.",
    treatmentsHeading: "Acupuncture and Chinese medicine for menopause",
    heroSecondaryLabel: "Meet our practitioners",
    heroSecondaryHref: "/our-practitioners",
    heroAvailabilityHtml:
      "<a href=\"/locations/reading-clinic\">Reading</a> (Mon, Wed, Fri) and <a href=\"/locations/wimbledon-clinic\">Wimbledon</a> (Sat). Message us on WhatsApp to book.",
    whatsappMessage:
      "Hi — I'd like to book an acupuncture assessment for menopause / perimenopause symptoms. ",
    sectionOrder: [
      "hero",
      "intro-with-symptoms",
      "causes",
      "treatments",
      "patterns",
      "evidence",
      "expect",
      "safety",
      "practitioner",
      "clinic",
      "related",
      "faq",
      "cta",
    ],
    intro: [
      "People often book <strong>menopause acupuncture</strong> or <strong>perimenopause acupuncture</strong> when vasomotor symptoms — <strong>hot flushes</strong> and <strong>night sweats</strong> — start to affect sleep and daily life. Mood changes, anxiety, brain fog, fatigue and <strong>joint discomfort</strong> are also common during the transition, as described in <a href=\"https://www.nice.org.uk/guidance/ng23\" rel=\"noopener noreferrer\" target=\"_blank\">NICE menopause guidance</a> and on the <a href=\"https://www.nhs.uk/conditions/menopause/\" rel=\"noopener noreferrer\" target=\"_blank\">NHS menopause pages</a>.",
      "Established medical care may include HRT, lifestyle advice or referral to a menopause specialist. Our role is complementary: an <a href=\"/clinical-services/acupuncture\">acupuncture consultation</a> and, where appropriate, <a href=\"/clinical-services/herbal-consultation\">Chinese herbal medicine</a> after Traditional Chinese Medicine assessment — not a substitute for your GP or prescribed treatment.",
    ],
    symptoms: [
      "Hot flushes or night sweats, often with sleep disturbances",
      "Irregular, heavy or skipped periods during perimenopause",
      "Low mood, irritability or anxiety alongside hormonal change",
      "Joint aches, stiffness or musculoskeletal discomfort",
      "Fatigue, brain fog or feeling less resilient to stress",
    ],
    causes: [
      {
        title: "Hormonal transition",
        body:
          "Changing oestrogen and progesterone levels underpin many vasomotor and sleep symptoms. We take a full history — including any HRT, contraception or specialist menopause care you already receive.",
      },
      {
        title: "Sleep and nervous-system load",
        body:
          "Broken sleep and stress can amplify flushes and mood symptoms. We ask about lifestyle, caregiving and work pressure as part of a whole-person assessment.",
      },
      {
        title: "Musculoskeletal symptoms",
        body:
          "Joint and muscle discomfort is recognised in menopause care pathways. Where this is part of your picture, we note it alongside your wider consultation — without treating it as a separate ‘pain-only’ visit by default.",
      },
    ],
    treatments: [
      {
        href: "/clinical-services/acupuncture",
        label: "Acupuncture",
        why:
          "Single-use needles selected after consultation. Visit frequency is agreed with you — we do not sell a fixed menopause package.",
      },
      {
        href: "/clinical-services/herbal-consultation",
        label: "Chinese Herbal Medicine",
        why:
          "Granule prescriptions after pulse and tongue assessment, when internal regulation is clinically appropriate and compatible with your medications.",
      },
    ],
    patternsEyebrow: "TCM assessment",
    patternsHeading: "Understanding Menopause Through Traditional Chinese Medicine",
    patternsIntro:
      "In clinic we use pulse and tongue assessment, your symptom history and TCM pattern language to organise care. These patterns describe how symptoms cluster in traditional teaching — they are <strong>not</strong> the same as a Western hormonal diagnosis, and they are not presented as medically proven explanations. Several patterns may apply at once.",
    patterns: [
      {
        title: "Kidney Yin Deficiency 腎陰虛",
        body:
          "In TCM teaching, a Yin-deficient picture may be discussed when flushes, dryness, night sweats and restless sleep cluster together.",
      },
      {
        title: "Kidney Yang Deficiency 腎陽虛",
        body:
          "A Yang-deficient picture may be considered when fatigue, cold intolerance, oedema and low back ache dominate.",
      },
      {
        title: "Liver Qi Stagnation 肝氣鬱結",
        body:
          "Often discussed when mood swings, chest tightness, irritability or stress-linked headaches track an irregular cycle.",
      },
      {
        title: "Heart & Kidney Disharmony 心腎不交",
        body:
          "May be discussed when insomnia, palpitations, anxiety or vivid dreaming overlap with vasomotor symptoms.",
      },
    ],
    evidence: {
      heading: "What Does the Evidence Say About Acupuncture for Menopause?",
      paragraphs: [
        "UK guidance treats menopause as a clinical priority. <a href=\"https://www.nice.org.uk/guidance/ng23/chapter/Recommendations\" rel=\"noopener noreferrer\" target=\"_blank\">NICE guideline NG23</a> recommends that people with vasomotor symptoms are offered hormone replacement therapy (HRT) when appropriate, and that non-hormonal options — including information on approaches such as CBT — are discussed when HRT is not suitable.",
        "Acupuncture is sometimes raised as a non-pharmaceutical option in menopause discussions. NICE’s <a href=\"https://www.nice.org.uk/consultations/672/10/managing-short-term-menopausal-symptoms\" rel=\"noopener noreferrer\" target=\"_blank\">2019 evidence review</a> for NG23 found <strong>mixed and uncertain</strong> results for hot flushes when acupuncture was compared with sham acupuncture, and concluded that new evidence did not support adding acupuncture as a recommended treatment in the guideline.",
        "That does not mean individual patients never choose acupuncture — but we will not promise symptom relief or suggest acupuncture replaces HRT or NHS menopause care. If your symptoms are new, severe or worrying, speak with your GP first. Useful starting points include the <a href=\"https://www.nhs.uk/conditions/menopause/\" rel=\"noopener noreferrer\" target=\"_blank\">NHS menopause overview</a> and <a href=\"https://www.nhs.uk/conditions/menopause/treatment/\" rel=\"noopener noreferrer\" target=\"_blank\">NHS information on menopause treatment</a>.",
      ],
    },
    practitioner: {
      heading: "Women's health consultations",
      name: "Chui Ying Li (Andrea)",
      role: "Women's health & dermatology",
      image: "/images/chui-ying-li-practitioner.webp",
      imageAlt: "Portrait of Chui Ying Li (Andrea), TCM practitioner",
      paragraphs: [
        "Andrea leads women's health, fertility support and postnatal care across our <a href=\"/locations/reading-clinic\">Reading</a> and <a href=\"/locations/wimbledon-clinic\">Wimbledon</a> clinics. She is a British Acupuncture Council (MBAcC) and Association of Traditional Chinese Medicine &amp; Acupuncture (ATCM) registered practitioner, with an MSc in Chinese Medicine from the Chinese University of Hong Kong (2010).",
        "Menopause and perimenopause consultations are available in English, Cantonese and Mandarin. She will explain whether acupuncture, herbal medicine or both may be appropriate after assessment — without guaranteeing outcomes.",
      ],
      profileHref: "/our-practitioners",
      regs: "ATCM FM0250004 · MBAcC 963093",
    },
    related: ["fertility-support", "menstrual-pain", "anxiety-sleep"],
    expect: [
      {
        title: "History and medications",
        body:
          "We ask about cycle changes, HRT, contraception, thyroid disease and mental health, plus sleep, flushes and joint symptoms. Unexpected bleeding after menopause should be discussed with your GP before complementary care.",
      },
      {
        title: "TCM consultation",
        body:
          "Pulse and tongue assessment sit alongside your history so treatment is tailored — not a one-size-fits-all menopause protocol.",
      },
      {
        title: "Clear next steps",
        body:
          "You receive a plain-language plan: acupuncture, herbs or both; suggested review timing; and when to stay in touch with your GP or menopause service.",
      },
    ],
    safety: {
      intro: "Complementary care waits until urgent or gynaecological red flags are addressed. Seek prompt medical assessment if you notice:",
      items: [
        "Bleeding after menopause, or bleeding that is suddenly much heavier than usual",
        "Postmenopausal bleeding on HRT — follow your prescriber’s advice and GP review",
        "Severe depression, self-harm thoughts or inability to function — contact NHS 111 or urgent care",
        "Unexplained weight loss, fever or pelvic pain that is new and persistent",
      ],
    },
    faqs: [
      {
        q: "What does the evidence say about acupuncture for menopause?",
        a:
          "NICE menopause guidance focuses on individualised NHS care; HRT is offered for vasomotor symptoms when appropriate. NICE’s evidence review found uncertain benefit of acupuncture for hot flushes compared with sham acupuncture. We discuss what that means for you at consultation — we do not promise specific results. See our evidence section above and <a href=\"https://www.nice.org.uk/guidance/ng23\" rel=\"noopener noreferrer\" target=\"_blank\">NICE NG23</a>.",
      },
      {
        q: "Can acupuncture help menopause symptoms?",
        a:
          "Some people choose <a href=\"/clinical-services/acupuncture\">acupuncture</a> for hot flushes, night sweats, sleep disruption or joint discomfort during perimenopause and menopause. Response varies and research is mixed. We assess whether it is appropriate for you and do not describe it as a cure or an HRT replacement.",
      },
      {
        q: "Do you prescribe HRT or replace my menopause clinic?",
        a:
          "No. HRT and specialist menopause care are provided by your GP or NHS menopause service. TCM is complementary — herbs and acupuncture are offered only within our scope after consultation.",
      },
      {
        q: "Can I use Chinese herbs alongside HRT?",
        a:
          "Sometimes, after a full medication review. Tell us everything you take — including HRT, blood thinners and thyroid medication — before any herbal prescription.",
      },
      {
        q: "Where can I book menopause acupuncture in Reading or Wimbledon?",
        a:
          "At our <a href=\"/locations/reading-clinic\">Reading clinic</a> (Monday, Wednesday, Friday) and <a href=\"/locations/wimbledon-clinic\">Wimbledon clinic</a> (Saturday). WhatsApp to book — no GP referral required for an initial assessment.",
      },
      {
        q: "Can I claim through health insurance?",
        a:
          "We are recognised by AXA Health, Vitality, Aviva and WPA. Cover depends on your policy and usually relates to eligible acupuncture. See <a href=\"/pricing-and-insurance\">Pricing &amp; Insurance</a>.",
      },
    ],
  },
  {
    slug: "menstrual-pain",
    href: "/conditions#womens-health",
    label: "Menstrual Pain",
    category: "womens-health",
    status: "listed",
    summary:
      "Dysmenorrhoea, irregular cycles and cycle-related pain. Timing of treatment is matched to the menstrual phase.",
  },
  {
    slug: "postnatal-recovery",
    href: "/conditions#womens-health",
    label: "Postnatal Recovery",
    category: "womens-health",
    status: "listed",
    summary:
      "Postnatal musculoskeletal recovery, pelvic adjustment and constitutional support after birth.",
  },

  // ── Internal, skin & sleep ────────────────────────────
  {
    slug: "anxiety-sleep",
    href: "/conditions#internal",
    label: "Anxiety & Sleep",
    category: "internal",
    status: "listed",
    summary:
      "Stress-related insomnia, racing mind and anxiety presentations. Acupuncture and, where appropriate, herbal medicine.",
  },
  {
    slug: "digestive-health",
    href: "/conditions#internal",
    label: "Digestive Health",
    category: "internal",
    status: "listed",
    summary:
      "Bloating, IBS-type presentations and digestive irregularity approached as a systemic pattern, not only a gut symptom.",
  },
  {
    slug: "skin-conditions",
    href: "/conditions#internal",
    label: "Skin Conditions",
    category: "internal",
    status: "listed",
    summary:
      "Eczema, acne, rosacea and chronic urticaria — often combining herbal prescription with acupuncture.",
  },
  {
    slug: "fatigue",
    href: "/conditions#internal",
    label: "Fatigue",
    category: "internal",
    status: "listed",
    summary:
      "Persistent tiredness and post-illness depletion. Assessed against sleep, digestion and musculoskeletal load.",
  },
];

export const liveConditions = conditions.filter(
  (c): c is LiveCondition => c.status === "live",
);

export const listedConditions = conditions.filter(
  (c): c is ListedCondition => c.status === "listed",
);

export function getLiveCondition(slug: string): LiveCondition | undefined {
  return liveConditions.find((c) => c.slug === slug);
}

export function conditionsInCategory(id: ConditionCategoryId): Condition[] {
  return conditions.filter((c) => c.category === id);
}

export function getConditionBySlug(slug: string): Condition | undefined {
  return conditions.find((c) => c.slug === slug);
}
