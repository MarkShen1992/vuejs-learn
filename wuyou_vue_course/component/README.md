## 30分钟学会Vue脚手架与组件化开发

### Node 下载并安装

- Node官网：https://nodejs.org/en

- 安装完后执行下面的命令来测试`node`是否已经安装成功。

```sh
# 查看node版本
node -v

# 查看npm版本
npm -v

# 更新npm版本命令
npm install -g npm@latest

# npm 设置国内镜像源
npm config set registry https://registry.npmmirror.com

# 使用其他的包管理工具,yarn
npm install -g yarn

# cnpm 工具，具体可以到网站：https://npmmirror.com/ 查看
npm install -g cnpm --registry=https://registry.npmmirror.com
```

- 安装 `@vue/cli`

```sh
npm i @vue/cli -g
```

- 使用 `vue/cli`创建一个项目

```sh
vue create my-vue-project
```

- 使用 `yarn build` 命令构建软件项目后所生成的`dist`文件夹，怎么运行？

```sh
# 安装 serve 工具
npm i serve -g

# 运行打包好的内容
serve dist
```



### vue前端案例

- https://todomvc.com/
- https://github.com/tastejs/todomvc

###   创建项目

```sh
npm create vue@2
```

