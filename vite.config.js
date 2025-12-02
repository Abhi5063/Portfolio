import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // Vercel needs an explicit base path
  base: "/",

  // Ensures Vercel outputs to the correct folder
  build: {
    outDir: "dist",
  },

  // Fixes common three.js / R3F deployment issues
  optimizeDeps: {
    include: ["three", "@react-three/fiber", "@react-three/drei"],
  },
});
