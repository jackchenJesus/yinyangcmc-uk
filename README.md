# Yin Yang CMC UK

Astro rebuild of [yinyangcmc.uk](https://yinyangcmc.uk/) — Hong Kong-standard Chinese medicine clinics in Wimbledon and Reading.

## Local development

```bash
npm install
npm run dev
```

## Deploy to Cloudflare Workers

**Production (`yinyangcmc.uk`)** must be deployed to the **HK Cloudflare account** where the `yinyangcmc-uk` Worker has **Custom domain** `yinyangcmc.uk` connected (Workers → yinyangcmc-uk → Domains). Deploying to the **UK** account only updates `*.workers.dev` and does **not** change the live site.

```bash
npm run deploy
```

Use `wrangler login` or API token scoped to the **HK** account. For Cloud Agents / GitHub Actions, set `CLOUDFLARE_ACCOUNT_ID` and `CLOUDFLARE_API_TOKEN` to that same HK account—not UK.

Connect the GitHub repository to Cloudflare Workers Builds so every push to `master` deploys automatically.

Build command: `npm run build`  
Output / assets directory: `dist`
