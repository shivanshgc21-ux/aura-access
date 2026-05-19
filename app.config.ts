export default {
  version: 3,
  name: "aura-access",
  builds: [
    {
      src: "package.json",
      use: "@vercel/static-build",
      config: { distDir: "dist/client" },
    },
    {
      src: "api/index.ts",
      use: "@vercel/edge",
    },
  ],
  routes: [
    { handle: "filesystem" },
    { src: "/(.*)", dest: "/api/index.ts" },
  ],
};
