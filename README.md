# Yin Yang CMC UK

Astro rebuild of [yinyangcmc.uk](https://yinyangcmc.uk/) — Hong Kong-standard Chinese medicine clinics in Wimbledon and Reading.

## Local development

```bash
npm install
npm run dev
```

## Deploy to Cloudflare Workers

```bash
npm run deploy
```

Connect the GitHub repository to Cloudflare Workers Builds so every push to `main` deploys automatically.

Build command: `npm run build`  
Output / assets directory: `dist`
