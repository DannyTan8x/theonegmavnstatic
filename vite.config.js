import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/theonegmavnstatic/", // Replace <repository-name> with your GitHub repository name
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import "src/styles.scss";`,
  //     },
  //   },
  // },
  // resolve: {
  //   alias: {
  //     "@": path.resolve(path.dirname(new URL(import.meta.url).pathname), "src"), // Alias '@' to 'src'
  //   },
  // },
});
