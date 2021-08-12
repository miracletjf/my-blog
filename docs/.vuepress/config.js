const path = require('path')

module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    logo: '/hero.png',
    // 导航栏
    // navbar: false,  // 禁用导航栏
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
    // 侧边栏
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
    },
    //  搜索框
    // search: false,
    // searchMaxSuggestions: 10,
    // 最后更新时间
    lastUpdated: '更新时间',
    // 页面滚动效果
    smoothScroll: true,
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@images': path.resolve('src/assets/images')
      }
    }
  },
  plugins: [
    [
      '@vuepress/last-updated', {
        transformer: (timestamp, lang) => {
          console.log(lang)
          // 不要忘了安装 moment
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).fromNow()
        }
      }
    ]
  ],
  // 多语言配置
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    // '/': {
    //   lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
    //   title: 'VuePress',
    //   description: 'Vue-powered Static Site Generator'
    // },
    '/': {
      lang: 'zh-CN',
      title: 'VuePress',
      description: 'Vue 驱动的静态网站生成器'
    }
  }
}