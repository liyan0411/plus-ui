import plusCol from './src/col'
// 为组件提供 install 方法，供组件对外按需引入
// 所有组件，必须具有 install，才能使用 Vue.use()
plusCol.install = Vue => {
  Vue.component(plusCol.name, plusCol)
}
export default plusCol