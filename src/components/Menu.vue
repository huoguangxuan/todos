<template>
<div>
<ul>
    <li 
    v-for='menu in menus' 
    @click="goList(menu.id)"  
    :key='menu.id'
    :class="{'active':menu.id===todoId}"
    >
      <Icon type="ios-lock-outline"  class="pr15" />
      <span class="pr15">{{menu.title}}</span>
      <span><Badge class="badge-alone" :count="menu.count"/> </span>
    </li>
    <!-- <li><Icon class="pr15" type="ios-lock-outline" />李四</li> -->
  </ul>
  <ul>
    <li @click="additem" class="addbtn">
      
     <Icon class="pr15" type="md-add" />新增
    </li>
  </ul>
  
</div>
</template>
<script>
import {getTodoList,addTodo} from '../api/api'
export default {
  name:'amenu',
  data(){
    return{
      menus:[],
      todoId:'',//默认选中id
      todoNum:0
    }
  },
  watch:{
    'todoId':function(id){
      this.$router.push({ name: 'todo', params: { id: id } });
      //监听到用户的点击todoId的变化在跳转路由
    }
  },
  computed:{

  },
  created(){
     getTodoList({}).then(res => {
      const TODOS = res.data.todos; // 数据都会返回在res.data里面。
      this.menus = TODOS; // 我的把菜单数据赋值给定义的this.items
      this.todoId = this.menus[0].id; // 把菜单数据的默认的第一个对象的id赋值给默认选中的id
    }).catch(err=>{
      console.log(err)
    });
    this.$store.dispatch('getTodo').then(() => { // 调用vuex actions.js 里面的 getTodo函数
      this.$nextTick(() => {
        this.goList(this.menus[0].id);
      });
    });
  },
  mounted(){
  },
  methods:{
    
    goList(id) { // 点击菜单时候,替换选中id
      this.todoId = id;
    },
    additem:function(){
      // 调用新增菜单的接口，在接口调用成功在请求数据
      addTodo({}).then(data=>{
        getTodoList({}).then(res => {
          const TODOS = res.data.todos;
          this.todoId = TODOS[TODOS.length - 1].id;
          this.menus = TODOS;
        });
      })
    }
  }
  
}
</script>

<style lang="stylus">
  li
    color default
    list-style none
    line-height 48px
    font-size 16px
    padding-left add(10,0)
    &.active
      color white
    border-bottom 1px solid default
  .addbtn
    color primary

</style>

