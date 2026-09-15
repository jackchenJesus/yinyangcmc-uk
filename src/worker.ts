const CLINIC_EMAIL = "yinyangcmcuk@gmail.com";

interface Env {
  ASSETS: Fetcher;
}

type ContactBody = {
  name?: string;
  email?: string;
  clinic?: string;
  message?: string;
  website?: string;
};

function json(data: unknown, status = 200) {
  return Response.json(data, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function handleContact(request: Request) {
  if (request.method !== "POST") {
    return json({ ok: false, message: "Method not allowed." }, 405);
  }

  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return json({ ok: false, message: "Invalid form data." }, 400);
  }

  if (typeof body.website === "string" && body.website.trim()) {
    return json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const clinic = String(body.clinic ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !isEmail(email) || !message) {
    return json({ ok: false, message: "Please fill in your name, email and message." }, 400);
  }

  const origin = new URL(request.url).origin;
  const payload = {
    name,
    email,
    clinic: clinic || "Not specified",
    message,
    _subject: "Website enquiry — Yin Yang CMC",
    _replyto: email,
    _template: "table",
  };

  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(CLINIC_EMAIL)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: origin,
        Referer: `${origin}/contact/`,
      },
      body: JSON.stringify(payload),
    },
  );

  let result: { success?: string | boolean; message?: string } = {};
  try {
    result = (await response.json()) as typeof result;
  } catch {
    return json(
      { ok: false, message: "The mail service did not respond. Please WhatsApp or email the clinic." },
      502,
    );
  }

  const success = result.success === true || result.success === "true";
  const note = String(result.message ?? "");
  const needsActivation = /activat/i.test(note);

  if (needsActivation) {
    return json({
      ok: true,
      needsActivation: true,
      message:
        "Please open yinyangcmcuk@gmail.com (including Spam) and click Activate Form. Then submit this form again.",
    });
  }

  if (!response.ok || !success) {
    return json(
      {
        ok: false,
        message: note || "We could not send the form just now. Please WhatsApp or email the clinic.",
      },
      502,
    );
  }

  return json({ ok: true });
}

const CANON_HOST = "yinyangcmc.uk";

const PAGE_REDIRECTS: Record<string, string> = {
  "/professional-services": "/clinical-services",
  "/other-treatment": "/clinical-services",
  "/services": "/clinical-services",
  "/acupuncture": "/clinical-services/acupuncture",
  "/copy-of-acupuncture": "/clinical-services/acupuncture",
  "/tui-na-massage": "/clinical-services/tui-na-massage",
  "/bone-setting": "/clinical-services/bone-setting",
  "/herbal-consultation": "/clinical-services/herbal-consultation",
  "/cupping": "/clinical-services/cupping",
  "/gua-sha": "/clinical-services/gua-sha",
  "/moxibustion": "/clinical-services/moxibustion",
  "/auricular-therapy": "/clinical-services/auricular-therapy",
  "/tian-jiu": "/clinical-services/tian-jiu",
  "/back-pain": "/conditions/back-pain",
  "/sciatica-treatment": "/conditions/sciatica-treatment",
  "/shoulder-pain": "/conditions/shoulder-pain",
  "/frozen-shoulder": "/conditions/frozen-shoulder",
  "/sports-injuries": "/conditions/sports-injuries",
  "/pinched-nerve": "/conditions/pinched-nerve",
  "/trapped-nerve": "/conditions/trapped-nerve",
  "/neck-pain": "/conditions/neck-pain",
  "/herniated-disc": "/conditions/herniated-disc",
  "/piriformis-syndrome": "/conditions/piriformis-syndrome",
  "/knee-pain": "/conditions/knee-pain",
  "/hip-pain": "/conditions/hip-pain",
  "/fertility-support": "/conditions/fertility-support",
  "/headaches-migraines": "/conditions/headaches",
  "/arthritis": "/conditions/arthritis",
  "/joint-pain": "/conditions/joint-pain",
  "/migraine": "/conditions/migraine",
  "/headaches": "/conditions/headaches",
  "/plantar-fasciitis": "/conditions/plantar-fasciitis",
  "/carpal-tunnel-syndrome": "/conditions/carpal-tunnel-syndrome",
  "/trigeminal-neuralgia": "/conditions/trigeminal-neuralgia",
  "/achilles-tendinitis": "/conditions/achilles-tendinitis",
  "/postherpetic-neuralgia": "/conditions/postherpetic-neuralgia",
  "/tennis-elbow": "/conditions/tennis-elbow",
  "/golfers-elbow": "/conditions/golfers-elbow",
  "/wrist-pain": "/conditions/wrist-pain",
  "/ankle-pain": "/conditions/ankle-pain",
  "/foot-pain": "/conditions/foot-pain",
  "/elbow-pain": "/conditions/elbow-pain",
  "/menstrual-pain": "/conditions",
  "/postnatal-recovery": "/conditions",
  "/anxiety-sleep": "/conditions",
  "/digestive-health": "/conditions",
  "/skin-conditions": "/conditions",
  "/fatigue": "/conditions",
  "/reading-clinic": "/locations/reading-clinic",
  "/wimbledon-clinic": "/locations/wimbledon-clinic",
  "/blog": "/",
  "/insights-and-advice-from-our-expert-doctors": "/",
  "/insights-from-our-doctors-at-yin-yang-uk": "/",
  "/home": "/",
  "/about": "/our-practitioners",
};

function isLocalHost(hostname: string) {
  return hostname === "localhost" || hostname === "127.0.0.1";
}

function normalizePath(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

function canonicalUrl(request: Request): URL {
  const url = new URL(request.url);
  const path = normalizePath(url.pathname);
  const dest = PAGE_REDIRECTS[path] ?? path;
  const target = new URL(request.url);
  if (!isLocalHost(url.hostname)) {
    target.protocol = "https:";
    target.hostname = CANON_HOST;
    target.port = "";
  }
  target.pathname = dest;
  target.search = url.search;
  target.hash = "";
  return target;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === "/api/contact") {
      return handleContact(request);
    }
    if (request.method === "GET" || request.method === "HEAD") {
      const target = canonicalUrl(request);
      if (target.href !== new URL(request.url).href) {
        return Response.redirect(target.href, 301);
      }
    }
    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
