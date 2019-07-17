<template>
  <div class="list-item editingClass editing"> <!-- 最外层容器-->
    <label class="checkbox"> <!--自定义的多选框-->
      <input type="checkbox" v-model="item.checked"> <!--item.checked-->
      <span class="checkbox-custom"></span>
    </label>
    <input type="text" v-model="item.text" placeholder='写点什么。。。'>  <!--绑定item.text-->
    <a class="delete-item"> <!--删除图标-->
      <i class="el-icon-delete"></i>
    </a>
  </div>
</template>
<script>
export default {
  name:'item',
  props: ['item'], //子组件显式的用 props 选项声明它期待获得的数据这里申明 它想要一个叫做 ’item‘的数据。
  data(){
    return{

    }
  }

};
</script>
<style lang="stylus">
    .list-item
        display flex
        padding add(10,0) add(10,5) add(10,0) add(10,5)
    .checkbox
        flex: 0, 0, 44px;
        cursor: pointer;
    input[type="text"] 
        flex: 1
        background transparent
        cursor pointer
        border none
        outline none
        &:focus
            cursor: text
    a
      color #666

</style>

