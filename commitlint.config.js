module.exports = {
  rules: {
    "type-empty": [2, "never"],
    "subject-empty": [2, "never"],
    "subject-min-length": [2, "always", 10],
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "docs", "chore", "build", "style", "refactor", "test"],
    ],
    "body-leading-blank": [2, "always"],
  },
};
