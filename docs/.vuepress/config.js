const path = require('path')

module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    logo: 'hero.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@images': path.join(__dirname, 'assets/images')
      }
    }
  }
}