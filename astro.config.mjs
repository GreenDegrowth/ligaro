import inline from "@playform/inline";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  site: "https://timothybrits.co.za",
  trailingSlash: "never",
  output: "static",
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Lora",
      cssVariable: "--font-lora",
    },
    {
      provider: fontProviders.fontsource(),
      name: "DM Sans",
      cssVariable: "--font-dm-sans",
    },
  ],
  build: {
    assetsInlineLimit: 4096,
    cacheDir: "./.astro-cache",
    rollupOptions: {
      output: {
        crossOrigin: "anonymous",
      },
    },
  },
  integrations: [sitemap(), inline(), compressor()],
  experimental: {
    rustCompiler: true,
  },
});
