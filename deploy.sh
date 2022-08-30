#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo 'notes.winney07.cn' > CNAME  
# 访问路径：https://notes.winney07.cn/

# 不配置自定义域名，则访问路径为http://winney07.github.io/notes
# 如果winney07.github.io已经CNAME到，www.winney07.cn，则访问路径为：http://www.winney07.cn/notes/

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:winney07/notes.git master:gh-pages

cd -