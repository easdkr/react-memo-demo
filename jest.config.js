// const { jestPathAlias } = require("./pathAlias");

module.exports = {
  roots: ["<rootDir>"],
  modulePaths: ["<rootDir>"],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
    "jest-plugin-context/setup",
  ],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],

  moduleNameMapper: {
    "^.src/(.*)$": "<rootDir>/src/$1",
  },
};
