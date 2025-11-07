// next.config.js
const isProd = process.env.NODE_ENV === "production";
const repoName = "my"; // <= GANTI dgn nama repo

module.exports = {
  output: "export",            // supaya bisa dihost di GitHub Pages (static)
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  images: {
    // next/image saat export butuh ini, atau pakai <img>
    unoptimized: true,
    // Kalau ambil dari domain eksternal, whitelist juga:
    // domains: ["images.unsplash.com", "res.cloudinary.com"],
  },
  // opsional, kadang membantu routing di Pages
  trailingSlash: true,
};
