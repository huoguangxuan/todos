<template>
    <div id="app">
        <Row>
            <Col span="5"><Menu></Menu></Col>
            <Col span="19" class="right"><Todo/></Col>
        </Row>
    </div>
    
</template>
<script>
import Menu from '../components/Menu'
import Todo from '../components/Todo'
export default {
    components:{
        Menu,
        Todo
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
