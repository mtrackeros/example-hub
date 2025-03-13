module.exports = {
  branches: ["main"],
  plugins: [
    [
      "semantic-release-monorepo",
      { analyzeCommits: ["@semantic-release/commit-analyzer"] },
    ],
    "@semantic-release/release-notes-generator",
    ["@semantic-release/npm", { pkgRoot: "packages/${package}" }],
    ["@semantic-release/github", { assets: "packages/${package}/dist/**" }],
    ["@semantic-release/git", { assets: ["packages/${package}/package.json"] }],
  ],
};
