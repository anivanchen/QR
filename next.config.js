const debug = process.env.NODE_ENV !== "production";

module.exports = {
  reactStrictMode: true,
  exportPathMap: function () { // /Next-React-Components
    return {
      "/qr": { page: "https://anivanchen.github.io/qr" },
    }
  },
  assetPrefix: !debug ? 'https://anivanchen.github.io/qr' : '',
}
