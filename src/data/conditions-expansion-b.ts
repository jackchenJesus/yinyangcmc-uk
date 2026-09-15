import type { LiveCondition } from "./conditions";

const ins = {
  q: "Can I claim through health insurance?",
  a: "We are recognised by AXA Health, Vitality, Aviva and WPA. Cover depends on your policy and usually relates to eligible acupuncture. See <a href=\"/pricing-and-insurance\">Pricing &amp; Insurance</a>.",
};

export const expansionConditionsB: LiveCondition[] = [
  {
    slug: "trigeminal-neuralgia",
    href: "/conditions/trigeminal-neuralgia",
    label: "Trigeminal Neuralgia",
    category: "pain-msk",
    status: "live",
    summary:
      "Brief, electric facial pain in a trigeminal distribution — complementary acupuncture only after medical diagnosis and red-flag screening.",
    title: "Acupuncture for Trigeminal Neuralgia in Reading & Wimbledon | Yin Yang CMC",
    description:
      "Acupuncture as complementary care for medically recognised trigeminal neuralgia in Reading and Wimbledon. Electric facial pain needs proper medical assessment first.",
    ogTitle: "Acupuncture for Trigeminal Neuralgia | Reading & Wimbledon",
    ogDescription:
      "Brief, shock-like facial pain. Complementary acupuncture after medical assessment — not a first-line diagnosis from this page.",
    h1: "Acupuncture for Trigeminal Neuralgia in Reading & Wimbledon",
    eyebrow: "Conditions · Trigeminal Neuralgia",
    lede: "Trigeminal neuralgia is typically a brief, electric, one-sided facial pain triggered by light touch, chewing or cold air. Acupuncture, if used, is complementary after the condition has been medically considered — not a substitute for neurology.",
    image: "/images/generated/trigeminal-neuralgia-patient-hero.webp",
    imageAlt: "Person cautiously touching the side of the face",
    heroImage: "/images/generated/trigeminal-neuralgia-patient-hero.webp",
    sectionImage: "/images/generated/trigeminal-neuralgia-section.webp",
    sectionImageAlt: "Quiet portrait of facial pain caution",
    intro: [
      "People describe a lightning-like jolt in the cheek, jaw or forehead that lasts seconds. Triggers can be washing the face, speaking or a breeze. That is a different picture from sinus ache or ordinary <a href=\"/conditions/headaches\">headache</a>.",
      "Because serious causes of facial pain exist, we expect a GP or neurology opinion to already be in play, or we will advise you to obtain one. Complementary work may also consider <a href=\"/conditions/neck-pain\">neck</a> tension and, in a different nerve story, <a href=\"/conditions/postherpetic-neuralgia\">postherpetic neuralgia</a>.",
    ],
    symptoms: [
      "Sudden, electric, one-sided facial pain lasting seconds",
      "Triggers from light touch, chewing, talking or cold air",
      "Pain in the cheek, jaw, lips or forehead distribution",
      "Fear of washing, shaving or eating because it might spark an attack",
      "A duller ache between shocks in some longer-standing cases",
    ],
    causes: [
      {
        title: "Trigeminal nerve irritability",
        body: "Classic TN is a nerve problem, often discussed with vascular contact on imaging. We do not diagnose that here.",
      },
      {
        title: "Dental and sinus mimics",
        body: "Tooth and sinus pain can be mistaken for TN. Recent dental work or infection needs the right clinician first.",
      },
      {
        title: "Secondary causes",
        body: "New facial numbness, hearing change, or a younger first presentation needs medical investigation. Clinic acupuncture waits.",
      },
    ],
    treatments: [
      {
        href: "/clinical-services/acupuncture",
        label: "Acupuncture",
        why: "Gentle, carefully placed points may be used as an adjunct for nerve irritability after medical screening — never as emergency care.",
      },
      {
        href: "/clinical-services/auricular-therapy",
        label: "Auricular Therapy",
        why: "Ear points are sometimes chosen when the face itself is too triggerable to treat locally.",
      },
      {
        href: "/clinical-services/tui-na-massage",
        label: "Tui Na",
        why: "Only for associated neck and jaw guarding, and only if touch is tolerated. The face is not forcibly massaged.",
      },
    ],
    patterns: [
      {
        title: "Wind attacking the face 風邪襲絡",
        body: "Sudden, darting facial pain, often triggered by cold or light stimulation.",
      },
      {
        title: "Liver Fire 肝火上炎",
        body: "Intense, irritable facial pain with a sense of heat or pressure.",
      },
      {
        title: "Yin Deficiency with Empty Heat 陰虛火旺",
        body: "A more lingering facial discomfort in a depleted constitution, still treated cautiously.",
      },
    ],
    related: ["headaches", "neck-pain", "postherpetic-neuralgia"],
    expect: [
      {
        title: "Medical letters first",
        body: "Bring neurology or GP correspondence if you have it. If you do not, we may still ask you to obtain assessment before a course begins.",
      },
      {
        title: "Gentle, not heroic",
        body: "Needling around a triggerable face is conservative. We will stop if a session is clearly aggravating.",
      },
      {
        title: "Medication stays with your doctor",
        body: "We do not alter carbamazepine or other TN medicines. Complementary care is additional.",
      },
    ],
    safety: {
      intro: "Seek urgent medical care if facial pain comes with:",
      items: [
        "New weakness, drooping, or speech change",
        "Hearing loss, double vision, or unsteadiness",
        "Fever, rash, or a recent shingles outbreak on the face",
        "A first attack that is unlike anything you have had, with systemic unwellness",
      ],
    },
    faqs: [
      {
        q: "Can acupuncture help trigeminal neuralgia?",
        a: "Some people use it as complementary care. Evidence and individual response vary. It is not a cure, and it must not delay neurology when that is needed.",
      },
      {
        q: "Will you needle my face?",
        a: "Only if it is appropriate and tolerable. Many sessions emphasise distal or ear points when the face is highly triggerable.",
      },
      {
        q: "Is this the same as shingles pain?",
        a: "No. Lasting pain after shingles is <a href=\"/conditions/postherpetic-neuralgia\">postherpetic neuralgia</a>. The nerve stories differ.",
      },
      ins,
    ],
  },
  {
    slug: "achilles-tendinitis",
    href: "/conditions/achilles-tendinitis",
    label: "Achilles Tendinitis",
    category: "pain-msk",
    status: "live",
    summary:
      "Pain and stiffness in the Achilles tendon after running or walking — complementary acupuncture and Tui Na, with medical review for a suspected tear.",
    title: "Acupuncture for Achilles Tendinitis in Reading & Wimbledon | Yin Yang CMC",
    description:
      "Acupuncture for Achilles tendon pain in Reading and Wimbledon. Stiffness after running or walking assessed as complementary care — a sudden pop needs urgent medical assessment.",
    ogTitle: "Acupuncture for Achilles Tendinitis | Reading & Wimbledon",
    ogDescription:
      "Morning Achilles stiffness or pain after a run. Complementary acupuncture and calf work after assessment.",
    h1: "Acupuncture for Achilles Tendinitis in Reading & Wimbledon",
    eyebrow: "Conditions · Achilles Tendinitis",
    lede: "Achilles pain usually sits above the heel, stiff first thing, then warmer after a few steps. Acupuncture may support the tendon and calf — a sudden snap or inability to push off is a medical emergency, not a clinic booking.",
    image: "/images/generated/achilles-tendinitis-patient-hero.webp",
    imageAlt: "Runner sitting on a bench holding the Achilles tendon",
    heroImage: "/images/generated/achilles-tendinitis-patient-hero.webp",
    sectionImage: "/images/generated/achilles-tendinitis-section.webp",
    sectionImageAlt: "Hands on the Achilles region after training",
    intro: [
      "The Achilles tendon takes the calf into the heel bone. Tendinopathy is overload of that tendon, common in running, racket sports and a sudden return to walking. It is not <a href=\"/conditions/plantar-fasciitis\">plantar fasciitis</a> (under the heel) and not every <a href=\"/conditions/ankle-pain\">ankle pain</a>.",
      "We look at calf load, previous sprains and whether <a href=\"/conditions/sports-injuries\">sports injury</a> care is the wider frame.",
    ],
    symptoms: [
      "Stiffness in the tendon on the first steps of the day",
      "A thickened or tender area a few centimetres above the heel",
      "Pain after a run rather than a sharp snap during it",
      "Discomfort walking uphill or on stairs",
      "A tendon that feels tight even after stretching",
    ],
    causes: [
      {
        title: "Training spikes",
        body: "Hills, speed work, new shoes or a return after rest commonly overload the tendon.",
      },
      {
        title: "Calf capacity",
        body: "A calf that cannot meet the demand of walking or running leaves the tendon doing too much.",
      },
      {
        title: "Previous ankle injury",
        body: "Old sprains change how the tendon is loaded. See <a href=\"/conditions/ankle-pain\">ankle pain</a>.",
      },
    ],
    treatments: [
      {
        href: "/clinical-services/acupuncture",
        label: "Acupuncture",
        why: "Local and distal points may support pain and calf guarding. We do not needle into a suspected rupture.",
      },
      {
        href: "/clinical-services/tui-na-massage",
        label: "Tui Na",
        why: "Graded calf and tendon work — not aggressive scraping of an irritable mid-portion.",
      },
      {
        href: "/clinical-services/moxibustion",
        label: "Moxibustion",
        why: "Sometimes used for chronic, cold-sensitive tendon stiffness.",
      },
    ],
    patterns: [
      {
        title: "Liver-Kidney Deficiency 肝腎不足",
        body: "Recurrent tendon complaints with slower recovery, common in TCM sports pictures.",
      },
      {
        title: "Qi & Blood Stagnation 氣滯血瘀",
        body: "A more local ache after a specific training block.",
      },
      {
        title: "Cold-Damp Bi 寒濕痺",
        body: "Weather-sensitive Achilles stiffness that dislikes cold starts.",
      },
    ],
    related: ["ankle-pain", "plantar-fasciitis", "sports-injuries"],
    expect: [
      {
        title: "Tendon or tear",
        body: "A sudden pop, bruising, or inability to raise the heel needs urgent medical care, not acupuncture first.",
      },
      {
        title: "Load conversation",
        body: "We will be honest if running volume looks unhelpful. We do not sell a return-to-sport programme as a product.",
      },
      {
        title: "A reviewed response",
        body: "Morning stiffness is a useful marker. No advertised week-count.",
      },
    ],
    safety: {
      intro: "Seek urgent assessment if you have:",
      items: [
        "A sudden snap or pop in the tendon",
        "Inability to push off or stand on tiptoe",
        "Rapid swelling or bruising at the back of the ankle",
        "Redness and heat suggesting infection",
      ],
    },
    faqs: [
      {
        q: "Can acupuncture help Achilles tendinitis?",
        a: "It may help with pain and calf tightness. Tendons change slowly. It will not repair a rupture.",
      },
      {
        q: "Should I rest completely?",
        a: "Complete rest is not always helpful for tendinopathy, but continuing to sprint through sharp pain is unwise. We discuss this in clinic, not as a universal rule.",
      },
      {
        q: "Is the pain under my heel the Achilles?",
        a: "Under the heel is more often <a href=\"/conditions/plantar-fasciitis\">plantar fasciitis</a>. The Achilles sits above the heel bone.",
      },
      ins,
    ],
  },
  {
    slug: "postherpetic-neuralgia",
    href: "/conditions/postherpetic-neuralgia",
    label: "Postherpetic Neuralgia",
    category: "pain-msk",
    status: "live",
    summary:
      "Lingering nerve pain after shingles — complementary acupuncture after the acute rash has been medically managed.",
    title: "Acupuncture for Postherpetic Neuralgia in Reading & Wimbledon | Yin Yang CMC",
    description:
      "Acupuncture as complementary care for nerve pain after shingles in Reading and Wimbledon. Acute shingles needs medical treatment first.",
    ogTitle: "Acupuncture for Postherpetic Neuralgia | Reading & Wimbledon",
    ogDescription:
      "Burning or shooting pain after a shingles rash has healed. Complementary acupuncture after medical care of the acute episode.",
    h1: "Acupuncture for Postherpetic Neuralgia in Reading & Wimbledon",
    eyebrow: "Conditions · Postherpetic Neuralgia",
    lede: "After shingles, some people are left with burning, shooting or oversensitive skin where the rash was. Acupuncture may be used as complementary care once the acute infection has been medically managed.",
    image: "/images/generated/postherpetic-neuralgia-patient-hero.webp",
    imageAlt: "Person sitting on a sofa with a hand over the side of the ribs",
    heroImage: "/images/generated/postherpetic-neuralgia-patient-hero.webp",
    sectionImage: "/images/generated/postherpetic-neuralgia-section.webp",
    sectionImageAlt: "Quiet living-room scene of lingering torso discomfort",
    intro: [
      "Postherpetic neuralgia is pain that continues after the shingles rash has crusted and healed. Clothing can feel unbearable; sleep is often broken. This is a nerve-pain story, not ordinary muscle ache, and not the same as <a href=\"/conditions/trigeminal-neuralgia\">trigeminal neuralgia</a> unless the face was involved.",
      "Acute shingles (new blistering rash, especially near the eye) needs a GP or urgent care, often with antiviral medicine. We do not treat active infection as a first contact. Related nerve pages include <a href=\"/conditions/pinched-nerve\">pinched nerve</a>.",
    ],
    symptoms: [
      "Burning, shooting or stabbing pain in the old rash territory",
      "Skin that hurts with light touch or clothing",
      "Itch or pins and needles where blisters were",
      "Pain that is worse at night",
      "A band of sensitivity around the torso, or on the face if shingles was there",
    ],
    causes: [
      {
        title: "Nerve after-effects of varicella zoster",
        body: "The virus inflames a nerve root. Pain can outlast the rash. This is a medical diagnosis, not something we invent from a website.",
      },
      {
        title: "Age and immune background",
        body: "Older adults and people with reduced immunity are more likely to be left with lingering pain. That is epidemiology, not a clinic claim.",
      },
      {
        title: "Secondary muscle guarding",
        body: "People brace away from the painful band. Gentle work may address that guarding once the skin is intact.",
      },
    ],
    treatments: [
      {
        href: "/clinical-services/acupuncture",
        label: "Acupuncture",
        why: "Distal and, where the skin allows, carefully placed local points may be used for nerve-pain patterns after assessment.",
      },
      {
        href: "/clinical-services/auricular-therapy",
        label: "Auricular Therapy",
        why: "Often useful when the torso or face is too sensitive for local work.",
      },
      {
        href: "/clinical-services/moxibustion",
        label: "Moxibustion",
        why: "Only if the skin is fully healed and the pattern fits — never over broken or recently blistered skin.",
      },
    ],
    patterns: [
      {
        title: "Residual Toxin in the Channels 餘毒未清",
        body: "Lingering heat-type nerve pain after an eruptive illness, described in clinic without alarming language.",
      },
      {
        title: "Qi & Blood Stagnation 氣滯血瘀",
        body: "Fixed, stabbing discomfort in a band, with marked touch sensitivity.",
      },
      {
        title: "Yin Deficiency 陰虛",
        body: "Night pain and dry, oversensitive skin in a depleted picture.",
      },
    ],
    related: ["trigeminal-neuralgia", "pinched-nerve", "trapped-nerve"],
    expect: [
      {
        title: "Rash must be healed",
        body: "We do not needle through active blisters. Acute shingles belongs with a GP.",
      },
      {
        title: "Medication continues",
        body: "Nerve-pain medicines, if prescribed, stay under your doctor’s advice.",
      },
      {
        title: "Realistic aims",
        body: "Comfort in clothing and sleep are typical aims. We do not promise the nerve will ‘reset’.",
      },
    ],
    safety: {
      intro: "Seek medical care if you have:",
      items: [
        "A new blistering rash, especially near the eye",
        "Facial weakness, hearing change, or eye pain with shingles",
        "Fever, spreading redness, or a wound that looks infected",
        "Pain with new weakness in a limb",
      ],
    },
    faqs: [
      {
        q: "Can acupuncture help pain after shingles?",
        a: "Some people use it as complementary care for lingering nerve pain once the rash has healed. Response varies. It is not a treatment for active shingles infection.",
      },
      {
        q: "How soon after the rash can I book?",
        a: "Skin should be intact. If you are unsure, send a description on WhatsApp before travelling.",
      },
      {
        q: "Is this the same as a pinched nerve?",
        a: "The pain can feel similar, but the history of shingles is the clue. See also <a href=\"/conditions/pinched-nerve\">pinched nerve</a> if there was no rash.",
      },
      ins,
    ],
  },
  {
    slug: "tennis-elbow",
    href: "/conditions/tennis-elbow",
    label: "Tennis Elbow",
    category: "pain-msk",
    status: "live",
    summary:
      "Lateral elbow pain from gripping and lifting — complementary acupuncture and Tui Na, whether or not you play tennis.",
    title: "Acupuncture for Tennis Elbow in Reading & Wimbledon | Yin Yang CMC",
    description:
      "Acupuncture for tennis elbow (lateral epicondylalgia) in Reading and Wimbledon. Outer-elbow pain from gripping, typing or racket sports — complementary care after assessment.",
    ogTitle: "Acupuncture for Tennis Elbow | Reading & Wimbledon",
    ogDescription:
      "Pain on the outside of the elbow when gripping or lifting. Complementary acupuncture after assessment.",
    h1: "Acupuncture for Tennis Elbow in Reading & Wimbledon",
    eyebrow: "Conditions · Tennis Elbow",
    lede: "Tennis elbow is pain on the outside of the elbow, usually from gripping, lifting or racket work — most people we see do not play tennis. Acupuncture may support the tendon and forearm, without a promised recovery week-count.",
    image: "/images/generated/tennis-elbow-patient-hero.webp",
    imageAlt: "Person holding the outer elbow with a tennis racket nearby",
    heroImage: "/images/generated/tennis-elbow-patient-hero.webp",
    sectionImage: "/images/generated/tennis-elbow-section.webp",
    sectionImageAlt: "Hand supporting the lateral elbow",
    intro: [
      "Lateral epicondylalgia is irritation of the forearm extensor tendons where they meet the outer elbow. Pain picking up a kettle, typing, or shaking hands is typical. Inner-elbow pain is <a href=\"/conditions/golfers-elbow\">golfer's elbow</a>. Broader joint ache sits on <a href=\"/conditions/elbow-pain\">elbow pain</a>.",
      "The <a href=\"/conditions/wrist-pain\">wrist</a> and <a href=\"/conditions/shoulder-pain\">shoulder</a> often share the load. We look at the chain, not only the sore bump on the elbow.",
    ],
    symptoms: [
      "Pain on the bony point on the outside of the elbow",
      "A sting when lifting a kettle, bag or child",
      "Grip that feels weak or untrustworthy",
      "Ache after mouse work or DIY",
      "Tenderness when the wrist is extended against resistance",
    ],
    causes: [
      {
        title: "Tendon overload",
        body: "Repeated wrist extension and gripping. New racket, extra DIY, or a change in desk setup are common stories.",
      },
      {
        title: "Shoulder and wrist contribution",
        body: "A stiff shoulder or irritable wrist changes how the elbow is used.",
      },
      {
        title: "Not always tennis",
        body: "The name is historical. Trades, childcare and offices produce the same tendon picture.",
      },
    ],
    treatments: [
      {
        href: "/clinical-services/acupuncture",
        label: "Acupuncture",
        why: "Local elbow and distal points may support tendon pain and forearm guarding.",
      },
      {
        href: "/clinical-services/tui-na-massage",
        label: "Tui Na",
        why: "Graded forearm work — not aggressive scraping of an irritable tendon origin.",
      },
      {
        href: "/clinical-services/cupping",
        label: "Cupping",
        why: "Sometimes used on the forearm and upper arm when muscle tightness is maintaining the load.",
      },
    ],
    patterns: [
      {
        title: "Qi & Blood Stagnation 氣滯血瘀",
        body: "A local, activity-related outer-elbow sting after gripping.",
      },
      {
        title: "Damp-Heat in the Channel 經絡濕熱",
        body: "A heavier, more irritable elbow that dislikes overuse and heat.",
      },
      {
        title: "Deficiency of Liver and Kidney 肝腎不足",
        body: "Recurrent tendon complaints with slower recovery.",
      },
    ],
    related: ["elbow-pain", "wrist-pain", "shoulder-pain"],
    expect: [
      {
        title: "Outer, inner or joint",
        body: "We distinguish tennis elbow, golfer's elbow and a more global elbow joint picture.",
      },
      {
        title: "Grip tasks",
        body: "We ask about kettle, mouse, racket and tools because those are the usual aggravators.",
      },
      {
        title: "No miracle injection substitute claim",
        body: "If you have been offered a steroid injection or physio programme, that remains your medical pathway. We can work alongside.",
      },
    ],
    safety: {
      intro: "Seek medical assessment if you have:",
      items: [
        "A recent fall onto the elbow or suspected fracture",
        "A hot, swollen elbow joint",
        "Numbness in the hand that is worsening quickly",
        "Inability to extend the wrist or fingers",
      ],
    },
    faqs: [
      {
        q: "Can acupuncture help tennis elbow?",
        a: "It may help with pain and forearm tightness. Tendon irritation often takes time. We do not advertise a fixed number of sessions.",
      },
      {
        q: "I don’t play tennis — can I still have this?",
        a: "Yes. The name is misleading. Desk work and lifting produce the same outer-elbow picture.",
      },
      {
        q: "What if the pain is on the inside of the elbow?",
        a: "That is more likely <a href=\"/conditions/golfers-elbow\">golfer's elbow</a>.",
      },
      ins,
    ],
  },
  {
    slug: "golfers-elbow",
    href: "/conditions/golfers-elbow",
    label: "Golfer's Elbow",
    category: "pain-msk",
    status: "live",
    summary:
      "Medial elbow pain from gripping and wrist flexion — complementary acupuncture, whether or not you play golf.",
    title: "Acupuncture for Golfer's Elbow in Reading & Wimbledon | Yin Yang CMC",
    description:
      "Acupuncture for golfer's elbow (medial epicondylalgia) in Reading and Wimbledon. Inner-elbow pain from gripping or wrist flexion — complementary care after assessment.",
    ogTitle: "Acupuncture for Golfer's Elbow | Reading & Wimbledon",
    ogDescription:
      "Pain on the inside of the elbow when gripping or carrying. Complementary acupuncture after assessment.",
    h1: "Acupuncture for Golfer's Elbow in Reading & Wimbledon",
    eyebrow: "Conditions · Golfer's Elbow",
    lede: "Golfer's elbow is pain on the inside of the elbow, usually from gripping, carrying or wrist flexion. Most patients are not golfers. Acupuncture may support the tendon — it does not promise a return-to-sport date.",
    image: "/images/generated/golfers-elbow-patient-hero.webp",
    imageAlt: "Person pressing the inner elbow",
    heroImage: "/images/generated/golfers-elbow-patient-hero.webp",
    sectionImage: "/images/generated/golfers-elbow-section.webp",
    sectionImageAlt: "Hand on the medial elbow",
    intro: [
      "Medial epicondylalgia irritates the wrist-flexor tendons at the inner elbow. Pain carrying shopping, using a screwdriver, or the golf follow-through is typical. Outer-elbow pain is <a href=\"/conditions/tennis-elbow\">tennis elbow</a>.",
      "We also check <a href=\"/conditions/wrist-pain\">wrist</a> and <a href=\"/conditions/elbow-pain\">elbow</a> more broadly, and whether the <a href=\"/conditions/neck-pain\">neck</a> is referring.",
    ],
    symptoms: [
      "Pain on the bony point on the inside of the elbow",
      "Ache when carrying bags with a straight arm",
      "Discomfort with wrist flexion or gripping",
      "Tenderness that can travel a little into the forearm",
      "A weaker grip that you do not quite trust",
    ],
    causes: [
      {
        title: "Flexor-pronator overload",
        body: "Repeated gripping and wrist flexion. Golf is only one of many loads.",
      },
      {
        title: "Throwing and racket sports",
        body: "Valgus stress at the elbow in throwing can irritate the same region — still assessed, not labelled from a form.",
      },
      {
        title: "Ulnar nerve overlap",
        body: "Tingling in the ring and little finger needs a nerve question as well as a tendon question.",
      },
    ],
    treatments: [
      {
        href: "/clinical-services/acupuncture",
        label: "Acupuncture",
        why: "Local medial elbow and distal points may support tendon pain after assessment.",
      },
      {
        href: "/clinical-services/tui-na-massage",
        label: "Tui Na",
        why: "Gentle flexor-mass work — not compressing an irritable ulnar groove.",
      },
      {
        href: "/clinical-services/moxibustion",
        label: "Moxibustion",
        why: "Sometimes added for chronic, cold-sensitive inner-elbow stiffness.",
      },
    ],
    patterns: [
      {
        title: "Cold-Damp Bi 寒濕痺",
        body: "Inner-elbow ache that dislikes cold starts and carrying.",
      },
      {
        title: "Qi & Blood Stagnation 氣滯血瘀",
        body: "A local sting after a specific session of gripping or swing practice.",
      },
      {
        title: "Liver Blood Deficiency 肝血虛",
        body: "Recurrent tendon irritability with slower recovery.",
      },
    ],
    related: ["elbow-pain", "tennis-elbow", "wrist-pain"],
    expect: [
      {
        title: "Inner versus outer",
        body: "We confirm medial versus lateral pain and whether the ulnar nerve is noisy.",
      },
      {
        title: "Grip and carry history",
        body: "Shopping, tools, golf and gym pulling all matter.",
      },
      {
        title: "Alongside, not instead of, medical advice",
        body: "A locked, hot or recently injured elbow is not treated as ‘just golfer’s elbow’.",
      },
    ],
    safety: {
      intro: "Seek medical assessment if you have:",
      items: [
        "Numbness in the ring and little finger that is worsening",
        "A hot, swollen elbow",
        "Trauma or inability to bend the arm",
        "Pain with fever",
      ],
    },
    faqs: [
      {
        q: "Can acupuncture help golfer's elbow?",
        a: "It may help with pain and forearm tightness. It is complementary care, not a guaranteed tendon repair.",
      },
      {
        q: "I don’t play golf. Does the page still apply?",
        a: "Yes. Carrying, tools and gym work produce the same inner-elbow picture.",
      },
      {
        q: "How is this different from tennis elbow?",
        a: "Location: inside versus outside of the elbow. See <a href=\"/conditions/tennis-elbow\">tennis elbow</a> if the outer bump is the problem.",
      },
      ins,
    ],
  },
  {
    slug: "wrist-pain",
    href: "/conditions/wrist-pain",
    label: "Wrist Pain",
    category: "pain-msk",
    status: "live",
    summary:
      "Wrist ache, click or load pain from desk work, sport or strain — assessed against carpal tunnel, elbow and neck sources.",
    title: "Acupuncture for Wrist Pain in Reading & Wimbledon | Yin Yang CMC",
    description:
      "Acupuncture for wrist pain in Reading and Wimbledon. Desk, sport and strain presentations assessed against carpal tunnel, elbow and neck — complementary care after assessment.",
    ogTitle: "Acupuncture for Wrist Pain | Reading & Wimbledon",
    ogDescription:
      "A sore, clicking or tired wrist after typing or lifting. Complementary acupuncture after assessment.",
    h1: "Acupuncture for Wrist Pain in Reading & Wimbledon",
    eyebrow: "Conditions · Wrist Pain",
    lede: "Wrist pain is a location, not a diagnosis. It may be tendon load, joint irritation, or nerve tingling. We assess before treating, and we will not needle a hot, recently fractured wrist.",
    image: "/images/generated/wrist-pain-patient-hero.webp",
    imageAlt: "Person supporting a painful wrist with the other hand",
    heroImage: "/images/generated/wrist-pain-patient-hero.webp",
    sectionImage: "/images/generated/wrist-pain-section.webp",
    sectionImageAlt: "Hands protecting a sore wrist",
    intro: [
      "People book for wrist pain after typing, weights, a twist, or months of a dull ache at the base of the thumb. Night tingling in the first fingers belongs more with <a href=\"/conditions/carpal-tunnel-syndrome\">carpal tunnel syndrome</a>. Outer-elbow pain with gripping may be <a href=\"/conditions/tennis-elbow\">tennis elbow</a>.",
      "The <a href=\"/conditions/neck-pain\">neck</a> and <a href=\"/conditions/elbow-pain\">elbow</a> can both refer into the wrist. We look at the chain.",
    ],
    symptoms: [
      "Ache at the base of the thumb or across the wrist crease",
      "Pain lifting a kettle, pushing up from a chair, or doing yoga planks",
      "A click that is new and uncomfortable",
      "Stiffness in the morning that eases with use",
      "Pain that seems to come from the forearm as much as the wrist",
    ],
    causes: [
      {
        title: "Tendon and joint load",
        body: "Extensor and flexor tendons, and the small wrist joints, all generate local pain after a change in load.",
      },
      {
        title: "Nerve symptoms",
        body: "Pins and needles change the question. See carpal tunnel and <a href=\"/conditions/trapped-nerve\">trapped nerve</a>.",
      },
      {
        title: "Trauma",
        body: "A fall onto the hand needs medical imaging if there is marked swelling, deformity or inability to bear weight through the wrist.",
      },
    ],
    treatments: [
      {
        href: "/clinical-services/acupuncture",
        label: "Acupuncture",
        why: "Local and distal points may support pain and forearm guarding when the joint is not acutely injured.",
      },
      {
        href: "/clinical-services/tui-na-massage",
        label: "Tui Na",
        why: "Gentle wrist and forearm work, avoiding a hot or recently fractured joint.",
      },
      {
        href: "/clinical-services/moxibustion",
        label: "Moxibustion",
        why: "Sometimes used for chronic, cold-sensitive wrist stiffness.",
      },
    ],
    patterns: [
      {
        title: "Qi & Blood Stagnation 氣滯血瘀",
        body: "A local ache after a twist or a block of desk work.",
      },
      {
        title: "Wind-Damp Bi 風濕痺",
        body: "Weather-sensitive wrist stiffness.",
      },
      {
        title: "Kidney-Liver Deficiency 肝腎不足",
        body: "Recurrent wrist complaints with slower recovery, sometimes alongside other joints.",
      },
    ],
    related: ["carpal-tunnel-syndrome", "elbow-pain", "neck-pain"],
    expect: [
      {
        title: "Thumb, crease or fingers",
        body: "Location sorts tendon, joint and nerve questions quickly.",
      },
      {
        title: "Existing imaging",
        body: "Bring X-rays if you have them. We do not replace A&E after a fall.",
      },
      {
        title: "A matched combination",
        body: "Acupuncture and Tui Na are chosen for that picture, not listed because they exist.",
      },
    ],
    safety: {
      intro: "Seek urgent or GP assessment if you have:",
      items: [
        "A fall with swelling, deformity, or inability to use the hand",
        "A hot, red wrist",
        "Progressive numbness or weakness",
        "Pain with fever",
      ],
    },
    faqs: [
      {
        q: "Can acupuncture help wrist pain?",
        a: "It may help with mechanical ache and tendon load. Trauma, infection and progressive nerve loss need medical care first.",
      },
      {
        q: "My fingers tingle at night — is that wrist pain?",
        a: "Start with <a href=\"/conditions/carpal-tunnel-syndrome\">carpal tunnel syndrome</a>. The wrist page is for ache, click and load pain more than classic night tingling.",
      },
      {
        q: "Clinic reviews mention De Quervain’s — do you see that?",
        a: "Thumb-side wrist pain after lifting or postnatal load is a presentation we see. We still assess rather than label from a review quote.",
      },
      ins,
    ],
  },
  {
    slug: "ankle-pain",
    href: "/conditions/ankle-pain",
    label: "Ankle Pain",
    category: "pain-msk",
    status: "live",
    summary:
      "Ankle ache, stiffness or old-sprain irritability — complementary acupuncture and Tui Na, with urgent care for a suspected fracture or complete tear.",
    title: "Acupuncture for Ankle Pain in Reading & Wimbledon | Yin Yang CMC",
    description:
      "Acupuncture for ankle pain in Reading and Wimbledon. Old sprains, stiffness and load pain assessed as complementary care — acute injuries with inability to weight-bear need medical assessment.",
    ogTitle: "Acupuncture for Ankle Pain | Reading & Wimbledon",
    ogDescription:
      "A stiff or repeatedly rolling ankle after an old sprain. Complementary acupuncture after assessment.",
    h1: "Acupuncture for Ankle Pain in Reading & Wimbledon",
    eyebrow: "Conditions · Ankle Pain",
    lede: "Ankle pain is often an old sprain that never quite settled, or stiffness after a change in walking or training. Acupuncture may support the joint and the tendons around it — a swollen ankle you cannot stand on needs medical assessment first.",
    image: "/images/generated/ankle-pain-patient-hero.webp",
    imageAlt: "Person sitting with hands around a sore ankle",
    heroImage: "/images/generated/ankle-pain-patient-hero.webp",
    sectionImage: "/images/generated/ankle-pain-section.webp",
    sectionImageAlt: "Hands supporting the ankle joint",
    intro: [
      "The ankle is a mortise joint with ligaments that are easy to sprain and slow to trust again. People describe rolling on a kerb, stiffness in the morning, or pain on stairs. <a href=\"/conditions/achilles-tendinitis\">Achilles</a> pain sits above the heel; <a href=\"/conditions/plantar-fasciitis\">plantar fasciitis</a> under it; broader aches sit on <a href=\"/conditions/foot-pain\">foot pain</a>.",
      "We also look at the <a href=\"/conditions/knee-pain\">knee</a> because a cautious ankle changes how you walk.",
    ],
    symptoms: [
      "Pain on the outside of the ankle after an old roll",
      "Stiffness first thing, or after sitting in the cinema",
      "A feeling the ankle will give on uneven ground",
      "Swelling that comes and goes with walking",
      "Pain on stairs or on the first minutes of a run",
    ],
    causes: [
      {
        title: "Ligament irritability after sprain",
        body: "Even months later, the outer ankle can remain cautious. That is not automatically a new tear.",
      },
      {
        title: "Tendon load",
        body: "Peroneal and tibialis tendons, and the Achilles, all generate pain around the ankle.",
      },
      {
        title: "Joint restriction",
        body: "A stiff talocrural joint changes squat, stairs and running. Bone-setting is used only if assessment supports it.",
      },
    ],
    treatments: [
      {
        href: "/clinical-services/acupuncture",
        label: "Acupuncture",
        why: "Local and distal points may support pain and guarding in a settled sprain or tendon picture.",
      },
      {
        href: "/clinical-services/tui-na-massage",
        label: "Tui Na",
        why: "Graded work for the calf, peroneals and joint — not forced through an acutely swollen ankle.",
      },
      {
        href: "/clinical-services/bone-setting",
        label: "Bone Setting",
        why: "Used when joint restriction is part of a settled picture, not after a fresh fracture.",
      },
    ],
    patterns: [
      {
        title: "Qi & Blood Stagnation 氣滯血瘀",
        body: "A local ache after a roll or a training block.",
      },
      {
        title: "Cold-Damp Bi 寒濕痺",
        body: "Weather-sensitive ankle stiffness.",
      },
      {
        title: "Kidney Deficiency 腎虛",
        body: "A chronically unreliable ankle with slower recovery in TCM terms.",
      },
    ],
    related: ["foot-pain", "achilles-tendinitis", "plantar-fasciitis"],
    expect: [
      {
        title: "Can you walk on it?",
        body: "Inability to weight-bear after injury is a medical filter. Clinic care is for settled or chronic pictures.",
      },
      {
        title: "Which side of the ankle",
        body: "Outer ligament, inner tendon, or Achilles changes the plan.",
      },
      {
        title: "A reviewed plan",
        body: "Trust on uneven ground is a useful marker. No advertised session package.",
      },
    ],
    safety: {
      intro: "Seek urgent assessment if you have:",
      items: [
        "Inability to take four steps after an injury",
        "Deformity, numbness, or a cold foot",
        "A wound, spreading redness, or fever",
        "A sudden pop in the Achilles",
      ],
    },
    faqs: [
      {
        q: "Can acupuncture help ankle pain?",
        a: "It may help with pain and guarding in a settled sprain or tendon irritation. Acute injuries that cannot take weight need medical assessment first.",
      },
      {
        q: "My ankle keeps rolling — can you stop that?",
        a: "We may support the tissues that have stayed irritable. We do not promise to prevent every future sprain.",
      },
      {
        q: "Is bone-setting used on ankles?",
        a: "Sometimes, when a settled joint is restricted. Not on a fresh injury.",
      },
      ins,
    ],
  },
  {
    slug: "foot-pain",
    href: "/conditions/foot-pain",
    label: "Foot Pain",
    category: "pain-msk",
    status: "live",
    summary:
      "Aches in the forefoot, midfoot or arch when the label is still open — assessed against plantar fascia, Achilles and ankle sources.",
    title: "Acupuncture for Foot Pain in Reading & Wimbledon | Yin Yang CMC",
    description:
      "Acupuncture for foot pain in Reading and Wimbledon. Arch, forefoot and general foot ache assessed against plantar fasciitis, Achilles and ankle problems.",
    ogTitle: "Acupuncture for Foot Pain | Reading & Wimbledon",
    ogDescription:
      "Tired, aching feet after standing or walking. Complementary acupuncture after assessment.",
    h1: "Acupuncture for Foot Pain in Reading & Wimbledon",
    eyebrow: "Conditions · Foot Pain",
    lede: "Foot pain is a map, not a single condition. The heel, arch, ball of the foot and ankle each have different usual stories. We locate the pain first, then decide whether acupuncture is appropriate.",
    image: "/images/generated/foot-pain-patient-hero.webp",
    imageAlt: "Person standing with weight off one foot, hand toward the midfoot",
    heroImage: "/images/generated/foot-pain-patient-hero.webp",
    sectionImage: "/images/generated/foot-pain-section.webp",
    sectionImageAlt: "Standing pause with midfoot discomfort",
    intro: [
      "People search for foot pain treatment when the whole foot feels cooked after a shift, or when a particular patch under the ball of the foot has become sharp. First-step heel pain is usually <a href=\"/conditions/plantar-fasciitis\">plantar fasciitis</a>. Pain above the heel is often <a href=\"/conditions/achilles-tendinitis\">Achilles tendinitis</a>. The joint above is <a href=\"/conditions/ankle-pain\">ankle pain</a>.",
      "Diabetes, circulation problems and unhealing sores are medical issues. We do not treat those as a simple musculoskeletal page.",
    ],
    symptoms: [
      "Ache in the arch after standing",
      "Pain under the ball of the foot in thinner shoes",
      "A tired foot that wants to come out of the shoe by evening",
      "Discomfort that moves between heel and forefoot",
      "Pain on cobbles or on the first minutes of a walk",
    ],
    causes: [
      {
        title: "Load and footwear",
        body: "Hard floors, unsupportive shoes and a jump in walking volume commonly irritate the foot’s intrinsic muscles and fascia.",
      },
      {
        title: "Named neighbours",
        body: "Plantar fascia, Achilles and ankle ligaments each have their own page when the story is clear.",
      },
      {
        title: "Medical filters",
        body: "Numbness in a stocking pattern, ulcers, or a hot swollen foot need a GP, not a first acupuncture session.",
      },
    ],
    treatments: [
      {
        href: "/clinical-services/acupuncture",
        label: "Acupuncture",
        why: "Local foot and distal points may support pain when the skin is healthy and the picture is mechanical.",
      },
      {
        href: "/clinical-services/tui-na-massage",
        label: "Tui Na",
        why: "Graded work for the plantar tissues, calf and ankle.",
      },
      {
        href: "/clinical-services/moxibustion",
        label: "Moxibustion",
        why: "Sometimes used for chronic, cold feet with a matching TCM pattern — never over broken skin.",
      },
    ],
    patterns: [
      {
        title: "Kidney Yang Deficiency 腎陽虛",
        body: "Cold, tired feet with slower recovery, explained simply in clinic.",
      },
      {
        title: "Damp-Heat 濕熱",
        body: "A heavier, more irritable foot that dislikes long standing — still not a skin-infection treatment.",
      },
      {
        title: "Qi Stagnation 氣滯",
        body: "A tighter, more local ache after a specific walk or shift.",
      },
    ],
    related: ["plantar-fasciitis", "ankle-pain", "achilles-tendinitis"],
    expect: [
      {
        title: "Point to it",
        body: "Heel versus arch versus forefoot changes which related page and which treatment emphasis apply.",
      },
      {
        title: "Skin and circulation",
        body: "We look at the skin. Broken skin, ulcers or worrying colour changes stop a musculoskeletal plan.",
      },
      {
        title: "Then a matched combination",
        body: "Acupuncture and Tui Na if the picture is mechanical and the foot is otherwise healthy.",
      },
    ],
    safety: {
      intro: "Seek medical assessment if you have:",
      items: [
        "An ulcer, wound that will not heal, or known diabetes with a new foot problem",
        "A hot, red, rapidly swelling foot",
        "Sudden numbness or a cold, pale foot",
        "Inability to weight-bear after injury",
      ],
    },
    faqs: [
      {
        q: "Can acupuncture help foot pain?",
        a: "It may help mechanical ache in the arch, forefoot or a tired foot after standing. Infection, ulcers and vascular problems need medical care.",
      },
      {
        q: "When should I read the plantar fasciitis page instead?",
        a: "If the main story is a sharp first-step heel sting, start with <a href=\"/conditions/plantar-fasciitis\">plantar fasciitis</a>.",
      },
      {
        q: "Do you treat bunions?",
        a: "We may support associated aches. We do not offer bunion surgery or a structural correction claim.",
      },
      ins,
    ],
  },
  {
    slug: "elbow-pain",
    href: "/conditions/elbow-pain",
    label: "Elbow Pain",
    category: "pain-msk",
    status: "live",
    summary:
      "Elbow ache that is not yet clearly tennis or golfer's elbow — assessed against tendon, joint, neck and wrist sources.",
    title: "Acupuncture for Elbow Pain in Reading & Wimbledon | Yin Yang CMC",
    description:
      "Acupuncture for elbow pain in Reading and Wimbledon. Outer, inner and joint presentations assessed against tennis elbow, golfer's elbow, wrist and shoulder.",
    ogTitle: "Acupuncture for Elbow Pain | Reading & Wimbledon",
    ogDescription:
      "A sore elbow that does not sit neatly on one bony point. Complementary acupuncture after assessment.",
    h1: "Acupuncture for Elbow Pain in Reading & Wimbledon",
    eyebrow: "Conditions · Elbow Pain",
    lede: "Elbow pain is a location. It may be tennis elbow, golfer's elbow, the joint itself, or referred from the neck. We sort that before treating.",
    image: "/images/generated/elbow-pain-patient-hero.webp",
    imageAlt: "Person holding the whole elbow joint in a kitchen",
    heroImage: "/images/generated/elbow-pain-patient-hero.webp",
    sectionImage: "/images/generated/elbow-pain-section.webp",
    sectionImageAlt: "Hand supporting the elbow",
    intro: [
      "If you can put one finger on the outer bump, read <a href=\"/conditions/tennis-elbow\">tennis elbow</a>. If the inner bump is the problem, read <a href=\"/conditions/golfers-elbow\">golfer's elbow</a>. This page is for pain that fills the whole joint, travels, or is still being sorted.",
      "The <a href=\"/conditions/wrist-pain\">wrist</a> and <a href=\"/conditions/shoulder-pain\">shoulder</a> frequently share the load. A <a href=\"/conditions/trapped-nerve\">trapped nerve</a> in the neck can be felt in the arm and elbow.",
    ],
    symptoms: [
      "A general ache through the elbow rather than one sharp point",
      "Stiffness straightening or fully bending the arm",
      "Pain that seems to come from the shoulder or wrist as well",
      "Discomfort after carrying, gym pushing, or long drives",
      "A joint that feels full or cautious rather than a classic tendon sting",
    ],
    causes: [
      {
        title: "Tendon pictures",
        body: "Lateral and medial epicondylalgia are common and have their own pages when the story is clear.",
      },
      {
        title: "Joint and referral",
        body: "The elbow joint itself, or referral from the neck and shoulder, can fill the whole region with pain.",
      },
      {
        title: "Load change",
        body: "New gym work, decorating, or picking up a toddler all load the elbow quickly.",
      },
    ],
    treatments: [
      {
        href: "/clinical-services/acupuncture",
        label: "Acupuncture",
        why: "Point selection follows tendon versus joint versus referred pictures after assessment.",
      },
      {
        href: "/clinical-services/tui-na-massage",
        label: "Tui Na",
        why: "Manual work for the forearm, triceps and joint, kept within what the elbow will give that day.",
      },
      {
        href: "/clinical-services/bone-setting",
        label: "Bone Setting",
        why: "Used when neighbouring joint restriction (including the neck or wrist) is part of the picture.",
      },
    ],
    patterns: [
      {
        title: "Bi Syndrome 痺證",
        body: "Obstructed Qi and Blood in the arm channel, often weather-sensitive.",
      },
      {
        title: "Qi Stagnation 氣滯",
        body: "A tighter, more activity-related elbow ache.",
      },
      {
        title: "Phlegm in the Joint 痰瘀互結",
        body: "A heavier, longer-standing joint that feels full — still not a medical diagnosis of arthritis from this page.",
      },
    ],
    related: ["tennis-elbow", "golfers-elbow", "wrist-pain"],
    expect: [
      {
        title: "Point to the pain",
        body: "Outer, inner, or whole joint decides which related page and which treatment emphasis apply.",
      },
      {
        title: "Neck and wrist in the same visit",
        body: "We will not pretend the elbow always lives alone.",
      },
      {
        title: "Medical filters",
        body: "A locked, hot, or recently injured elbow is redirected.",
      },
    ],
    safety: {
      intro: "Seek medical assessment if you have:",
      items: [
        "A hot, swollen, or locked elbow",
        "A recent fall or inability to use the arm",
        "Numbness or weakness that is worsening",
        "Pain with fever",
      ],
    },
    faqs: [
      {
        q: "Can acupuncture help elbow pain?",
        a: "It may help with tendon and muscle-guarding presentations. A hot joint or recent fracture needs medical care first.",
      },
      {
        q: "Should I read tennis elbow or this page?",
        a: "If the outer bony point is clearly the problem, use <a href=\"/conditions/tennis-elbow\">tennis elbow</a>. Use this page if the pain is broader or still unclear.",
      },
      {
        q: "Can neck problems cause elbow pain?",
        a: "Yes. See <a href=\"/conditions/trapped-nerve\">trapped nerve</a> and <a href=\"/conditions/neck-pain\">neck pain</a> if symptoms travel or include tingling.",
      },
      ins,
    ],
  },
];
