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

    4.  禁用导航栏

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

       
