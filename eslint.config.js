import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node, // ✅ Add Node.js globals like process, require
        ...globals.es2021, // ✅ Optional: modern JS globals
      },
    },
    rules: {
      // You can customize rules here
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    ignores: ["node_modules", "dist", "build"],
  },
]);
