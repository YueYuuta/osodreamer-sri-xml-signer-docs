// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://yueyuuta.github.io/osodreamer-sri-xml-signer-docs/",
  base: "/osodreamer-sri-xml-signer-docs/",

  markdown: {
    shikiConfig: {
      theme: "dracula",
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
