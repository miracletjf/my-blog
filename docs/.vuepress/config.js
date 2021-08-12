const path = require('path')

module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    logo: '/hero.png',
    // navbar: false,  // 禁用导航条
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Node', link: '/node/' },
      { text: 'TypeScript', link: '/typescript/' },
      { text: 'Vue', link: '/vue/' },
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
    // displayAllHeaders: true,
    sidebar: {
      '/node/': [{
        title: 'Node',   // 必要的
        // path: '/node/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          ['/node/', 'NODE'],
          ['/typescript/', 'TYPESCRIPT'],
          ['/vue/', 'VUE']
        ]
      }],
      '/typescript/': [{
        title: 'Typescript',   // 必要的
        // path: '/node/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          ['/node/', 'NODE'],
          ['/typescript/', 'TYPESCRIPT'],
          ['/vue/', 'VUE']
        ]
      }],
      '/vue/': [{
        title: 'Vue',   // 必要的
        // path: '/node/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          ['/node/', 'NODE'],
          ['/typescript/', 'TYPESCRIPT'],
          ['/vue/', 'VUE']
        ]
      }],
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@images': path.resolve('src/assets/images')
      }
    }
  }
}