<template>
  <div id="app">
    <Row>
      <Col span="5"><User/></Col>
      <Col span="19" class="right">
        <List/>
      </Col>
    </Row>
     <!-- 行内样式 class 与动态class -->
    <!-- <div class="div1" :class="{active:this.isActive}" :style="{border:'1px solid red',lineHeight:'40px'}">123</div> -->
  </div>
</template>

<script>
import List from './components/List.vue'
import User from './components/User.vue'

export default {
  name:'App',
  isActive:true,
  components: {
    User,
    List
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
::placeholder
  color gray
</style>
