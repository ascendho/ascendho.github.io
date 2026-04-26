import type { NextConfig } from "next";

const normalizeBasePath = (value?: string) => {
  if (!value) {
    return undefined;
  }

  const trimmedValue = value.replace(/^\/+|\/+$/g, "");

  return trimmedValue ? `/${trimmedValue}` : undefined;
};

const basePath = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH);
const isGithubPagesBuild = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  output: isGithubPagesBuild ? "export" : undefined,
  basePath,
  trailingSlash: isGithubPagesBuild,
};

export default nextConfig;
