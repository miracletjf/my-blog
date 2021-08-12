const path = require('path')

module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    logo: 'hero.png',
    // navbar: false,  // 禁用导航条
    nav: [
      { text: 'Home', link: '/' },
      { text: 'TypeScript', link: '/typescript/' },
      { text: 'Node', link: '/node/' },
      // { text: 'Dropdown',  items: [
      //   { text: 'xxx', link: 'xxx' },
      //   { text: 'items', items: [
      //     { text: 'ccc', link: 'ccc' },
      //     { text: 'vvv', link: 'vvv' },
      //     { text: 'xxx', link: 'xxx' },
      //   ]},
      //   { text: 'zzz', link: 'zzz' },
      // ]}
      // { text: 'GitHub', link: '' }
    ],
    displayAllHeaders: true,
    sidebar: [
      '/node/',
      '/typescript/',
      ['/vue/', 'Explicit link text']
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@images': path.resolve('src/assets/images')
      }
    }
  }
}