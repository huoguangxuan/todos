<template>
<div>
<ul>
    <li class="active"><Icon type="ios-unlock" class="pr15" />张三</li>
    <li><Icon class="pr15" type="ios-unlock" />李四</li>
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
  methods:{
    additem:function (){
      alert(1)
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
    .pr15
      padding-right add(10,0)
    &.active
      color white
    border-bottom 1px solid default
  .addbtn
    color primary

</style>

