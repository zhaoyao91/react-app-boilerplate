module.exports = {
  babel: {
    plugins: [
      "lodash",
      "emotion",
      // 仅按需加载 js 文件
      // css 文件继续保留统一加载，否则，在没有引入 antd 的页面，样式会不一致
      ["import", { libraryName: "antd-mobile", style: false }]
    ]
  },
  webpack: {
    configure: {
      // webpack 默认使用 mock 值 'index.js' 作为 __filename
      // 以下配置填充真实的 __filename，以便用作模块的唯一 key
      node: {
        __dirname: true,
        __filename: true
      }
    }
  }
};
