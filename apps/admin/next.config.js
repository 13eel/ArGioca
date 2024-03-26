import MillionLint from "@million/lint";

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  transpilePackages: ["@packages/ui", "@packages/db"],
};

export default MillionLint.next({
  rsc: true,
})(config);
