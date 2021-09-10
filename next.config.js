const debug = process.env.NODE_ENV !== "production";

module.exports = {
  reactStrictMode: true,
  exportPathMap: function () { // /Next-React-Components
    return {
      "/": { page: "/" },
      "/ap-grid-layout": { page: "/ap-grid-layout" },
      "/ap-highlight": { page: "/ap-highlight" },
    }
  },
  assetPrefix: !debug ? 'https://anivanchen.github.io/qr' : '',
}