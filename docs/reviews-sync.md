# Google reviews sync

Homepage reviews live in `src/data/google-reviews.json`. Update them with:

```bash
npm run reviews:sync
```

Dry run (CI / pre-deploy check):

```bash
npm run reviews:check
```

After a successful sync, commit the JSON and deploy (Cloudflare Workers Builds on `main` will pick it up).

## Automatic schedule (GitHub Actions)

Workflow: `.github/workflows/sync-google-reviews.yml`

- Runs every Monday 06:00 UTC
- Can be started manually from the Actions tab
- Commits `google-reviews.json` only when it changes

### Required repository secret

| Secret | Purpose |
|--------|---------|
| `GOOGLE_PLACES_API_KEY` | Places API (New) — rating, total count, up to 5 review texts |

Optional (recommended for all 8 carousel quotes from Google):

| Env / secret | Purpose |
|--------------|---------|
| `GBP_ACCOUNT_ID` | Business Profile account id (numeric segment from API) |
| `GBP_LOCATION_ID` | Location id under that account |
| `GBP_TOKEN_PATH` | OAuth refresh token JSON (not committed) |
| `GBP_OAUTH_CLIENT_PATH` | OAuth desktop client JSON (not committed) |

## Google Cloud setup (Places API — minimum)

1. In [Google Cloud Console](https://console.cloud.google.com/), enable **Places API (New)**.
2. Create an API key restricted to Places API (New).
3. Add to local `.env`:

   ```env
   GOOGLE_PLACES_API_KEY=your_key_here
   ```

Places returns at most **5** review bodies. The sync script merges those with existing carousel quotes (up to 8) so the slider stays full while **rating** and **total count** stay accurate.

## Full sync (Google Business Profile API)

For up to 8 quotes straight from Google (newest first):

1. Enable **Google Business Profile API** and **My Business Account Management API**.
2. Create an OAuth **Desktop** client; save JSON as `secrets/gbp-oauth-client.json` (gitignored).
3. Authorise once with scope `https://www.googleapis.com/auth/business.manage` and save the refresh token as `secrets/gbp-oauth-token.json` (same shape as GSC: `{ "refresh_token": "..." }`).
4. Discover ids:

   ```bash
   npm run reviews:sync -- --discover-gbp
   ```

5. Set in `.env`:

   ```env
   GBP_ACCOUNT_ID=...
   GBP_LOCATION_ID=...
   ```

When GBP env vars and token are present, sync prefers GBP over Places.

## 粵語簡介

- 評論資料喺 `src/data/google-reviews.json`
- 本地更新：`npm run reviews:sync`
- GitHub 每星期會自動 sync 同 commit（要設 `GOOGLE_PLACES_API_KEY` secret）
- 想 carousel 八則都跟足 Google：用 Business Profile OAuth（見上文）
