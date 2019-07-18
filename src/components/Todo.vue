<template>
  <div>
    <div class="head">
      <h2  @click="isUpdate = true ">
        <div v-if="!isUpdate" >
            <span><input style="font-weight:600"  type="text" v-model="todo.title" @keyup.enter='updateTitle'/> <Badge :count="todo.count ||0" v-show="!isUpdate" class="badge-alone"></Badge></span>
            <a class="pull-right pr15" @click.stop="onLock" v-if="todo.locked" ><i class="el-icon-lock"></i></a>
            <a class="pull-right pr15" @click.stop="onLock"  v-if="!todo.locked"  ><i class="el-icon-unlock"></i></a>
            <a class="pull-right pr15" @click="onDelete"  ><i class="el-icon-delete"></i></a>
        </div>
        <div v-if="isUpdate" >
          <span><input  type="text" v-model="todo.title" @keyup.enter='updateTitle' :disabled="todo.locked"/></span>
          <a class="pull-right pr15" @click.stop="isUpdate = false"><i class="el-icon-error"></i></a>
        </div>
      </h2>
      
      <Icon type='ios-add-circle-outline' class="addicon" /> 
      <input type="text" class="inputtodo" :disabled="todo.locked" @keyup.enter='onAdd' v-model="text" placeholder="请输入些内容..." >
    </div>
    <div class="item" v-for="(item,index) in items" :key="index" > <!-- 这里`v-for`会循环我们在 `data`函数 事先定义好的 ’items‘模拟数据，循环后拿到单个对象，在通过prop把数据传输给子组件 item -->
        <item :item="item" :index="index" :id="todo.id" :initDate="initDate" :locked="todo.locked"></item>
    </div>
  </div>
</template>
<script>
import item from './Item.vue'
import {getTodo,editTodo,getTodoList, addRecord} from '../api/api'
export default {
  props:['todoId'],
  data(){
    return{
     todo: { //详情内容
        
      },
      items: [ //代办单项列表
        
      ],
      text: '' ,//新增代办单项绑定的值\
      isUpdate: false // 新增修改状态
    }
  },
  components:{item},
  watch:{
    '$route.params.id'(id){
      this.initDate()
    }
  },
  computed:{
    
  },
  created() {
  // created生命周期，在实例已经创建完成，页面还没渲染时调用init方法。
  this.initDate()
  },
  mounted(){
     
  },
  methods:{
    
    initDate(){
      const ID = this.$route.params.id
      getTodo({id:ID}).then(res=>{
        let { id, title, count, isDelete, locked, record
        } = res.data.todo
        this.todo= {
          id,
          title,
          count,
          locked,
          isDelete
        }
        this.items=record
      })
    },
    
    updateTodo(){
      var _this =this
      editTodo({todo:this.todo}).then(res=>{
        _this.$store.dispatch('getTodo').then(res=>{})
      })
    },
    updateTitle(){
      this.updateTodo()
      this.isUpdate = false;
    },
    onAdd() {
      //调待办的接口
      console.log(1)
      var _this=this
      const id = this.$route.params.id
      addRecord({id,text:this.text}).then(()=>{
        console.log('ok?')
        _this.text='',
        _this.initDate()
        _this.$store.dispatch('getTodo');
      })
    },
    onDelete(){
      this.todo.isDelete = true;
      this.updateTodo()
    },
    onLock(){
        this.todo.locked = !this.todo.locked;
        this.updateTodo()

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
    width 90% 
  .addicon
    color #666
  .item
    padding add(10,5)
  .ios-lock-outline
  .ios-trash-outline{
    font-weight bold
  }
input:disabled
  color #999
</style>

