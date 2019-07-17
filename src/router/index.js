import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Index from '../views/index.vue'
import todo from '../components/Todo.vue'
export default new VueRouter({ // 创建 router 实例，然后传 `routes` 配置
  routes: [
    {
      path: '/',  //访问路径
      name: '首页', // 路径名
      component: Index, //访问的组件,即访问‘/’,它会加载 Layouts 组件所有的内容。
      children: [{
        path: '/todo/:id',
        name: 'todo',
        component: todo
      }]
    }
  ]
})