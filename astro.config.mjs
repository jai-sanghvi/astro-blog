// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://friendly-blancmange-7e94a6.netlify.app/",
  integrations: [preact()],
});