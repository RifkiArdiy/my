// next.config.js
const isProd = process.env.NODE_ENV === "production";
const repoName = "my"; // ganti sesuai nama repo kamu

/** @type {import('next').NextConfig} */
module.exports = {
  output: "export",
  basePath: isProd ? `/${repoName}` : "",
  images: { unoptimized: true },
  trailingSlash: true,
};
