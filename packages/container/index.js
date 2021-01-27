import plusContainer from './src/container'

plusContainer.install = Vue => {
    Vue.component(plusContainer.name,plusContainer)
}
export default plusContainer