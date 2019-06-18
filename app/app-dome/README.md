# app-dome

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### ==项目介绍==
星巴克项目，主要做的是内部工作管理系统，通过这个平台可知道每一位员工的工作时间安排，调休情况，加班情况以及一系列的加班/工作/调休的申请与审核。
### ==技术介绍==
|--|--vuex、router、axios、ES5/6、scss、transition动画--|--|
### ==项目开发==
|--build    
|--config   
|--node_modules    
|--src     
|--|--api:封装的接口文件    
|--|--assets:放置一些图片,如logo等,存放静态资源(图片、字体等)    
|--|--components:存放的公共组件（弹框，遮罩层）    
|--|--plugins:存放封装插件的（头部和报错弹框）   
|--|--router:路由    
|--|--static:存放的sass    
|--|--store:存放的状态管理文件    
|--|--|--存放的有首页列表的请求与管理    
|--|--utils:构建相关工具方法(字体图标，代理，日期设置)   
|--|--views:主要文件(组件)页面     
|--|--|--Application:申请表页面   
|--|--|--Detail:详情页面    
|--|--|--Home:主页面   
|--|--|--|--Content:主体部分组件   
|--|--|--|--Tabtitle:标题部分     
|--|--|--|--Tabtype:tab切换部分     
|--|--|--|--Titlehead:头部部分     
|--|--|--Login:登录页面   
|--|--app.vue:主组件,页面入口文件   
|--|--main.js:程序入口文件，是初始化vue实例并使用需要的插件,加载各种公共组件(引用router,elementUI,animate.css)     




