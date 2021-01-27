import plusBtn from './btn';
import plusContainer from './container';
import plusRow from './row';
import plusCol from './col';
import plusFlex from './flex';
import plusItem from './item';
import plusIcon from './icon';
import plusBar from './icon';
import plusLoading from './loading';
// 定义一个组件列表，将plusBtn组件放入其中
const components = [
    plusBtn,
    plusContainer,
    plusRow,
    plusCol,
    plusFlex,
    plusItem,
    plusIcon,
    plusBar,
    plusLoading
    //... 未来其他的组件需要在开头引入
]
// 定义 调用vue的加载器方法，将 Vue 作为参数传入
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  install.installed = true
  // 遍历组件列表，将组件注入进vue组件中
  components.map(component => Vue.component(component.name, component))
}

// 判断调用vue加载器，实现全局加载
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}
