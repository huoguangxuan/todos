<template>
  <div>
    <div class="head">
      <h2>
        <span><input  type="text" v-model="todo.title" @keyup.enter='updateTitle(todo)'/> <Badge :count="todo.count" class="badge-alone"></Badge></span>
        <span class="pull-right"><Icon type="ios-trash-outline" /></span>
        <span class="pull-right pr15"><Icon type='ios-lock-outline'/></span>
      </h2>
      <Icon type='ios-add-circle-outline' class="addicon" /> 
      <input type="text" class="inputtodo" @keyup.enter='onAdd' v-model="text" placeholder="请输入些内容...">
    </div>
    <div class="item" v-for="(item,index) in items" :key="index"> <!-- 这里`v-for`会循环我们在 `data`函数 事先定义好的 ’items‘模拟数据，循环后拿到单个对象，在通过prop把数据传输给子组件 item -->
        <item :item="item"></item>
    </div>
  </div>
</template>
<script>
import item from './Item.vue'
import {getTodo,editTodo,getTodoList} from '../api/api'
export default {
  props:['todoId'],
  data(){
    return{
     todo: { //详情内容
        title: '星期一',
        count: 12,
        locked: false
      },
      items: [ //代办单项列表
        { checked: false, text: '新的一天', isDelete: false },
        { checked: false, text: '新的一天', isDelete: false },
        { checked: false, text: '新的一天', isDelete: false }
      ],
      text: '' //新增代办单项绑定的值
    }
  },
  components:{item},
  watch:{

  },
  created() {
  // created生命周期，在实例已经创建完成，页面还没渲染时调用init方法。
  //this.init();
  },
  mounted(){
    // this.initDate()
  },
  methods:{
  
    onAdd() {
      this.items.push({
        checked: false, text: this.text, isDelete: false
      }); // 当用户点击回车时候 ，给items的值新增一个对象，this.text 即输入框绑定的值
      this.text = ''; //初始化输入框的值。
    }
  },
    
} 
</script>

<style lang="stylus">
.head
  padding add(10,5) add(10,5) add(5,0) add(10,5)
  background linear-gradient(180deg,#d0edf5,#e1e5f0)
  h2
    color #333
    margin-bottom add(10,0)
  .inputtodo
    border 0
    background transparent
    padding-left add(10,0)
    outline none
    width 95% 
  .addicon
    color #666
  .item
    padding add(10,5)
  .ios-lock-outline
  .ios-trash-outline{
    font-weight bold
  }

</style>

