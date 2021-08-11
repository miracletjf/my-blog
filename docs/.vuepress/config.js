const path = require('path')

module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    logo: '/assets/img/logo.png',
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@images': path.join(__dirname, 'assets/images')
      }
    }
  }
}