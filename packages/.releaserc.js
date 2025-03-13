module.exports = {
  branches: ["main"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "angular",
        parserOpts: {
          headerPattern: /^(\w*)(create-bnb)\: (.*)$/,
        },
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        parserOpts: {
          headerPattern: /^(\w*)(create-bnb)\: (.*)$/,
        },
      },
    ],
    // ["@semantic-release/npm", { pkgRoot: "packages/${package}" }],
    // ["@semantic-release/github", { assets: "packages/${package}/dist/**" }],
    // ["@semantic-release/git", { assets: ["packages/${package}/package.json"] }],
  ],
};
