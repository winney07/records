const moment = require('moment');
moment.locale('zh-cn')

module.exports = {
    // base:'/notes/',   // 如果在deploy.sh中配置自定义域名CNAME，则不设置base
    title: 'winney',
    description: 'winney，笔记，VuePress',
    head: [
      ['link', { rel: 'icon', href: '/assets/img/favicon-32x32-next.png' }],
      ['meta', { name: 'keywords', content: 'winney，笔记，VuePress' }],
      ['meta', { name: 'author', content: 'winney' }],
    ],
    themeConfig: {
      logo: '/assets/img/logo.jpeg',
      lastUpdated: '更新时间', // string | boolean
      nav: [
        { text: '首页', link: '/' },
        { text: '关于我们', link: '/about/' },
        { 
          text: '历史·政治·经济', 
          lariaLabel: '学习下拉列表',
          items: [
              { text: '历史', link: '/history/' },
              { text: '政治', link: '/politics/' },
              { text: '经济', link: '/economics/' },
          ]
        },
        { 
          text: '系统/软件/网站', 
          lariaLabel: '软件/网站下拉列表',
          items: [
              { text: 'Macbook', link: '/macbook/' },
              { text: '常见问题', link: '/common/' },
              { text: '网站', link: '/website/' },
              { text: '软件', link: '/software/' }
          ]
        },
        {
            text: '日常',
            ariaLabel: '日常下拉列表',
            items: [
                { text: '日常', link: '/daily/daily/' },
                { text: '快捷键', link: '/daily/shortcut/' },
                { text: '兴趣爱好', link: '/daily/hobby/' }
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
      sidebar: [   // 侧边栏分组
        {
          title: 'Macbook',   // 必要的
          path: '/macbook/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          // collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            '/macbook/phone',
            '/macbook/shortcut',
            '/macbook/guide',
            '/macbook/software',
          ]
        },
        {
          title: '软件',   // 必要的
          path: '/software/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          // collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            '/software/mobile',
            '/software/pc',
          ]
        },
        {
          title: '网站',   // 必要的
          path: '/website/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          // collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            '/website/study',
            '/website/website'
          ]
        },
        {
          title: '常见问题',   
          path: '/common/',     
          sidebarDepth: 1,   
        },
        {
          title: '日常',   
          path: '/daily/',     
          sidebarDepth: 1,   
          children: [
            '/daily/daily/',
            '/daily/shortcut/',
            '/daily/hobby/'
          ]
        },
        {
          title: '历史',   
          path: '/history/',     
          sidebarDepth: 1,   
          children: [
            '/history/',
            '/history/difficult/',
          ]
        },
        {
          title: '政治',   
          path: '/politics/',     
          sidebarDepth: 1,   
          children: [
            '/politics/',
          ]
        },
        {
          title: '经济',   
          path: '/economics/',     
          sidebarDepth: 1,   
          children: [
            '/economics/',
          ]
        },
        {
          title: '兴趣爱好',   
          path: '/daily/hobby/',     
          sidebarDepth: 1, 
          children: [
            '/daily/hobby/photography',
            '/daily/hobby/drawing',
            '/daily/hobby/movie',
          ]  
        },

      ]

      // 多个侧边栏
      // sidebar:{
      //   "/software/": [
      //     "mobile",
      //     "pc",
      //   ],
      //   "/website/": [
      //     "study",
      //   ],
      //   "/macbook/": [
      //     "shortcut",
      //     "guide",
      //   ],
      //   "/about/": [
      //     "about1",
      //     "about2",
      //     "about3",
      //   ],
      //   "/contact/": [
      //     "contact1",
      //     "contact2",
      //     "contact3",
      //   ],
      //   "/":[]  // 这个要放在最后面，如果放在数组最前面，匹配到它，后面的都不被匹配到，后面写的就不起作用了
      // },
      
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