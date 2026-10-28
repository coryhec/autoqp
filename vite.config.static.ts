import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

// Static build for GitHub Pages. Does NOT use @lovable.dev/vite-tanstack-config,
// so there is no Nitro / Cloudflare server target. Output: dist/client
export default defineConfig({
  // Set by the GitHub Actions workflow, e.g. "/my-repo/". Defaults to "/".
  base: process.env["BASE_PATH"] ?? "/",
  plugins: [
    tsConfigPaths(),
    tanstackStart({
      spa: { enabled: true },
    }),
    viteReact(),
    tailwindcss(),
  ],
});
