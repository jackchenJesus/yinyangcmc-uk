import type { LiveCondition } from "./conditions";
import { expansionConditionsB } from "./conditions-expansion-b";

const ins = {
  q: "Can I claim through health insurance?",
  a: "We are recognised by AXA Health, Vitality, Aviva and WPA. Cover depends on your policy and usually relates to eligible acupuncture. See <a href=\"/pricing-and-insurance\">Pricing &amp; Insurance</a>.",
};

export const expansionConditions: LiveCondition[] = [
  {
    slug: "arthritis",
    href: "/conditions/arthritis",
    label: "Arthritis",
    category: "pain-msk",
    status: "live",
    summary:
      "Osteoarthritis and other medically diagnosed joint arthritis — acupuncture and Tui Na as complementary care, not a replacement for rheumatology when that is needed.",
    title: "Acupuncture for Arthritis in Reading & Wimbledon | Yin Yang CMC",
    description:
      "Acupuncture and manual therapy for medically diagnosed arthritis at our Reading and Wimbledon clinics. Complementary care after assessment — not a substitute for specialist rheumatology.",
    ogTitle: "Acupuncture for Arthritis | Reading & Wimbledon",
    ogDescription:
      "Stiff, weather-sensitive joints with a medical arthritis diagnosis. We may support symptoms with acupuncture and Tui Na after assessment.",
    h1: "Acupuncture for Arthritis in Reading & Wimbledon",
    eyebrow: "Conditions · Arthritis",
    lede: "Arthritis is a medical diagnosis, not a vague ache. Where it is already confirmed, acupuncture may be used as part of complementary care for pain and stiffness — alongside, not instead of, your GP or rheumatology advice.",
    image: "/images/generated/arthritis-patient-hero.webp",
    imageAlt: "Person holding arthritic knuckles during a quiet moment at home",
    heroImage: "/images/generated/arthritis-patient-hero.webp",
    sectionImage: "/images/acupuncture-needles-back.webp",
    sectionImageAlt: "Close-up of acupuncture needles being placed on a patient's back during treatment",
    intro: [
      "People search for acupuncture for arthritis when morning stiffness, weather-sensitive joints or reduced grip start to shrink what they can do. Osteoarthritis of the knee, hip, hands or spine is the picture we see most often. Inflammatory types such as rheumatoid arthritis belong under medical supervision; we do not diagnose them from a webpage.",
      "Treatment here is complementary. We look at how the joint is moving, which neighbouring joints are compensating, and whether <a href=\"/conditions/joint-pain\">joint pain</a> is local or part of a wider pattern. Related pages include <a href=\"/conditions/knee-pain\">knee pain</a>, <a href=\"/conditions/hip-pain\">hip pain</a> and <a href=\"/conditions/shoulder-pain\">shoulder pain</a>.",
    ],
    symptoms: [
      "Stiffness after rest that eases a little with gentle movement",
      "Aching in a named joint that has already been labelled arthritis",
      "Reduced grip, stride or reach that has crept in over months",
      "Weather-sensitive joints that dislike damp or cold",
      "Flare-ups after longer walks, gardening or desk work",
    ],
    causes: [
      {
        title: "Wear and load on cartilage",
        body: "Osteoarthritis involves change in cartilage and the bone beneath it. Activity, previous injury and age all contribute. We treat the presentation in front of us and respect any existing X-ray or specialist letter.",
      },
      {
        title: "Inflammatory disease",
        body: "Rheumatoid and other inflammatory arthritides need medical diagnosis and monitoring. Acupuncture, if used, is adjunctive. Hot, swollen, rapidly worsening joints need medical review first.",
      },
      {
        title: "Compensation through the chain",
        body: "A stiff hip changes the knee; stiff hands change the elbow and neck. Treating one joint in isolation often disappoints.",
      },
    ],
    treatments: [
      {
        href: "/clinical-services/acupuncture",
        label: "Acupuncture",
        why: "Local and distal points may support pain and muscle guarding around a chronically irritated joint after assessment.",
      },
      {
        href: "/clinical-services/tui-na-massage",
        label: "Tui Na",
        why: "Graded manual work around the joint and the muscles that control it — never forced through a hot, locked joint.",
      },
      {
        href: "/clinical-services/moxibustion",
        label: "Moxibustion",
        why: "Sometimes added for chronic, cold-sensitive stiffness where warming methods fit the TCM pattern.",
      },
    ],
    patterns: [
      {
        title: "Wind-Cold-Damp Bi 風寒濕痺",
        body: "Weather-sensitive, heavy joints that dislike cold and inactivity — a common TCM reading of chronic arthritis.",
      },
      {
        title: "Kidney-Liver Deficiency 肝腎虧虛",
        body: "Longer-standing joint weakness and slower recovery, often in the knees, hips or lumbar region.",
      },
      {
        title: "Qi & Blood Stagnation 氣滯血瘀",
        body: "A more local, activity-related ache after use, rather than a systemic inflammatory picture.",
      },
    ],
    related: ["joint-pain", "knee-pain", "hip-pain"],
    expect: [
      {
        title: "Your existing diagnosis",
        body: "Bring GP, rheumatology or imaging letters if you have them. We do not replace that pathway; we work with it.",
      },
      {
        title: "Which joints, which days",
        body: "We map flare versus baseline, morning stiffness, and whether the spine, hands or weight-bearing joints lead.",
      },
      {
        title: "A reviewed plan",
        body: "Where acupuncture and Tui Na are appropriate, we start and then judge the response. There is no fixed session count advertised in advance.",
      },
    ],
    safety: {
      intro: "Do not use this page to delay medical care. Seek GP or urgent assessment if you have:",
      items: [
        "A hot, red, rapidly swelling joint",
        "Fever with joint pain",
        "Sudden inability to bear weight",
        "A new inflammatory picture that has not been medically assessed",
      ],
    },
    faqs: [
      {
        q: "Can acupuncture help arthritis?",
        a: "Some people use acupuncture as part of care for osteoarthritic pain and stiffness. It may help with pain and muscle guarding. It does not reverse cartilage loss or replace disease-modifying medicine for inflammatory arthritis.",
      },
      {
        q: "Do you treat rheumatoid arthritis?",
        a: "Rheumatoid arthritis is a medical condition. If you already have a rheumatology plan, we can discuss whether complementary acupuncture is appropriate. We do not diagnose or manage immunosuppressive treatment.",
      },
      {
        q: "Is this the same as general joint pain?",
        a: "Not always. See our <a href=\"/conditions/joint-pain\">joint pain</a> page if you do not yet have an arthritis diagnosis. Named arthritis is a narrower question.",
      },
      {
        q: "Will I still need my usual painkillers?",
        a: "That is a conversation with your GP or pharmacist. We do not advise stopping prescribed medicine.",
      },
      {
        q: "Is treatment available in Reading and Wimbledon?",
        a: "Yes. <a href=\"/locations/reading-clinic\">Reading</a> midweek and <a href=\"/locations/wimbledon-clinic\">Wimbledon</a> on Saturday. No GP referral is required to book.",
      },
      ins,
    ],
  },
  {
    slug: "joint-pain",
    href: "/conditions/joint-pain",
    label: "Joint Pain",
    category: "pain-msk",
    status: "live",
    summary:
      "Aches and stiffness in one or several joints when the label is still unclear — assessed against local strain, referral and any existing medical diagnosis.",
    title: "Acupuncture for Joint Pain in Reading & Wimbledon | Yin Yang CMC",
    description:
      "Acupuncture for joint pain, stiffness and reduced movement in Reading and Wimbledon. We assess whether the source is local, referred, or already diagnosed as arthritis.",
    ogTitle: "Acupuncture for Joint Pain | Reading & Wimbledon",
    ogDescription:
      "Sore joints without a single tidy label. Assessment first, then acupuncture and manual therapy if appropriate.",
    h1: "Acupuncture for Joint Pain in Reading & Wimbledon",
    eyebrow: "Conditions · Joint Pain",
    lede: "Joint pain is a symptom, not a diagnosis. We assess whether it is local strain, referred from elsewhere, or already named as arthritis — then decide whether acupuncture is a reasonable next step.",
    image: "/images/generated/joint-pain-patient-hero.webp",
    imageAlt: "Person sitting on a treatment couch with a hand on a stiff knee",
    heroImage: "/images/generated/joint-pain-patient-hero.webp",
    sectionImage: "/images/acupuncture-needles-back.webp",
    sectionImageAlt: "Close-up of acupuncture needles being placed on a patient's back during treatment",
    intro: [
      "People look for joint pain treatment when a knee, wrist, ankle or several joints ache without a neat explanation. The sore joint is a starting point. It is not automatically <a href=\"/conditions/arthritis\">arthritis</a>, a sports injury, or a trapped nerve.",
      "We therefore treat joint pain as a differential. Dedicated pages already cover <a href=\"/conditions/knee-pain\">knee</a>, <a href=\"/conditions/hip-pain\">hip</a>, <a href=\"/conditions/wrist-pain\">wrist</a>, <a href=\"/conditions/ankle-pain\">ankle</a> and <a href=\"/conditions/elbow-pain\">elbow</a> presentations. This page is for the wider question: several joints, an unclear source, or pain that moves.",
    ],
    symptoms: [
      "Aching or stiffness in one or more joints after use",
      "A joint that feels unreliable on stairs or uneven ground",
      "Pain that seems to hop between neighbouring joints",
      "Morning stiffness that is not yet medically labelled",
      "Discomfort that sits around a joint rather than in a muscle belly",
    ],
    causes: [
      {
        title: "Local overload",
        body: "Tendons, joint surfaces and surrounding fascia can all generate pain after a change in work, training or daily load.",
      },
      {
        title: "Referral from the spine",
        body: "Neck and lower-back problems are frequently felt in a shoulder, hip or knee. Treating only the noisy joint then fails.",
      },
      {
        title: "Systemic or inflammatory pictures",
        body: "Several joints, marked swelling, or morning stiffness lasting hours needs medical assessment. We are clear when clinic treatment should wait.",
      },
    ],
    treatments: [
      {
        href: "/clinical-services/acupuncture",
        label: "Acupuncture",
        why: "Point selection follows whether the picture is more local, referred, or constitutional — decided after assessment.",
      },
      {
        href: "/clinical-services/tui-na-massage",
        label: "Tui Na",
        why: "Manual therapy for the soft tissue that is guarding the joint, without forcing range that the joint will not give that day.",
      },
      {
        href: "/clinical-services/bone-setting",
        label: "Bone Setting",
        why: "Used only when neighbouring joint restriction is part of the picture, not as a routine crack for every sore joint.",
      },
    ],
    patterns: [
      {
        title: "Bi Syndrome 痺證",
        body: "Obstruction of Qi and Blood in the channels, often described as heavy, weather-sensitive joint ache.",
      },
      {
        title: "Qi Stagnation 氣滯",
        body: "A tighter, more activity-related ache that eases when movement is restored.",
      },
      {
        title: "Deficiency of Liver and Kidney 肝腎不足",
        body: "Recurrent joint complaints with slower recovery, often alongside lumbar or knee weakness.",
      },
    ],
    related: ["arthritis", "knee-pain", "hip-pain"],
    expect: [
      {
        title: "Which joint, which trigger",
        body: "We map location, swelling, locking, and whether the spine or a neighbouring joint is involved.",
      },
      {
        title: "When we will not treat first",
        body: "A hot swollen joint, trauma, or a systemic picture belongs with medical services first.",
      },
      {
        title: "Then a matched combination",
        body: "Acupuncture, Tui Na and, where relevant, bone-setting are chosen for that picture.",
      },
    ],
    safety: {
      intro: "Joint pain can hide infection, fracture or inflammatory disease. Seek medical assessment if you have:",
      items: [
        "Heat, redness and rapid swelling",
        "Fever or feeling systemically unwell",
        "A recent fall or inability to use the joint",
        "Several joints flaring together without a diagnosis",
      ],
    },
    faqs: [
      {
        q: "Can acupuncture help joint pain?",
        a: "It may help with pain and muscle guarding around an irritated joint. It is not a diagnosis and it will not replace imaging or rheumatology when those are indicated.",
      },
      {
        q: "How is this different from the arthritis page?",
        a: "Use <a href=\"/conditions/arthritis\">arthritis</a> if that diagnosis is already in place. This page is for joint pain that is still being sorted, or that involves more than one region.",
      },
      {
        q: "Should I go to my GP first?",
        a: "If the joint is hot, locked, recently injured, or you feel unwell, yes. For longer-standing mechanical ache, you can book here without a referral.",
      },
      {
        q: "Do you treat several joints in one session?",
        a: "Often the main driver is treated first. Neighbouring joints are included when they are clearly part of the same chain.",
      },
      ins,
    ],
    ctaHeading: "Ready to have the joint picture assessed?",
  },
  {
    slug: "migraine",
    href: "/conditions/migraine",
    label: "Migraine",
    category: "pain-msk",
    status: "live",
    summary:
      "Migraine with or without aura — complementary acupuncture after medical assessment of red flags, distinct from everyday tension headache.",
    title: "Acupuncture for Migraine in Reading & Wimbledon | Yin Yang CMC",
    description:
      "Acupuncture for migraine in Reading and Wimbledon. Complementary care for people who already recognise migraine, including neck-driven and hormonal patterns — not a replacement for medical assessment of new or changing attacks.",
    ogTitle: "Acupuncture for Migraine | Reading & Wimbledon",
    ogDescription:
      "Pulsing head pain, light sensitivity or aura. We may support migraine care with acupuncture after assessment.",
    h1: "Acupuncture for Migraine in Reading & Wimbledon",
    eyebrow: "Conditions · Migraine",
    lede: "Migraine is more than a bad headache. If you already recognise pulsing pain, photophobia or aura, acupuncture may be used as complementary care — after medical red flags have been considered.",
    image: "/images/generated/migraine-patient-hero.webp",
    imageAlt: "Person sitting in low light with fingers at the temple during a migraine",
    heroImage: "/images/generated/migraine-patient-hero.webp",
    sectionImage: "/images/acupuncture-needles-back.webp",
    sectionImageAlt: "Close-up of acupuncture needles being placed on a patient's back during treatment",
    intro: [
      "People search for acupuncture for migraine when attacks interrupt work, sleep or family life, or when they want a non-drug option alongside whatever their GP has already advised. Migraine often includes nausea, light or sound sensitivity, and sometimes visual aura. Everyday tension-type pain is covered separately on our <a href=\"/conditions/headaches\">headaches</a> page.",
      "Neck stiffness, hormonal change and sleep disruption commonly sit in the same picture. We also look at <a href=\"/conditions/neck-pain\">neck pain</a> when the cervical region is clearly involved. A first, worst, or suddenly different headache needs urgent medical assessment, not a clinic booking.",
    ],
    symptoms: [
      "Throbbing or pulsing pain, often on one side",
      "Nausea, vomiting, or aversion to light and sound",
      "Visual aura, zigzag lights or temporary visual change before the pain",
      "Attacks that last hours and leave you wiped out afterwards",
      "Neck tightness that seems to usher the attack in",
    ],
    causes: [
      {
        title: "Neurological migraine tendency",
        body: "Migraine is a brain and nerve excitability pattern. We do not claim to switch that off. We may support associated muscle tension, sleep and TCM pattern.",
      },
      {
        title: "Neck and shoulder drivers",
        body: "Cervicogenic overlap is common. Desk posture, jaw clenching and upper-trap load can lower the threshold for an attack.",
      },
      {
        title: "Hormonal and sleep load",
        body: "Cycle-related migraine and poor sleep are frequent backgrounds. They are noted in clinic; they are not treated as a promise of hormonal cure.",
      },
    ],
    treatments: [
      {
        href: "/clinical-services/acupuncture",
        label: "Acupuncture",
        why: "Body and, where appropriate, scalp or distal points selected to the presentation. Not used during an undiagnosed thunderclap headache.",
      },
      {
        href: "/clinical-services/tui-na-massage",
        label: "Tui Na",
        why: "Gentle work for the neck and occiput when muscle guarding is part of the build-up — kept light if you are mid-attack.",
      },
      {
        href: "/clinical-services/auricular-therapy",
        label: "Auricular Therapy",
        why: "Ear points are sometimes used as an adjunct for headache and migraine patterns after assessment.",
      },
    ],
    patterns: [
      {
        title: "Liver Yang Rising 肝陽上亢",
        body: "Throbbing temples, irritability and a sense of pressure — a classic TCM migraine pattern explained in plain language.",
      },
      {
        title: "Phlegm-Damp Clouding 痰濁上擾",
        body: "Heavy, foggy head with nausea, often worse with rich food or poor sleep.",
      },
      {
        title: "Blood Deficiency 血虛",
        body: "Recurrent attacks with fatigue and a washed-out recovery, treated as a constitutional as well as local picture.",
      },
    ],
    related: ["headaches", "neck-pain", "shoulder-pain"],
    expect: [
      {
        title: "Is this migraine or something else?",
        body: "We ask about aura, duration, triggers and any GP or neurology letters. New or changing attacks are redirected to medical care.",
      },
      {
        title: "Between attacks, not in A&E",
        body: "Most acupuncture for migraine is planned between episodes, or very gently if you arrive in a milder build-up.",
      },
      {
        title: "A reviewed course",
        body: "Frequency of attacks is the usual measure, not a guaranteed empty diary. We set a review point rather than a promise.",
      },
    ],
    safety: {
      intro: "A sudden, severe or unfamiliar headache can be a medical emergency. Seek urgent NHS or emergency care if you have:",
      items: [
        "A thunderclap headache (worst ever, peaking in seconds to minutes)",
        "Headache with fever, neck stiffness, rash, confusion or seizure",
        "New neurological weakness, speech change or visual loss that is not your usual aura",
        "Headache after a head injury",
      ],
    },
    faqs: [
      {
        q: "Can acupuncture help migraine?",
        a: "Some people use acupuncture as part of migraine care. It may help with attack frequency or associated neck tension. It is not a cure, and it is not appropriate for a first or changing severe headache until medical assessment has taken place.",
      },
      {
        q: "Is migraine the same as a headache?",
        a: "No. See <a href=\"/conditions/headaches\">headaches</a> for tension-type and neck-driven pain without the migraine cluster of symptoms. Many people have both at different times.",
      },
      {
        q: "Can I come during an attack?",
        a: "Sometimes, if you can travel and tolerate a quiet room. Many patients prefer to book between attacks. We will not needle through an undiagnosed emergency headache.",
      },
      {
        q: "Do I stop my migraine medication?",
        a: "No — that is a decision with your GP or neurologist. Acupuncture is complementary.",
      },
      ins,
    ],
  },
  {
    slug: "headaches",
    href: "/conditions/headaches",
    label: "Headaches",
    category: "pain-msk",
    status: "live",
    summary:
      "Tension-type and neck-driven headaches — acupuncture and Tui Na after red-flag screening, distinct from migraine.",
    title: "Acupuncture for Headaches in Reading & Wimbledon | Yin Yang CMC",
    description:
      "Acupuncture for tension-type and neck-related headaches in Reading and Wimbledon. Assessment first; migraine has its own page. New or severe headaches need medical care.",
    ogTitle: "Acupuncture for Headaches | Reading & Wimbledon",
    ogDescription:
      "Band-like pressure or neck-driven headache after desk work. Complementary acupuncture after assessment.",
    h1: "Acupuncture for Headaches in Reading & Wimbledon",
    eyebrow: "Conditions · Headaches",
    lede: "Most headaches we see are tension-type or neck-driven — a tight band, heavy occiput, or pain that starts in the shoulders. Migraine is a different pattern and has its own page.",
    image: "/images/generated/headaches-patient-hero.webp",
    imageAlt: "Office worker rubbing the back of the neck at a desk",
    heroImage: "/images/generated/headaches-patient-hero.webp",
    sectionImage: "/images/acupuncture-needles-back.webp",
    sectionImageAlt: "Close-up of acupuncture needles being placed on a patient's back during treatment",
    intro: [
      "People look for headache treatment when a dull pressure sits across the forehead, temples or base of the skull after screens, driving or poor sleep. That is often a tension-type or cervicogenic picture. Pulsing one-sided attacks with aura belong on our <a href=\"/conditions/migraine\">migraine</a> page.",
      "We assess the <a href=\"/conditions/neck-pain\">neck</a> and <a href=\"/conditions/shoulder-pain\">shoulders</a> because those tissues so often feed the headache. A first, worst, or suddenly different headache is a medical question first.",
    ],
    symptoms: [
      "A tight band around the head, worse later in the day",
      "Pain that starts in the neck or upper shoulders and climbs",
      "Pressure behind the eyes after screen work",
      "A heavy occiput that eases a little with heat or stretching",
      "Headaches that cluster in busy or poorly slept weeks",
    ],
    causes: [
      {
        title: "Muscle and fascia load",
        body: "Upper trapezius, suboccipitals and jaw muscles commonly refer into the head. Desk posture and clenching are frequent contributors.",
      },
      {
        title: "Cervical joint restriction",
        body: "Stiff upper-neck segments can produce a cervicogenic headache. We assess this; we do not crack a neck as a default.",
      },
      {
        title: "Stress and sleep",
        body: "A racing mind and short sleep lower the threshold for tension-type pain. TCM treats this as a pattern, not a character flaw.",
      },
    ],
    treatments: [
      {
        href: "/clinical-services/acupuncture",
        label: "Acupuncture",
        why: "Local neck and distal points may ease muscle guarding and the headache that rides on it.",
      },
      {
        href: "/clinical-services/tui-na-massage",
        label: "Tui Na",
        why: "Manual work for the neck, occiput and shoulders where tightness is maintaining the pain.",
      },
      {
        href: "/clinical-services/gua-sha",
        label: "Gua Sha",
        why: "Sometimes used over the upper back and neck for stagnation-type tightness, after skin is checked.",
      },
    ],
    patterns: [
      {
        title: "Liver Qi Stagnation 肝氣鬱結",
        body: "Headache with a tight chest, jaw clenching and a sense of being wound up.",
      },
      {
        title: "Wind-Cold Invasion 風寒",
        body: "Occipital ache with a stiff neck, often after a draught or a night in a cold room.",
      },
      {
        title: "Qi & Blood Deficiency 氣血虧虛",
        body: "Dull, empty headaches that worsen with fatigue rather than with tension alone.",
      },
    ],
    related: ["migraine", "neck-pain", "shoulder-pain"],
    expect: [
      {
        title: "Pattern, not a generic head protocol",
        body: "We distinguish tension-type, neck-driven and migraine-like pictures before choosing points.",
      },
      {
        title: "The neck is part of the visit",
        body: "Range, desk setup and jaw tension are asked about, because they so often matter.",
      },
      {
        title: "Medical filters first",
        body: "Red-flag headaches are sent to urgent care. Complementary treatment waits.",
      },
    ],
    safety: {
      intro: "Seek urgent medical assessment for:",
      items: [
        "Sudden severe or ‘worst ever’ headache",
        "Headache with fever, confusion, rash or neck stiffness",
        "New headache after 50, or headache that wakes you from sleep",
        "Headache with new weakness, speech or vision change",
      ],
    },
    faqs: [
      {
        q: "Can acupuncture help headaches?",
        a: "Many people use it for tension-type and neck-related headaches. It may help with muscle guarding and pain. It is not appropriate until a dangerous headache has been ruled out.",
      },
      {
        q: "I think I get migraines — which page should I read?",
        a: "If you have pulsing pain, nausea, photophobia or aura, start with <a href=\"/conditions/migraine\">migraine</a>. If you are unsure, say so on WhatsApp — we will not force the label from a form.",
      },
      {
        q: "Will you treat my neck as well?",
        a: "Usually, if the neck is part of the picture. See also <a href=\"/conditions/neck-pain\">neck pain</a>.",
      },
      {
        q: "Do I need a GP referral?",
        a: "Not for longer-standing tension-type pain. New or changing headaches should be discussed with a GP first.",
      },
      ins,
    ],
  },
  {
    slug: "plantar-fasciitis",
    href: "/conditions/plantar-fasciitis",
    label: "Plantar Fasciitis",
    category: "pain-msk",
    status: "live",
    summary:
      "First-step heel pain from plantar fascia irritation — acupuncture and Tui Na as complementary care alongside sensible load advice.",
    title: "Acupuncture for Plantar Fasciitis in Reading & Wimbledon | Yin Yang CMC",
    description:
      "Acupuncture for plantar fasciitis and first-step heel pain in Reading and Wimbledon. Complementary care after assessment — not a guaranteed cure of the fascia.",
    ogTitle: "Acupuncture for Plantar Fasciitis | Reading & Wimbledon",
    ogDescription:
      "Sharp heel pain on the first steps of the morning. We may support plantar fascia irritation with acupuncture and manual therapy.",
    h1: "Acupuncture for Plantar Fasciitis in Reading & Wimbledon",
    eyebrow: "Conditions · Plantar Fasciitis",
    lede: "The classic picture is a sharp sting under the heel on the first steps of the morning. Acupuncture may be used as complementary care for that irritation — not as a promise that the fascia will ‘reset’ on a timetable.",
    image: "/images/generated/plantar-fasciitis-patient-hero.webp",
    imageAlt: "Person holding the underside of the heel and arch",
    heroImage: "/images/generated/plantar-fasciitis-patient-hero.webp",
    sectionImage: "/images/acupuncture-needles-back.webp",
    sectionImageAlt: "Close-up of acupuncture needles being placed on a patient's back during treatment",
    intro: [
      "Plantar fasciitis is irritation of the thick band of tissue under the foot that supports the arch. People describe first-step pain, then a duller ache after they have been on their feet. It is not the same as every <a href=\"/conditions/foot-pain\">foot pain</a>, nor automatically an <a href=\"/conditions/achilles-tendinitis\">Achilles</a> problem — though those pages sit next door.",
      "Load matters: new trainers, a jump in walking or running, long days on hard floors. We also look at the <a href=\"/conditions/ankle-pain\">ankle</a> and <a href=\"/conditions/knee-pain\">knee</a> because the chain changes how the fascia is loaded.",
    ],
    symptoms: [
      "Sharp pain under the heel with the first steps after rest",
      "A tight arch later in the day",
      "Pain after a long shop, shift or run rather than during it",
      "Tenderness when you press the inner heel",
      "A limp that creeps in on hard pavements",
    ],
    causes: [
      {
        title: "Fascia overload",
        body: "Repeated stretch and compression of the plantar fascia, often after a change in mileage, footwear or standing time.",
      },
      {
        title: "Calf and Achilles tightness",
        body: "A stiff calf complex increases load through the heel. See also <a href=\"/conditions/achilles-tendinitis\">Achilles tendinitis</a>.",
      },
      {
        title: "Foot mechanics",
        body: "A pronated or very rigid foot can both irritate the fascia. We note this; we do not sell orthotics as a clinic product.",
      },
    ],
    treatments: [
      {
        href: "/clinical-services/acupuncture",
        label: "Acupuncture",
        why: "Local heel and distal points may support pain and calf guarding after assessment.",
      },
      {
        href: "/clinical-services/tui-na-massage",
        label: "Tui Na",
        why: "Graded work for the calf, plantar tissues and ankle — kept within what the fascia will tolerate that day.",
      },
      {
        href: "/clinical-services/moxibustion",
        label: "Moxibustion",
        why: "Sometimes used for chronic, cold-sensitive heel pain where warming methods fit the pattern.",
      },
    ],
    patterns: [
      {
        title: "Kidney Deficiency 腎虛",
        body: "Chronic heel pain with a sense of emptiness or weakness in TCM terms — explained simply in clinic.",
      },
      {
        title: "Cold-Damp Bi 寒濕痺",
        body: "Weather-sensitive heel and arch pain that dislikes cold floors.",
      },
      {
        title: "Qi & Blood Stagnation 氣滯血瘀",
        body: "A more local, activity-related sting after a specific training block.",
      },
    ],
    related: ["foot-pain", "ankle-pain", "achilles-tendinitis"],
    expect: [
      {
        title: "Heel, arch or both",
        body: "We distinguish plantar fascia pain from fat-pad, nerve or Achilles problems before treating.",
      },
      {
        title: "Load, not only needles",
        body: "We will talk about standing time and footwear in ordinary language. We do not prescribe a miracle stretch protocol as a product.",
      },
      {
        title: "A reviewed response",
        body: "First-step pain is a useful marker. There is no advertised week-by-week cure.",
      },
    ],
    safety: {
      intro: "Seek medical assessment if you have:",
      items: [
        "Sudden pop in the heel or inability to push off",
        "Redness, heat or a wound under the foot, especially with diabetes",
        "Numbness, or pain that is worse at night and not mechanical",
        "Unexplained swelling of the whole foot",
      ],
    },
    faqs: [
      {
        q: "Can acupuncture help plantar fasciitis?",
        a: "It may help with pain and calf tightness that keeps loading the fascia. It does not guarantee the fascia will settle, and it is not a substitute for medical review if the foot is hot, numb or recently injured.",
      },
      {
        q: "Why is the first step of the morning the worst?",
        a: "The fascia shortens overnight. The first load stretch is often the sharpest. That pattern is typical — still not a diagnosis from this page if something else is going on.",
      },
      {
        q: "Should I stop running?",
        a: "That depends on how irritable the heel is. We will not issue a blanket ban or a training plan; we will be honest if loading looks unhelpful.",
      },
      {
        q: "Is this the same as general foot pain?",
        a: "Not always. Use <a href=\"/conditions/foot-pain\">foot pain</a> if the ache is broader, or <a href=\"/conditions/achilles-tendinitis\">Achilles tendinitis</a> if the pain sits above the heel.",
      },
      ins,
    ],
  },
  {
    slug: "carpal-tunnel-syndrome",
    href: "/conditions/carpal-tunnel-syndrome",
    label: "Carpal Tunnel Syndrome",
    category: "pain-msk",
    status: "live",
    summary:
      "Night-time tingling in the thumb, index and middle fingers — complementary acupuncture after assessment, not a bypass of nerve tests when those are needed.",
    title: "Acupuncture for Carpal Tunnel Syndrome in Reading & Wimbledon | Yin Yang CMC",
    description:
      "Acupuncture for carpal tunnel symptoms in Reading and Wimbledon. Night tingling, wrist ache and desk-related hand symptoms assessed against neck and nerve compression.",
    ogTitle: "Acupuncture for Carpal Tunnel | Reading & Wimbledon",
    ogDescription:
      "Tingling in the thumb and first fingers, often at night. Complementary acupuncture after assessment.",
    h1: "Acupuncture for Carpal Tunnel Syndrome in Reading & Wimbledon",
    eyebrow: "Conditions · Carpal Tunnel Syndrome",
    lede: "Carpal tunnel symptoms are typically tingling or numbness in the thumb, index and middle fingers, often worse at night. Acupuncture may be used as complementary care — not as a substitute for nerve tests or surgery when those are indicated.",
    image: "/images/generated/carpal-tunnel-patient-hero.webp",
    imageAlt: "Person holding a tingling wrist while working at a laptop",
    heroImage: "/images/generated/carpal-tunnel-patient-hero.webp",
    sectionImage: "/images/acupuncture-needles-back.webp",
    sectionImageAlt: "Close-up of acupuncture needles being placed on a patient's back during treatment",
    intro: [
      "The median nerve can be irritated as it passes through the carpal tunnel at the wrist. People shake the hand at night, drop objects, or notice pins and needles when cycling or typing. That is not automatically every <a href=\"/conditions/wrist-pain\">wrist pain</a>, and it is not automatically a <a href=\"/conditions/trapped-nerve\">trapped nerve</a> in the neck — though we check both.",
      "Neck-driven symptoms can mimic this. We also look at <a href=\"/conditions/neck-pain\">neck pain</a> and <a href=\"/conditions/pinched-nerve\">pinched nerve</a> pages because the neighbourhood matters.",
    ],
    symptoms: [
      "Tingling in the thumb, index and middle fingers, often at night",
      "Waking to shake the hand",
      "Clumsiness with buttons or phone typing",
      "An ache that travels from wrist into the palm",
      "Symptoms that flare after long keyboard or tool use",
    ],
    causes: [
      {
        title: "Local tunnel irritation",
        body: "Swelling, tendon load or wrist position can narrow the space around the median nerve. Pregnancy, diabetes and thyroid disease are medical backgrounds we note, not diagnose.",
      },
      {
        title: "Neck and double-crush",
        body: "A nerve already irritated in the neck may be noisier at the wrist. Treating only the wrist then disappoints.",
      },
      {
        title: "Repetitive load",
        body: "Desk work, childcare and tools all load the flexor tendons. Load advice is ordinary, not a packaged programme.",
      },
    ],
    treatments: [
      {
        href: "/clinical-services/acupuncture",
        label: "Acupuncture",
        why: "Local wrist and distal points may support nerve irritability and forearm guarding after assessment.",
      },
      {
        href: "/clinical-services/tui-na-massage",
        label: "Tui Na",
        why: "Gentle forearm and wrist work — not aggressive compressing of an already irritable tunnel.",
      },
      {
        href: "/clinical-services/auricular-therapy",
        label: "Auricular Therapy",
        why: "Sometimes used as a light adjunct for nerve-irritability patterns.",
      },
    ],
    patterns: [
      {
        title: "Qi & Blood Stagnation 氣滯血瘀",
        body: "Local wrist ache after repetitive use, with tingling that follows activity.",
      },
      {
        title: "Phlegm-Damp Obstruction 痰濕阻絡",
        body: "Heavy, numb fingers with a sense of swelling, sometimes in a damper constitution.",
      },
      {
        title: "Deficiency of Qi and Blood 氣血虧虛",
        body: "Night numbness with fatigue, treated as more than a local wrist story.",
      },
    ],
    related: ["wrist-pain", "trapped-nerve", "neck-pain"],
    expect: [
      {
        title: "Wrist, neck or both",
        body: "We map which fingers tingle, whether the neck is involved, and any existing nerve conduction results.",
      },
      {
        title: "What we will not over-promise",
        body: "Thenar wasting, marked weakness or a surgeon’s recommendation sits with your medical team. Complementary care is discussed honestly.",
      },
      {
        title: "A reviewed plan",
        body: "Night waking is a useful marker. There is no advertised ‘avoid surgery’ package.",
      },
    ],
    safety: {
      intro: "Seek medical or specialist assessment if you have:",
      items: [
        "Wasting of the thumb muscles or marked weakness",
        "Constant numbness that is worsening quickly",
        "Symptoms after a fracture or significant wrist injury",
        "Bilateral symptoms with other systemic illness not yet reviewed",
      ],
    },
    faqs: [
      {
        q: "Can acupuncture help carpal tunnel syndrome?",
        a: "Some people use it for night tingling and forearm tightness. It may help symptoms. It does not replace nerve conduction studies or surgery when those are clinically indicated.",
      },
      {
        q: "Could this be a trapped nerve in my neck?",
        a: "Yes, it can overlap. Read <a href=\"/conditions/trapped-nerve\">trapped nerve</a> and <a href=\"/conditions/neck-pain\">neck pain</a> as well. We distinguish this in the room.",
      },
      {
        q: "Should I wear a night splint?",
        a: "Many GPs suggest one. If you already have a splint, bring it. We do not sell devices.",
      },
      {
        q: "Do I need a GP referral?",
        a: "No to book. Bring any existing letters. If wasting or severe weakness is present, medical review comes first.",
      },
      ins,
    ],
  },
  ...expansionConditionsB,
];
