import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Главная страница — утверждённый макет (public/index.html).
  // Адрес остаётся корневым: yazhivu-band.ru/
  async rewrites() {
    return {
      beforeFiles: [{ source: "/", destination: "/index.html" }],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
