import plusBtn from './src/btn'
// 为组件提供 install 方法，供组件对外按需引入
// 所有组件，必须具有 install，才能使用 Vue.use()
plusBtn.install = Vue => {
  Vue.component(plusBtn.name, plusBtn)
}
export default plusBtn
