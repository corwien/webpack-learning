require('./module-one.js');

require('./module-two.js');

 require('../css/style.css');  // 这样不加loader前缀标识会报错
// require("!style-loader!css-loader!../css/style.css") // 载入 style.css

document.write('It works.');

// vue 组件操作,这里使用ES6 babel语法
import Vue from 'vue';

/**
Vue.component('Heading', require('./components/heading.vue'));
new Vue({
  el:"#app",
})
*/

// 或者使用下面这种方法加载组件

import Heading from './components/heading.vue';

new Vue({
  el:"#app",
  components:{ Heading }
})
