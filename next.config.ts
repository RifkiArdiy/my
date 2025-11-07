const isProd = process.env.NODE_ENV === "production";
const repoName = "my";

// Pastikan variable tersedia saat proses build Next.js
process.env.NEXT_PUBLIC_BASE_PATH = isProd ? `/${repoName}` : "";

module.exports = {
  output: "export",
  basePath: isProd ? `/${repoName}` : "",
  images: { unoptimized: true },
  trailingSlash: true,
  env: { NEXT_PUBLIC_BASE_PATH: isProd ? `/${repoName}` : "" },
};
