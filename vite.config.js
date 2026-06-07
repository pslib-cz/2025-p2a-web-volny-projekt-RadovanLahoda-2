import { Manipulation } from "swiper/modules";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/2025-p2a-web-volny-projekt-RadovanLahoda-2/",
  build: {
    rolldownOptions: {
      input: {
        main: "./index.html",
        about: "./pages/about.html",
        contacts: "./pages/contacts.html",
        p1: "./products/p1.html",
        p2: "./products/p2.html",
        p3: "./products/p3.html",   
        p4: "./products/p4.html",
      },
    },
  },
});
