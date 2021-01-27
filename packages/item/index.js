import plusItem from './src/item';

plusItem.install = Vue => {
    Vue.component(plusItem.name,plusItem);
}
export default plusItem