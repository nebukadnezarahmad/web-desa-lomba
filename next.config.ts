import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cegah Next.js membuat ulang AGENTS.md / CLAUDE.md di akar proyek
  agentRules: false,
};

export default nextConfig;
