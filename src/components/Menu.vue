<template>
  <div>
    <ul>
        <li 
        v-for='(menu,index) in menus' 
        :key='index'
        @click="goList(menu.id)"
        :class="{'active':menu.id === todoId}"
        >
          <Icon type="ios-lock-outline"  class="pr15" />
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
        { title: '星期一', count: 1, locked: true }, //菜单的模拟数据
        { title: '星期二', count: 2, locked: true }, 
        { title: '星期三', count: 3, locked: false }
      ]
    }
  },
  watch:{
  },
  computed:{

  },
  created(){
   
  },
  mounted(){
    this.initDate()
  },
  methods:{
    
      initDate(){
      let _this = this
      getTodoList().then(res=>{
        var {todos} = res.data
        this.menus=todos;
        this.todoId=this.menus[0].id
      })
    },
    additem(){
      addTodo({}).then(res=>{
        this.initDate()
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

