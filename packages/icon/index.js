import plusIcon from './src/icon.vue';

plusIcon.install = Vue => {
    Vue.component(plusIcon.name,plusIcon);
}
export default plusIcon