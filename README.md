# ydocs

VuePress搭建个人博客

[VuePress中文网](https://www.vuepress.cn/)

1. 在GitHub中新建ydocs仓库

2. 克隆仓库

   ```
   git clone git@github.com:winney07/ydocs.git
   ```

3. 切换到目录

   ```
   cd ydocs
   ```

4. 初始化

   ```
   npm init
   ```

5. 将 VuePress 安装为本地依赖

   我们已经不再推荐全局安装 VuePress

   ```
   yarn add -D vuepress
   ```

6. 创建你的第一篇文档

   ```
   mkdir docs && echo '# Hello VuePress' > docs/README.md
   ```

7. 在 `package.json` 中添加一些 [scripts](https://classic.yarnpkg.com/zh-Hans/docs/package-json#toc-scripts)

   `注：这里都配置在docs目录下`  了解[目录结构](https://www.vuepress.cn/guide/directory-structure.html#%E9%BB%98%E8%AE%A4%E7%9A%84%E9%A1%B5%E9%9D%A2%E8%B7%AF%E7%94%B1)

   ```
   {
     "scripts": {
       "docs:dev": "vuepress dev docs",
       "docs:build": "vuepress build docs"
     }
   }
   ```

8. 在本地启动服务器

   ```
   yarn docs:dev
   ```

   VuePress 会在 [http://localhost:8080 (opens new window)](http://localhost:8080/)启动一个热重载的开发服务器。

   `http://localhost:8080` 默认访问到的页面是`ydocs/docs/README.md`的内容

9. 

   1. 在docs目录下新建`about/README.md`，访问`http://localhost:8080/about/`即可显示`about/README.md`的内容
   2. 在docs目录下新建`test.md`，访问`http://localhost:8080/test.html`即可显示`test.md`的内容

10. 在docs目录下，新建[配置文件](https://www.vuepress.cn/guide/basic-config.html#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6)

    一个 VuePress 网站必要的配置文件是 `.vuepress/config.js`

    ```
    ├─ docs
    │  ├─ README.md
    │  └─ .vuepress
    │     └─ config.js
    └─ package.json
    ```

11. [默认主题配置](https://www.vuepress.cn/theme/default-theme-config.html)，以下代码放在根级 `README.md`，即`ydocs/docs/README.md`

    ```
    ---
    home: true
    heroImage: /hero.png
    heroText: Hero 标题
    tagline: Hero 副标题
    actionText: 快速上手 →
    actionLink: /zh/guide/
    features:
    - title: 简洁至上
      details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
    - title: Vue驱动
      details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
    - title: 高性能
      details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
    footer: MIT Licensed | Copyright © 2018-present Evan You
    ---
    ```

    只有以上代码，页面不显示内容

12. 配置导航栏    [默认主题配置](https://www.vuepress.cn/theme/default-theme-config.html#%E9%BB%98%E8%AE%A4%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE)

    1. 新建静态资源目录public，`docs/.vuepress/public`: 静态资源目录。    [目录结构](https://www.vuepress.cn/guide/directory-structure.html#%E9%BB%98%E8%AE%A4%E7%9A%84%E9%A1%B5%E9%9D%A2%E8%B7%AF%E7%94%B1)

    2. [导航栏 Logo](https://www.vuepress.cn/theme/default-theme-config.html#%E5%AF%BC%E8%88%AA%E6%A0%8F-logo)    `docs/.vuepress/public/assets/img/logo.png`

       ```
       // .vuepress/config.js
       module.exports = {
         themeConfig: {
           logo: '/assets/img/logo.png',
         }
       }
       ```

    3. [导航栏链接](https://www.vuepress.cn/theme/default-theme-config.html#%E5%AF%BC%E8%88%AA%E6%A0%8F%E9%93%BE%E6%8E%A5)

       ```
       // .vuepress/config.js
       module.exports = {
         themeConfig: {
           nav: [
             { text: '首页', link: '/' },
             { text: '关于我们', link: '/about/' },
             { text: '测试', link: '/test.html' },
           ]
         }
       }
       ```

       当你提供了一个 `items` 数组而不是一个单一的 `link` 时，它将显示为一个 `下拉列表` ：

       ```
       // .vuepress/config.js
       module.exports = {
         themeConfig: {
           nav: [
             {
               text: 'Languages',
               ariaLabel: 'Language Menu',
               items: [
                 { text: 'Chinese', link: '/language/chinese/' },
                 { text: 'Japanese', link: '/language/japanese/' }
               ]
             }
           ]
         }
       }
       ```

       你还可以通过嵌套的 `items` 来在 `下拉列表` 中设置分组：

       ```
       // .vuepress/config.js
       module.exports = {
         themeConfig: {
           nav: [
             {
               text: 'Languages',
               items: [
                 { text: 'Group1', items: [/*  */] },
                 { text: 'Group2', items: [/*  */] }
               ]
             }
           ]
         }
       }
       ```

    4. 禁用导航栏

       你可以使用 `themeConfig.navbar` 来禁用所有页面的导航栏：

       ```
       // .vuepress/config.js
       module.exports = {
         themeConfig: {
           navbar: false
         }
       }
       ```

       你也可以通过 `YAML front matter` 来禁用某个指定页面的导航栏：

       ```yaml
       ---
       navbar: false
       ---
       ```

​				如：不想在about中显示导航栏，就在`about/README.md`中写以上代码

​			  VuePress 提供了对 [YAML front matter (opens new window)](https://jekyllrb.com/docs/frontmatter/)开箱即用的支持:				

12. [侧边栏](https://www.vuepress.cn/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F)   [默认主题配置](https://www.vuepress.cn/theme/default-theme-config.html#%E9%BB%98%E8%AE%A4%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE)

    ```
    // .vuepress/config.js
    module.exports = {
      themeConfig: {
        sidebar: [
           '/',
            '/about/',   // about后面要加/，这里设置的路径要与nav数组中的link属性匹配
            ['/test', 'testtest']
        ]
      }
    }
    ```

    ```
    sidebar: [
      '/',
      // '/about/',   // 这样写，默认会将该显示页面的第一个标题文本当作侧边栏导航栏的文本（关于我们）
      ['/about/', '关于'], // 这样写，侧边栏导航栏的文本设置为“关于”——自定义
      ['/test', '测试']
    ]
    ```

    1. 页面单独设置侧边栏，`about/README.md`：

       ```
       ---
       sidebar: auto
       ---
       
       ####  关于我们
       
       ## 一级标题
       
       ### 1. 二级标题
       ## 一级标题
       ## 一级标题
       ## 一级标题
       ## 一级标题
       ## 一级标题
       ```

       页面侧边栏显示：

       ```
       关于我们
         一级标题
           1. 二级标题
         一级标题
         一级标题
         一级标题
         一级标题
         一级标题
       ```

    2. 全局配置侧边栏，可以通过配置来在所有页面中启用它：

       ```
       // .vuepress/config.js
       module.exports = {
         themeConfig: {
           sidebar: 'auto'
         }
       }
       ```

    3. [侧边栏分组](https://www.vuepress.cn/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F%E5%88%86%E7%BB%84)

       ```
       sidebar: [
         {
           title: '关于我们',   // 必要的
           path: '/about/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
           collapsable: false, // 可选的, 默认值是 true,
           sidebarDepth: 1,    // 可选的, 默认值是 1
           children: [
             '/about/about1'
           ]
         },
         {
           title: '联系我们',   // 必要的
           path: '/contact/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
           collapsable: false, // 可选的, 默认值是 true,
           sidebarDepth: 1,    // 可选的, 默认值是 1
           children: [
             '/contact/contact1'
           ]
         },
       ]
       ```

       目录结构：

       ```
       .
       ├── docs
       │   │ 
       │   ├── README.md
       │   ├── about
       │   │   └── README.md
       │   │   └── about1.md
       │   │   └── about2.md
       │   │   └── about3.md
       │   ├── contact
       │   │   └── README.md
       │   │   └── contact1.md
       │   │   └── contact2.md
       │   │   └── contact3.md
       │ 
       └── package.json
       ```

    4. [多个侧边栏](https://www.vuepress.cn/theme/default-theme-config.html#%E5%A4%9A%E4%B8%AA%E4%BE%A7%E8%BE%B9%E6%A0%8F)

       ```
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
         "/":[]  // 这个要放在最后面，如果放在数组最前面，匹配到它，后面的都不被匹配到，后面写的就不起作用了,越复杂的路径写越前面
       }
       ```

       `注：当访问http://localhost:8080/about/*时，只显示“about”下的侧边栏内容`

       `注：当访问http://localhost:8080/contact/*时，只显示“contact”下的侧边栏内容`

  

- 插件：[vuepress-plugin-auto-sidebar](https://www.npmjs.com/package/vuepress-plugin-auto-sidebar)
- Github-[vuepress-plugin-auto-sidebar](https://github.com/shanyuhai123/vuepress-plugin-auto-sidebar)
- 使用文档-[Vuepress Plugin Auto Sidebar](https://shanyuhai123.github.io/vuepress-plugin-auto-sidebar/)



#### SEO

- title（标题）
- description（描述信息）
- favicon（[favicon.io](http://favicon.io/)）
- author（作者）
- keywords（关键词）

#### [基本配置](https://www.vuepress.cn/config/#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE)

##### title和description

```
// .vuepress/config.js
module.exports = {
    title: 'winney',
    description: 'winney，个人博客，VuePress',
}
```

```
<title>关于我们 | winney</title> // 会加上页面原来的title
<meta name="description" content="winney，个人博客，VuePress">
```

##### head

```
// .vuepress/config.js
head: [
  ['link', { rel: 'icon', href: '/assets/img/favicon-32x32-next.png' }],
  ['meta', { name: 'keywords', content: 'winney，个人博客，VuePress' }],
  ['meta', { name: 'author', content: 'winney' }],
]
```

#### [更新时间](https://www.vuepress.cn/theme/default-theme-config.html#%E6%9C%80%E5%90%8E%E6%9B%B4%E6%96%B0%E6%97%B6%E9%97%B4)

`注：进行git操作后，会显示更新时间在页面内容下面`

```
// .vuepress/config.js
module.exports = {
  themeConfig: {
    lastUpdated: '更新时间', // string | boolean
  }
}
```

##### [last-updated 插件](https://www.vuepress.cn/plugin/official/plugin-last-updated.html#%E4%BD%BF%E7%94%A8)

```
yarn add moment
```

```
// .vuepress/config.js
const moment = require('moment');

 moment.locale('zh-cn')

module.exports = {
  plugins: [
    [
      '@vuepress/last-updated',
      {
        // transformer: (timestamp, lang) => {
         //  // 不要忘了安装 moment
         //  const moment = require('moment')
        //   moment.locale(lang)
        //   return moment(timestamp).fromNow()
        // }
        
        transformer: (timestamp) => {
          // 不要忘了安装 moment
          const moment = require('moment')
          return moment(timestamp).format('LLLL')
        }
      }
    ]
  ]
}

```

#### 发布到gitHub.io   [GitHub Pages](https://www.vuepress.cn/guide/deploy.html#github-pages)

1. 指向github仓库

   ```
   // .vuepress/config.js
   module.exports = {
       base:'ydocs',
   }
   ```

   

2. 修改base

   ```
   // .vuepress/config.js
   module.exports = {
       base:'/ydocs/',   // 仓库中的目录名
   }
   ```

   `注：改了base之后，http://localhost:8080/ydocs，这样可以访问原来的页面

3. 新增部署文件(deploy.sh)

   `docs/deploy.sh`：在ydocs目录下新建deploy.sh

   ```
   #!/usr/bin/env sh
   
   # 确保脚本抛出遇到的错误
   set -e
   
   # 生成静态文件
   npm run docs:build
   
   # 进入生成的文件夹
   cd docs/.vuepress/dist
   
   # 如果是发布到自定义域名
   # echo 'www.example.com' > CNAME
   
   git init
   git add -A
   git commit -m 'deploy'
   
   # 如果发布到 https://<USERNAME>.github.io
   # git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master
   
   # 如果发布到 https://<USERNAME>.github.io/<REPO>
   # git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
   git push -f git@github.com:winney07/ydocs.git master:gh-pages
   
   cd -
   ```

   修改package.json，添加deploy命令

   ```
   "scripts": {
       "deploy":"bash deploy.sh",
    }
   ```

   部署

   ```
   yarn deploy
   ```

   `提交代码后，可以在ydocs仓库中，看到gh-pages分支`

4. 验证gh-pages

   1. 点击仓库的`Settings`，查看`GitHub Pages`，可以看到GitHub Pages已经启用
   2. 访问https://winney07.github.io/ydocs/即可

5. 设置website,便于他人访问

#### 提交项目代码到GitHub

注：要在ydocs根目录添加`.gitignore`文件：

```
// ydocs/.gitignore

.DS_Store
Thumbs.db
db.json
*.log
node_modules/
.deploy*/
```

##### 取消commit   

[git如何撤销commit的方法(未push)](https://www.jb51.net/article/191633.htm)

[git怎么取消commit](https://m.php.cn/tool/git/484979.html)

[git 取消commit](https://blog.csdn.net/jinyangbest/article/details/86302973)

[Git撤销本地库Commit的方法](https://blog.csdn.net/u012069313/article/details/123240039)

```
git log // 查找要删除的前一次提交的 commit_id
```

```
git reset --hard commit_id    
```

报错：

```
yangyanyi@yangyanyideMacBook-Pro ydocs % git add .
warning: adding embedded git repository: docs/.vuepress/dist
hint: You've added another git repository inside your current repository.
hint: Clones of the outer repository will not contain the contents of
hint: the embedded repository and will not know how to obtain it.
hint: If you meant to add a submodule, use:
hint: 
hint:   git submodule add <url> docs/.vuepress/dist
hint: 
hint: If you added this path by mistake, you can remove it from the
hint: index with:
hint: 
hint:   git rm --cached docs/.vuepress/dist
hint: 
hint: See "git help submodule" for more information.
```

```
git rm --cached docs/.vuepress/dist -f
```



解决：将`.vuepress`目录下的`dist`文件夹删除了，再来执行`git add .`即可

`注：所以每次提交代码到main分支的时候，要将.vuepress/dist目录删除，或者在.ignore中添加这个目录`

```
.DS_Store
Thumbs.db
db.json
*.log
node_modules/
dist/  
.deploy*/
```



#### 自定义域名

1. 增加CNAME

   1. 修改`deploy.sh`

      ```
      # 如果是发布到自定义域名
      echo 'blog.winney07.cn' > CNAME    // 临时设置
      ```

2. DNS解析

   1. 登录阿里云—控制台—域名—域名列表—解析—添加记录
   2. 添加记录：记录类型：CNAME，主机记录：temp，记录值：winney07.github.io
   3. 在GitHub的ydocs仓库中，Settings—Pages—Github Pages—Custom domain查看是否有成功
   4. 如果没有添加成功，手动将`blog.winney07.cn`添加到Custom domain中，访问http://blog.winney07.cn/即可
   5. 可以勾选Enforce HTTPS，使用HTTPS访问

3. 改回base

   1. 在`.vuepress/config.js`中去除base的设置
   2. 重新执行yarn deploy





修改为www.winney07.cn

1. 修改`deploy.sh`

