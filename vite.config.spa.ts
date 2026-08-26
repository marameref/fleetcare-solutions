// Standalone Vite + React SPA config — used by `npm run dev:spa` / `npm run build:spa`.
// This is the config to use when the project is exported to GitHub and deployed on
// Netlify, Vercel or GitHub Pages. It has no Lovable/TanStack Start dependency:
// index.html -> src/main.tsx -> src/App.tsx.
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  // Set base to "/<repo-name>/" when deploying to GitHub Pages from a project repo.
  base: process.env.VITE_BASE_PATH ?? "/",
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  build: {
    outDir: "dist-spa",
    sourcemap: false,
  },
  server: {
    host: "::",
    port: 5173,
  },
});
