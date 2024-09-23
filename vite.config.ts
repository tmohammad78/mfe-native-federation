import { defineConfig } from "vite";
import { federation } from "@module-federation/vite";
import { createEsBuildAdapter } from "@softarc/native-federation-esbuild";
import { autoPathPlugin } from "esbuild-auto-path-plugin";
import { style } from "@hyrious/esbuild-plugin-style";
import react from "@vitejs/plugin-react";

export default defineConfig(async ({ command }) => ({
  plugins: [
    await federation({
      options: {
        workspaceRoot: __dirname,
        outputPath: "dist",
        tsConfig: "tsconfig.json",
        federationConfig: "src/federation.ts",
        verbose: false,
        dev: command === "serve",
      },
      adapter: createEsBuildAdapter({
        plugins: [autoPathPlugin(), style()],
      }),
    }),
    react()
  ],
}));
