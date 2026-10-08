/**
 * Sync Google reviews into src/data/google-reviews.json
 *
 * Providers (first match wins):
 * 1. Google Business Profile API — full review list (recommended for 8 carousel quotes)
 * 2. Google Places API (New) — rating, total count, up to 5 reviews (merged with existing quotes)
 *
 * Never commit API keys or OAuth tokens.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT_FILE = path.join(root, "src", "data", "google-reviews.json");
const DEFAULT_LOCATION = "Wimbledon";
const MAX_QUOTES = 8;
const GOOGLE_URL =
  "https://www.google.com/maps/place/Yin+Yang+Chinese+Practitioners+Centre+UK/@51.4221788,-0.2078681,17z/data=!4m8!3m7!1s0x478320cfdc30305b:0xe1fce118b1794b86!8m2!3d51.4221788!4d-0.2078681!9m1!1b1!16s%2Fg%2F11ym0btzjb";
const PLACE_SEARCH_TEXT =
  "Yin Yang Chinese Practitioners Centre UK 2 Saint Mark's Place Wimbledon SW19 7ND";

loadEnvFiles();

const args = new Set(process.argv.slice(2));
const checkOnly = args.has("--check");
const discoverGbp = args.has("--discover-gbp");

function log(msg) {
  process.stdout.write(`${msg}\n`);
}

function fail(msg) {
  process.stderr.write(`\n${msg}\n`);
  process.exit(1);
}

function loadEnvFiles() {
  for (const name of [".env", ".env.local"]) {
    const file = path.join(root, name);
    if (!fs.existsSync(file)) continue;
    for (const line of fs.readFileSync(file, "utf8").split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const i = trimmed.indexOf("=");
      if (i < 1) continue;
      const key = trimmed.slice(0, i).trim();
      let value = trimmed.slice(i + 1).trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      if (process.env[key] === undefined) process.env[key] = value;
    }
  }
}

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function writeJson(file, data) {
  fs.writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

function formatRating(value) {
  if (value == null || Number.isNaN(Number(value))) return "5.0";
  return Number(value).toFixed(1);
}

function normalizeName(name) {
  return String(name ?? "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

function quoteKey(quote) {
  const text = String(quote.text ?? "").trim().slice(0, 96);
  return `${normalizeName(quote.name)}|${text}`;
}

function mergeQuotes(apiQuotes, existingQuotes) {
  const seen = new Set();
  const merged = [];
  for (const q of apiQuotes) {
    const key = quoteKey(q);
    if (seen.has(key)) continue;
    seen.add(key);
    merged.push(q);
  }
  for (const q of existingQuotes) {
    if (merged.length >= MAX_QUOTES) break;
    const key = quoteKey(q);
    if (seen.has(key)) continue;
    seen.add(key);
    merged.push(q);
  }
  return merged.slice(0, MAX_QUOTES);
}

async function refreshAccessToken() {
  const tokenPath =
    process.env.GBP_TOKEN_PATH || path.join(root, "secrets", "gbp-oauth-token.json");
  const clientPath =
    process.env.GBP_OAUTH_CLIENT_PATH ||
    process.env.GSC_OAUTH_CLIENT_PATH ||
    path.join(root, "secrets", "gbp-oauth-client.json");

  if (!fs.existsSync(tokenPath) || !fs.existsSync(clientPath)) return null;

  const token = readJson(tokenPath);
  const client = readJson(clientPath).installed || readJson(clientPath).web || readJson(clientPath);
  const clientId = client.client_id;
  const clientSecret = client.client_secret;
  if (!clientId || !clientSecret || !token.refresh_token) return null;

  const body = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    refresh_token: token.refresh_token,
    grant_type: "refresh_token",
  });
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  const json = await res.json();
  if (!res.ok || !json.access_token) return null;
  return json.access_token;
}

function gbpStars(starRating) {
  const map = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5 };
  return map[String(starRating)] ?? 5;
}

async function fetchGbpReviews(accessToken) {
  const accountId = process.env.GBP_ACCOUNT_ID;
  const locationId = process.env.GBP_LOCATION_ID;
  if (!accountId || !locationId) return null;

  const reviews = [];
  const gbpMeta = { averageRating: null, totalReviewCount: null };
  let pageToken = "";
  for (let page = 0; page < 10; page++) {
    const url = new URL(
      `https://mybusiness.googleapis.com/v4/accounts/${accountId}/locations/${locationId}/reviews`,
    );
    url.searchParams.set("pageSize", "50");
    if (pageToken) url.searchParams.set("pageToken", pageToken);
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    if (!res.ok) {
      const text = await res.text();
      fail(`Google Business Profile reviews request failed (${res.status}): ${text.slice(0, 400)}`);
    }
    const json = await res.json();
    if (page === 0) {
      gbpMeta.averageRating = json.averageRating;
      gbpMeta.totalReviewCount = json.totalReviewCount;
    }
    for (const r of json.reviews ?? []) {
      reviews.push({
        name: r.reviewer?.displayName || "Google user",
        location: DEFAULT_LOCATION,
        stars: gbpStars(r.starRating),
        text: String(r.comment ?? "").trim(),
        _createTime: r.createTime || r.updateTime || "",
      });
    }
    pageToken = json.nextPageToken || "";
    if (!pageToken) break;
  }

  reviews.sort((a, b) => String(b._createTime).localeCompare(String(a._createTime)));
  const quotes = reviews
    .filter((r) => r.text)
    .slice(0, MAX_QUOTES)
    .map(({ name, location, stars, text }) => ({ name, location, stars, text }));

  const avg =
    gbpMeta.averageRating ??
    (reviews.length > 0
      ? reviews.reduce((sum, r) => sum + r.stars, 0) / reviews.length
      : 5);
  return {
    source: "gbp",
    rating: formatRating(avg),
    count: Number(gbpMeta.totalReviewCount) || reviews.length,
    quotes,
  };
}

async function discoverGbpAccounts(accessToken) {
  const res = await fetch("https://mybusinessaccountmanagement.googleapis.com/v1/accounts", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const json = await res.json();
  if (!res.ok) {
    fail(`Could not list GBP accounts (${res.status}): ${JSON.stringify(json).slice(0, 500)}`);
  }
  log("Google Business Profile accounts:");
  for (const account of json.accounts ?? []) {
    log(`  account: ${account.name}  (${account.accountName || "—"})`);
    const locRes = await fetch(
      `https://mybusinessbusinessinformation.googleapis.com/v1/${account.name}/locations?readMask=name,title,storeCode`,
      { headers: { Authorization: `Bearer ${accessToken}` } },
    );
    const locJson = await locRes.json();
    if (!locRes.ok) {
      log(`    (locations list failed: ${locRes.status})`);
      continue;
    }
    for (const loc of locJson.locations ?? []) {
      log(`    location: ${loc.name}  title=${loc.title || "—"}`);
    }
  }
}

async function resolvePlaceId(apiKey) {
  const configured = process.env.GOOGLE_PLACES_ID?.trim();
  if (configured) return configured;

  const res = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": "places.id,places.displayName",
    },
    body: JSON.stringify({ textQuery: PLACE_SEARCH_TEXT }),
  });
  const json = await res.json();
  if (!res.ok) {
    fail(`Places search failed (${res.status}): ${JSON.stringify(json).slice(0, 400)}`);
  }
  const place = json.places?.[0];
  if (!place?.id) fail("Places search did not return a place id. Set GOOGLE_PLACES_ID in .env.");
  return place.id;
}

async function fetchPlacesReviews(apiKey) {
  const placeId = await resolvePlaceId(apiKey);
  const res = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`, {
    headers: {
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": "id,rating,userRatingCount,reviews",
    },
  });
  const json = await res.json();
  if (!res.ok) {
    fail(`Places details failed (${res.status}): ${JSON.stringify(json).slice(0, 400)}`);
  }

  const quotes = (json.reviews ?? []).map((r) => ({
    name: r.authorAttribution?.displayName || "Google user",
    location: DEFAULT_LOCATION,
    stars: Number(r.rating) || 5,
    text: String(r.text?.text ?? r.originalText?.text ?? "").trim(),
  }));

  return {
    source: "places",
    placeId,
    rating: formatRating(json.rating),
    count: Number(json.userRatingCount) || quotes.length,
    quotes: quotes.filter((q) => q.text),
  };
}

async function buildSnapshot(existing) {
  const accessToken = await refreshAccessToken();
  if (discoverGbp) {
    if (!accessToken) fail("GBP OAuth token missing. See docs/reviews-sync.md");
    await discoverGbpAccounts(accessToken);
    process.exit(0);
  }

  if (accessToken && process.env.GBP_ACCOUNT_ID && process.env.GBP_LOCATION_ID) {
    const gbp = await fetchGbpReviews(accessToken);
    if (gbp) return gbp;
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY?.trim();
  if (!apiKey) {
    fail(
      "Set GOOGLE_PLACES_API_KEY in .env (Places API), or configure GBP OAuth + GBP_ACCOUNT_ID + GBP_LOCATION_ID for full sync. See docs/reviews-sync.md",
    );
  }

  const places = await fetchPlacesReviews(apiKey);
  return {
    ...places,
    quotes: mergeQuotes(places.quotes, existing.quotes ?? []),
  };
}

async function main() {
  const existing = fs.existsSync(OUT_FILE) ? readJson(OUT_FILE) : { quotes: [] };
  const snapshot = await buildSnapshot(existing);

  const next = {
    rating: snapshot.rating,
    count: snapshot.count,
    googleUrl: existing.googleUrl || GOOGLE_URL,
    syncedAt: new Date().toISOString(),
    quotes: snapshot.quotes,
  };

  const prevSerialized = JSON.stringify(existing, null, 2);
  const nextSerialized = JSON.stringify(next, null, 2);

  if (checkOnly) {
    if (prevSerialized === nextSerialized) {
      log("Google reviews are up to date.");
      return;
    }
    fail("Google reviews are out of date. Run: npm run reviews:sync");
  }

  writeJson(OUT_FILE, next);
  log(
    `Wrote ${OUT_FILE} (${snapshot.source}: ${next.count} reviews, ${next.quotes.length} carousel quotes, rating ${next.rating}).`,
  );
}

main().catch((err) => {
  fail(err instanceof Error ? err.message : String(err));
});
