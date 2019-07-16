<template>
    <div id="app">
        <Row>
            <Col span="5">
              <Menu 
                ref='menu'
                @get-todo-id="mounted1"
              >
            </Menu>
            <div>
            </div>
            </Col>
            <Col span="19" class="right">
              <Todo
              :todo-id='todoId'
              />
            </Col>
        </Row>
    </div>
    
</template>
<script>
import Menu from '../components/Menu'
import Todo from '../components/Todo'
export default {
  data(){
    return{
      todoId:''
    }
  },
    components:{
        Menu,
        Todo
    },
    created(){
    },
    mounted(){
    },
    methods:{
      mounted1: function () {
        this.$nextTick(function () {
          this.todoId=this.$refs.menu.todoId;
          console.log(this.todoId)
        })
      }
    }
}
</script>

<style lang="stylus">
body
  background-color: #315481;
  background-image: linear-gradient(180deg,#315481,#918e82);
  background-repeat: no-repeat;
  background-attachment: fixed;
  color default
#app
  width 1200px
  padding 10px
  margin auto
  height calc( 100vh - 20px )
  
  .right
    height 20px
    background-color white
    height calc( 100vh - 20px )

  // border 1px solid red
.div1
  padding add(10,5)
  // border-radius(20px 50px 50px 0px)
.active
    color primary
input::placeholder
  color gray
</style>
