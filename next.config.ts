// next.config.js
const isProd = process.env.NODE_ENV === "production";
const repoName = "my";

module.exports = {
  output: "export",
  basePath: isProd ? `/${repoName}` : "",
  images: { unoptimized: true },
  trailingSlash: true,
  env: { NEXT_PUBLIC_BASE_PATH: isProd ? `/${repoName}` : "" },
};
