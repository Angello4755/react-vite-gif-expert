module.exports = {
  projects: [
    {
      testEnvironment: "jsdom",
    },
  ],
  presets: [
    ["@babel/preset-env", { targets: { esmodules: true } }],
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};
