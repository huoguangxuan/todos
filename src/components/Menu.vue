<template>
<div>
<ul>
    <li 
    v-for='menu in todoList' 
    @click="goList(menu.id)"  
    :key='menu.id'
    :class="{'active':item.id===todoId}"
    >
      <Icon type="ios-lock-outline"  class="pr15" />
      <span class="pr15">{{menu.tit}}</span>
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
    'todoId'(id){
      this.$router.push({ name: 'todo', params: { id: id } });
      //监听到用户的点击todoId的变化在跳转路由
    }
  },
  computed:{
    todoList(){
      const number = this.$store.getters.getTodoList.length;
      if (this.$store.getters.getTodoList.length < this.todoNum) {
         this.goList(this.$store.getters.getTodoList[0].id);
      }
      return this.$store.getters.getTodoList; // 返回vuex getters.js 定义的getTodoList数据
    }
    
  },
  created(){
     // getTodoList({}).then(res => {
    //   const TODOS = res.data.todos; // 数据都会返回在res.data里面。
    //   this.items = TODOS; // 我的把菜单数据赋值给定义的this.items
    //   this.todoId = TODOS[0].id; // 把菜单数据的默认的第一个对象的id赋值给默认选中的id
    // });
    this.$store.dispatch('getTodo').then(() => { // 调用vuex actions.js 里面的 getTodo函数
      this.$nextTick(() => {
        this.goList(this.todoList[0].id);
      });
    });
  },
  methods:{
    goList(id) { // 点击菜单时候,替换选中id
      this.todoId = id;
    },
    additem:function(){
      var that = this
      var newlist = {
        id:that.menus.length+1,
        tit:'newlist',
        count:0,
        isLock:false
      }
      that.menus.push(newlist)
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

