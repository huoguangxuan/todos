import Vue from 'vue'


import { plugin } from 'vue-function-api';

import { Button, Icon,Row,Col,Badge ,RadioGroup,Radio} from 'iview';
import 'iview/dist/styles/iview.css';
import App from './App.vue';
import router from './router'
import store from './vuex/store'
Vue.config.productionTip = false;

Vue.use(plugin);



Vue.component('Button', Button);
Vue.component('Icon', Icon);
Vue.component('Row', Row);
Vue.component('Col', Col);
Vue.component('Badge', Badge);
Vue.component('RadioGroup', RadioGroup);
Vue.component('Radio', Radio);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
