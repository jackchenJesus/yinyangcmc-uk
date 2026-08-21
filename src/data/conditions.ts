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
  intro: string[];
  symptoms: string[];
  causes: { title: string; body: string }[];
  treatments: ConditionTreatment[];
  patterns: { title: string; body: string }[];
  related: string[];
  faqs: { q: string; a: string }[];
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
    href: "/back-pain",
    label: "Back Pain",
    category: "pain-msk",
    status: "live",
    summary:
      "Mechanical, inflammatory and chronic lower-back pain treated with acupuncture, Tui Na and bone-setting — not painkillers alone.",
    title: "Back Pain Treatment Wimbledon & Reading | Yin Yang CMC",
    description:
      "Acupuncture, Tui Na and bone-setting for back pain in Wimbledon and Reading. British Acupuncture Council registered. No GP referral needed.",
    h1: "Back Pain Treatment in Wimbledon & Reading",
    eyebrow: "Conditions · Back Pain",
    lede: "Painkillers manage the sensation. They do not resolve what is driving it. We assess the structural and physiological root — then treat it directly.",
    image: "/images/back_pain_treatment-vMLmusxJIAVKmYK5.png",
    intro: [
      "Back pain is one of the most common reasons people in the UK reduce activity, take time off work, or live with daily discomfort that gradually wears them down. It is a symptom with many drivers — not a single diagnosis.",
      "Whether the pain sits in the lower back, mid-spine, or radiates into the hips, our practitioners combine classical TCM diagnosis with modern musculoskeletal assessment. Treatment is typically a combination of acupuncture, Tui Na and bone-setting, calibrated to your presentation — not a fixed package.",
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
        href: "/acupuncture",
        label: "Acupuncture",
        why: "Reduces local inflammation, modulates nerve signalling, and interrupts the pain-spasm cycle that maintains many chronic back presentations.",
      },
      {
        href: "/tui-na-massage",
        label: "Tui Na",
        why: "Targets fascia, deep musculature and spinal joints — releasing adhesions and restoring range of motion where mechanical restriction has become entrenched.",
      },
      {
        href: "/bone-setting",
        label: "Bone Setting",
        why: "Where joint misalignment contributes to pain, Zheng Gu addresses the structural component directly. Often introduced once acute inflammation has settled.",
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
    related: ["sciatica-treatment", "sports-injuries", "shoulder-pain"],
    faqs: [
      {
        q: "How many sessions will I need for back pain?",
        a: "Acute presentations often show change within 2–4 sessions. Chronic back pain is typically reviewed over a 6–8 session course. Your practitioner will give a realistic timeline at the first assessment and adjust according to your response — we do not prescribe a fixed package in advance.",
      },
      {
        q: "Is acupuncture useful for back pain?",
        a: "Acupuncture is widely used as part of care for musculoskeletal back pain. It is not a replacement for emergency or surgical assessment where those are indicated. Your practitioner will be clear about what is appropriate for your presentation.",
      },
      {
        q: "Do you treat older or post-surgical patients?",
        a: "Yes, where TCM is an appropriate adjunct. We review your medical history, imaging and current medications at the first appointment. If there is clinical uncertainty, we will advise you to speak with your GP or specialist first.",
      },
      {
        q: "Can I use health insurance?",
        a: "We are recognised by AXA Health, Vitality, Aviva and WPA. Coverage varies by policy — confirm with your insurer before the first visit.",
      },
    ],
  },
  {
    slug: "sciatica-treatment",
    href: "/sciatica-treatment",
    label: "Sciatica",
    category: "pain-msk",
    status: "live",
    summary:
      "Nerve-root and piriformis-related sciatica — sharp, burning or electric pain down the leg — treated at the compression, not only the sensation.",
    title: "Sciatica Treatment Wimbledon & Reading | Yin Yang CMC",
    description:
      "Sciatica treatment in Wimbledon and Reading. Acupuncture, Tui Na and bone-setting for nerve compression and radiating leg pain. No GP referral needed.",
    h1: "Sciatica Treatment in Wimbledon & Reading",
    eyebrow: "Conditions · Sciatica",
    lede: "Sciatica is not just back pain. It is nerve pain travelling from the lower back through the buttock and down the leg. We treat the compression driving it.",
    image: "/images/sciatica-lower-back-pain-CiEnhdaob4WbteY2.png",
    intro: [
      "Sciatica describes pain from compression or irritation of the sciatic nerve — the longest nerve in the body, running from the lumbar spine through the buttock and down each leg to the foot. When compressed, pain signals can fire anywhere along that path.",
      "A trapped nerve, pinched nerve, or compressed nerve root in the lower back are common terms for the same mechanism. Treatment depends on which structure is compressing the nerve — disc, canal, facet, or piriformis — and on the TCM pattern maintaining the presentation.",
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
        href: "/acupuncture",
        label: "Acupuncture",
        why: "Used to modulate nerve pain signalling and local inflammation along the affected root pathway — including paravertebral and distal points selected after assessment.",
      },
      {
        href: "/tui-na-massage",
        label: "Tui Na",
        why: "Manual mobilisation of the lumbar and gluteal tissues, including work around the piriformis where muscle compression is contributing.",
      },
      {
        href: "/bone-setting",
        label: "Bone Setting",
        why: "Where joint restriction or alignment is feeding nerve-root irritation, Zheng Gu may be introduced once acute inflammation has settled.",
      },
      {
        href: "/moxibustion",
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
    related: ["back-pain", "sports-injuries", "frozen-shoulder"],
    faqs: [
      {
        q: "How do I know if it is sciatica or ordinary back pain?",
        a: "Pain that stays in the back or hip is more often muscular or joint-related. True sciatica follows the nerve path — frequently past the knee into the calf or foot, sometimes with numbness or tingling. We assess both presentations at the first appointment.",
      },
      {
        q: "How many sessions will I need?",
        a: "Many patients notice change within 4–6 sessions. Acute cases can respond faster. Chronic or disc-related presentations are reviewed over a longer course. We reassess after every session.",
      },
      {
        q: "Can I have treatment if I already have an MRI?",
        a: "Yes. Bring any imaging you have — it is useful but not required. TCM assessment adds the layer imaging cannot show: why recovery has stalled and which pattern is maintaining the pain.",
      },
      {
        q: "Do you treat sciatica at both clinics?",
        a: "Yes. Reading (Mon / Wed / Fri) and Wimbledon (Saturday). Same practitioners and protocol at both.",
      },
    ],
  },
  {
    slug: "shoulder-pain",
    href: "/shoulder-pain",
    label: "Shoulder Pain",
    category: "pain-msk",
    status: "live",
    summary:
      "Rotator cuff strain, impingement and postural shoulder pain — identified at source before treatment, including pain referred from the neck.",
    title: "Shoulder Pain Treatment Wimbledon & Reading | Yin Yang CMC",
    description:
      "Shoulder pain treatment in Wimbledon and Reading. Acupuncture, Tui Na, bone-setting and cupping for rotator cuff, impingement and postural strain.",
    h1: "Shoulder Pain Treatment in Wimbledon & Reading",
    eyebrow: "Conditions · Shoulder Pain",
    lede: "Pain lifting the arm, reaching overhead, or lying on that side is rarely 'just stiffness'. We identify whether the source is the cuff, the joint, or the neck — then treat that.",
    image: "/images/acupuncture-for-shoulder-pain-k9uul1g0Hqlp9Qaa.webp",
    intro: [
      "The shoulder is the most mobile joint in the body — held by the rotator cuff, tendons and ligaments rather than a deep bony socket. That mobility makes it prone to strain, inflammation and restriction from posture, overuse, sport and gym training.",
      "Shoulder pain can also be referred from the neck, or signal frozen shoulder or impingement. Identifying the true source is essential before treatment begins. Painkillers mask discomfort without restoring how the joint moves.",
    ],
    symptoms: [
      "Sharp pain when lifting the arm or reaching overhead",
      "Aching across the shoulder and upper back",
      "Pain that wakes you when lying on that side",
      "Stiff, restricted movement or catching on certain angles",
      "Neck and shoulder pain together",
    ],
    causes: [
      {
        title: "Rotator cuff strain & tendinopathy",
        body: "Strain or tearing of the tendons that stabilise the shoulder. Common after lifting, sport, or repetitive overhead movement.",
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
        href: "/acupuncture",
        label: "Acupuncture",
        why: "Used to reduce local inflammation and muscle guarding around the rotator cuff and scapular stabilisers, and to address neck-referred patterns where relevant.",
      },
      {
        href: "/tui-na-massage",
        label: "Tui Na",
        why: "Mobilises the glenohumeral joint and surrounding soft tissue — restoring range where postural loading and overuse have restricted movement.",
      },
      {
        href: "/bone-setting",
        label: "Bone Setting",
        why: "For joint restriction and scapular or cervical contribution that manual mobilisation alone does not resolve.",
      },
      {
        href: "/cupping",
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
    related: ["frozen-shoulder", "sports-injuries", "back-pain"],
    faqs: [
      {
        q: "Is this frozen shoulder or a rotator cuff problem?",
        a: "With a rotator cuff injury, someone else can usually still lift your arm (passive movement is preserved). With frozen shoulder, the joint is restricted in both active and passive movement. We distinguish this at consultation — the treatment plan is not the same.",
      },
      {
        q: "How many sessions will I need?",
        a: "Many patients notice improvement within 4–6 sessions. Acute strain often responds faster. Frozen shoulder follows a longer timeline. We reassess after every visit.",
      },
      {
        q: "Can I continue going to the gym?",
        a: "Often yes, with modification. Your practitioner will advise which movements to pause and which to keep so the tendon or joint can settle without full deconditioning.",
      },
      {
        q: "Do you treat neck-related shoulder pain?",
        a: "Yes. If the pain travels with neck stiffness, we assess the cervical spine as a possible source rather than treating the shoulder in isolation.",
      },
    ],
  },
  {
    slug: "frozen-shoulder",
    href: "/frozen-shoulder",
    label: "Frozen Shoulder",
    category: "pain-msk",
    status: "live",
    summary:
      "Adhesive capsulitis — progressive pain then stiffness. Early treatment shortens a course that can otherwise last 18 months to 3 years.",
    title: "Frozen Shoulder Treatment Wimbledon & Reading | Yin Yang CMC",
    description:
      "Frozen shoulder (adhesive capsulitis) treatment in Wimbledon and Reading. Acupuncture, Tui Na and bone-setting to restore movement and reduce pain.",
    h1: "Frozen Shoulder Treatment in Wimbledon & Reading",
    eyebrow: "Conditions · Frozen Shoulder",
    lede: "The joint locks gradually — first with sharp pain, then with stiffness that makes lifting, reaching and sleeping difficult. We treat both the inflammation and the adhesion.",
    image: "/images/acupuncture_for_frozen_shoulder-LYlyaUQ7GqsYzZB5.webp",
    intro: [
      "Frozen shoulder — adhesive capsulitis — occurs when the joint capsule becomes inflamed, then thickens and tightens. Range of motion is restricted in all directions. Most patients cannot lift the arm, reach behind the back, or dress without pain.",
      "Night pain that disrupts sleep is a hallmark. Without treatment, recovery can take 18 months to 3 years. Early intervention shortens that timeline. Painkillers mask symptoms; they do not restore range of motion.",
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
        body: "Diabetic patients are 2–4× more likely to develop frozen shoulder. Thyroid disorders also increase risk.",
      },
    ],
    treatments: [
      {
        href: "/acupuncture",
        label: "Acupuncture",
        why: "Used in the freezing stage to reduce inflammatory pain and slow further restriction — before the joint fully locks.",
      },
      {
        href: "/tui-na-massage",
        label: "Tui Na",
        why: "In the frozen and thawing stages, manual work focuses on breaking adhesions and restoring range that needling alone cannot open.",
      },
      {
        href: "/bone-setting",
        label: "Bone Setting",
        why: "Joint mobilisation for the locked capsule, introduced when inflammation has settled enough for structural work.",
      },
      {
        href: "/moxibustion",
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
    related: ["shoulder-pain", "sports-injuries", "back-pain"],
    faqs: [
      {
        q: "Which stage of frozen shoulder am I in?",
        a: "Freezing (2–9 months): pain rising, movement shrinking week by week. Frozen (4–12 months): pain may plateau but stiffness is worst. Thawing (6–24 months): movement gradually returns. Treatment emphasis changes at each stage — we assess this at the first visit.",
      },
      {
        q: "How is frozen shoulder different from rotator cuff injury?",
        a: "A rotator cuff injury usually still allows passive movement — someone else can lift your arm. With frozen shoulder the joint is locked both ways. That distinction changes the treatment plan.",
      },
      {
        q: "Will it resolve on its own?",
        a: "It can, but the natural course is often 18 months to 3 years, and residual stiffness is common. Treatment is aimed at shortening that course and recovering usable range sooner.",
      },
      {
        q: "Can I claim through health insurance?",
        a: "We are recognised by AXA Health, Vitality, Aviva and WPA. Check your policy terms before booking.",
      },
    ],
  },
  {
    slug: "sports-injuries",
    href: "/sports-injuries",
    label: "Sports Injuries",
    category: "pain-msk",
    status: "live",
    summary:
      "Acute strain, overuse and lingering sports injuries — acupuncture, Tui Na and bone-setting as an adjunct to training, not a replacement for sports medicine.",
    title: "Sports Injury Treatment Wimbledon & Reading | Yin Yang CMC",
    description:
      "Sports injury treatment in Wimbledon and Reading. Acupuncture, Tui Na and bone-setting for strains, overuse injuries and stalled recovery. No GP referral needed.",
    h1: "Sports Injury Treatment in Wimbledon & Reading",
    eyebrow: "Conditions · Sports Injuries",
    lede: "You trained. Now the knee catches on the stairs, the shoulder pulls overhead, or the lower back seizes after a run. We treat the tissue and the compensation pattern — not only the sore spot.",
    image: "/images/sports-injuries-orthopaedics-7F9Mh61pjr43DjEH.png",
    intro: [
      "Sports injuries range from acute trauma to cumulative overuse. Rest and anti-inflammatories often settle symptoms without restoring full biomechanical function. That gap is where TCM is used as a parallel clinical system — tissue repair, pain modulation and joint mobility — not as a replacement for sports medicine or imaging where those are needed.",
      "Plans are built around your sport, training volume and recovery window. A runner's Achilles tendinopathy is not treated as a footballer's ankle sprain.",
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
        href: "/acupuncture",
        label: "Acupuncture",
        why: "Used to modulate inflammation and pain signalling at the injury site, and to support range-of-motion restoration alongside load management.",
      },
      {
        href: "/tui-na-massage",
        label: "Tui Na",
        why: "Graded manual pressure to release myofascial restriction and restore tissue glide around the injured structure.",
      },
      {
        href: "/bone-setting",
        label: "Bone Setting",
        why: "Corrects joint restriction that persists after injury and feeds compensation through the rest of the chain.",
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
    related: ["back-pain", "shoulder-pain", "sciatica-treatment"],
    faqs: [
      {
        q: "Can I still train while having treatment?",
        a: "In most cases, yes — with the load adjusted. Treatment is timed around your training week so sessions support recovery rather than interrupting it. Your practitioner will be specific about what to pause.",
      },
      {
        q: "What if physiotherapy has already plateaued?",
        a: "Physio and TCM address different layers. Where strengthening has stalled, acupuncture is often used to change the inflammatory and neurological environment that determines whether tissue actually heals. Many patients use both.",
      },
      {
        q: "Do I need a GP or physio referral?",
        a: "No. Book directly at Reading or Wimbledon. Bring any MRI, ultrasound or X-ray reports if you have them — useful, not required.",
      },
      {
        q: "Do you only treat competitive athletes?",
        a: "No. Club tennis, parkrun, gym training and weekend cycling are the majority of the caseload. The clinical approach is the same: accurate diagnosis, targeted treatment, measurable change.",
      },
    ],
  },

  // ── Pain & MSK — listed (pages to follow) ─────────────
  {
    slug: "neck-pain",
    href: "/conditions#pain-msk",
    label: "Neck Pain",
    category: "pain-msk",
    status: "listed",
    summary:
      "Cervical stiffness, desk-related neck pain and pain referring into the shoulder or arm. Assessed at both clinics.",
  },
  {
    slug: "knee-pain",
    href: "/conditions#pain-msk",
    label: "Knee Pain",
    category: "pain-msk",
    status: "listed",
    summary:
      "Overuse, osteoarthritis-related discomfort and sports-related knee presentations — treated as part of musculoskeletal care.",
  },
  {
    slug: "headaches-migraines",
    href: "/conditions#pain-msk",
    label: "Headaches & Migraines",
    category: "pain-msk",
    status: "listed",
    summary:
      "Tension-type headache and migraine presentations, including neck-driven patterns. Enquire if this is your main concern.",
  },

  // ── Women's health ────────────────────────────────────
  {
    slug: "fertility-support",
    href: "/conditions#womens-health",
    label: "Fertility Support",
    category: "womens-health",
    status: "listed",
    summary:
      "Acupuncture and herbal medicine as an adjunct around fertility and IVF cycles — assessed individually, not as a package.",
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
