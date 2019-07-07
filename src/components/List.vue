<template>
  <div>
    <div class="head">
      <h2>{{tit}}</h2>
      <input type="text" placeholder="请输入些内容...">
    </div>
    
  </div>
</template>
<script>
export default {
  name:'动态标题',
  setup(){
    var tit ="这是title"
    return {
      tit,
    }
  }
}
</script>

<style lang="stylus">
.head
  padding add(10,5)
  h2
    color #333
    margin 0 0 add(10,5) 0
</style>

