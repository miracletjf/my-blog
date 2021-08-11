const path = require('path')

module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    logo: 'hero.png',
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@images': path.join(__dirname, 'assets/images')
      }
    }
  }
}