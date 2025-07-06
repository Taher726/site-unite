import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable unused variables warnings/errors
      "@typescript-eslint/no-unused-vars": "off",

      // Disable img element warning in favor of next/image
      "@next/next/no-img-element": "off",

      // Disable empty interface warning
      "@typescript-eslint/no-empty-object-type": "off",

      // Disable React hooks exhaustive deps warning
      "react-hooks/exhaustive-deps": "off",

      "@typescript-eslint/no-explicit-any": "off"

    }
  }
];

export default eslintConfig;
