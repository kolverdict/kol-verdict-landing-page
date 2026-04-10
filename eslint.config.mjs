import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = [
  {
    ignores: ["kol-verdict/**"],
  },
  ...nextVitals,
  ...nextTs,
];

export default eslintConfig;
