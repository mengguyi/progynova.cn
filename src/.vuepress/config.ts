import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Progynova CN",
  description: "A demo for Progynova",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
