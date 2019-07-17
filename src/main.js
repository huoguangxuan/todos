import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { plugin } from 'vue-function-api';
import { Button, Icon,Row,Col,Badge ,RadioGroup,Radio} from 'iview';
import 'iview/dist/styles/iview.css';

import App from './App.vue';
import router from './router'
import store from './vuex/store'
import Mock from './mock'; // 引入mock模块
Mock.start(); //并且执行初始化函数
Vue.config.productionTip = false;

Vue.use(plugin);

//全局引入element
Vue.use(ElementUI);

Vue.component('Button', Button);
Vue.component('Icon', Icon);
Vue.component('Row', Row);
Vue.component('v-col', Col);
Vue.component('Badge', Badge);
Vue.component('RadioGroup', RadioGroup);
Vue.component('Radio', Radio);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
