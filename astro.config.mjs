import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://yinyangcmc.uk",
  output: "static",
  trailingSlash: "never",
  integrations: [
    sitemap({
      filter: (page) => {
        if (page.includes("/404")) return false;
        const path = new URL(page).pathname.replace(/\/$/, "") || "/";
        return ![
          "/blog",
          "/insights-and-advice-from-our-expert-doctors",
          "/insights-from-our-doctors-at-yin-yang-uk",
        ].includes(path);
      },
    }),
  ],
});

