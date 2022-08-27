const moment = require('moment');
moment.locale('zh-cn')

module.exports = {
    // base:'/ydocs/',
    title: 'winney',
    description: 'winney，个人博客，VuePress',
    head: [
      ['link', { rel: 'icon', href: '/assets/img/favicon-32x32-next.png' }],
      ['meta', { name: 'keywords', content: 'winney，个人博客，VuePress' }],
      ['meta', { name: 'author', content: 'winney' }],
    ],
    themeConfig: {
      logo: '/assets/img/logo.jpeg',
      lastUpdated: '更新时间', // string | boolean
      nav: [
        { text: '首页', link: '/' },
        { text: '关于我们', link: '/about/' },
        { text: '测试', link: '/test.html' },
        {
            text: '语言',
            ariaLabel: '语言下拉列表',
            items: [
                { text: '中文', link: '/language/chinese/' },
                { text: '英文', link: '/language/english/' }
            ]
        }
      ],
      // sidebar: "auto"
      // sidebar: [
      //   '/',
      //   '/about/',
      //  // ['/about/', '关于'],
      //   ['/test', '测试一下']
      // ]
      // sidebar: [  侧边栏分组
      //   {
      //     title: '关于我们',   // 必要的
      //     path: '/about/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      //     collapsable: false, // 可选的, 默认值是 true,
      //     sidebarDepth: 1,    // 可选的, 默认值是 1
      //     children: [
      //       '/about/about1'
      //     ]
      //   },
      //   {
      //     title: '联系我们',   // 必要的
      //     path: '/contact/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      //     collapsable: false, // 可选的, 默认值是 true,
      //     sidebarDepth: 1,    // 可选的, 默认值是 1
      //     children: [
      //       '/contact/contact1'
      //     ]
      //   },
      // ]

      // 多个侧边栏
      sidebar:{
        "/about/": [
          "about1",
          "about2",
          "about3",
        ],
        "/contact/": [
          "contact1",
          "contact2",
          "contact3",
        ],
        "/":[]  // 这个要放在最后面，如果放在数组最前面，匹配到它，后面的都不被匹配到，后面写的就不起作用了
      },
      
    },

    plugins: [
      [
        '@vuepress/last-updated',
        {
          transformer: (timestamp) => {
            // 不要忘了安装 moment
            const moment = require('moment')
            return moment(timestamp).format('LLLL')
          }
        }
        // {
        //   transformer: (timestamp, lang) => {
        //     // 不要忘了安装 moment
        //     const moment = require('moment')
        //     moment.locale(lang)
        //     return moment(timestamp).fromNow()
        //   }
        // }
      ]
    ]
}