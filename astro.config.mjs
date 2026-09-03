// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const isGitHubPagesDeploy = process.env.PUBLIC_DEPLOY_TARGET === "github-pages";
const githubPagesOrigin = "https://keithc5.github.io";
const githubPagesBase = "/glenwoodflooring";

// https://astro.build/config
export default defineConfig({
  site: isGitHubPagesDeploy ? githubPagesOrigin : "https://www.glenwoodflooring.ie",
  base: isGitHubPagesDeploy ? githubPagesBase : "/",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/admin/"),
    }),
  ],
});
