<template>
  <div>
    <ul>
        <li 
        v-for='(menu,index) in todoList' 
        :key='index'
        @click="goList(menu.id)"
        :class="{'active':menu.id === todoId}"
        >
          <span class="pr15">
            <i v-if="menu.locked" class="el-icon-lock"></i></span>
          <span class="pr15">{{menu.title}}</span>
          <span><Badge class="badge-alone" :count="menu.count"/> </span>
        </li>
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
      todoId:'',
      menus:[
      ]
    }
  },
  watch:{
    'todoId'(newValue){
      // this.$router.push({ path: `/todo/${newValue}` })
       this.$router.push({ name: 'todo', params: { id: newValue } });
      //监听到用户的点击todoId的变化在跳转路由
    }
  },
  computed:{
    todoList(){
         return this.$store.getters.getTodoList; // 返回vuex getters.js 定义的getTodoList数据
    }
  },
  created(){
    // this.initDate()
    this.$store.dispatch('getTodo').then(() => { //调用vuex actions.js 里面的 getTodo函数
      this.$nextTick(() => {
        this.goList(this.todoList[0].id);
      });
    });
  },
  mounted(){
    
  },
  methods:{
    initDate(){
        getTodoList().then(res=>{
          var {todos} = res.data
          this.menus=todos;
          this.todoId=this.menus[0].id
        })
    },
    additem(){
      addTodo({}).then(()=>{
        this.$store.dispatch('getTodo').then(res=>{
          this.goList(this.todoList[this.todoList.length-1].id);//为啥不起作用
        })
      //  getTodoList().then(res=>{
      //   var {todos} = res.data
      //   this.menus=todos;
      //   this.todoId=this.menus[this.menus.length-1].id
      // })
      })
    },
    goList(id){
      this.todoId = id;
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

