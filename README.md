#   plus-ui

#   en

A simple vue2.0 UI  for using in your project.

#   Installation

    npm i plus-ui -S

#   Usage

main.js

    import Vue from 'vue'
    import App from './App.vue'

    import PLUSUI from "plus-ui";
    import 'plus-ui/lib/plus-ui.css'
    Vue.use(PLUSUI)

    new Vue({
    el: '#app',
    render: h => h(App)
    })
#   License
MIT.


#   zh-cn

一个基于vue2.0的ui组件库，方便你在项目中的使用

#   安装

    npm i plus-ui -S

#   使用

引入plus-ui组件库
推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。

    npm i plus-ui -S

全局引入 在 main.js 中写入以下内容：

    import Vue from 'vue'
    import App from './App.vue'

    import PLUSUI from "plus-ui";
    import 'plus-ui/lib/plus-ui.css'
    Vue.use(PLUSUI)

    new Vue({
    el: '#app',
    render: h => h(App)
    })

#   License
MIT.