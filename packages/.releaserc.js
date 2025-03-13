const args = process.argv.slice(2);
const pkgArgs = args.find((it) => it.startsWith("--package=")) || [];
const pkgName = pkgArgs.split("=")[1] || "no-release";
const headerPattern = new RegExp(`^(\\w+)\\(${pkgName}\\):\\s+(.*)$`);

module.exports = {
  branches: ["main"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "angular",
        parserOpts: {
          headerPattern,
        },
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        parserOpts: {
          headerPattern,
        },
      },
    ],
    // ["@semantic-release/npm", { pkgRoot: "packages/${package}" }],
    // ["@semantic-release/github", { assets: "packages/${package}/dist/**" }],
    // ["@semantic-release/git", { assets: ["packages/${package}/package.json"] }],
  ],
};
