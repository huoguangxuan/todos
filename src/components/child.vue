<template>
  <div class="hello">
    <h1>123<Icon type="ios-checkmark" /></h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <p>{{ChuanValue.a}}</p>
    <p>{{ChuanValue.b}}</p>
    <Button type="primary" @click.prevent="setup">我要触发父组件的whatever方法</Button>
    </div>
  </template>
<script>
export default {
  // props:['ChuanValue'],
  props:{
    ChuanValue:{
      type:Object,
      default:()=>{
        return {}
      }
    }
  },
  mounted(){
    
  },
  methods:{
    setup(){
      alert(1)
      this.$emit("dtevent",{a:1})
    }
  }
  
}
</script>

<style lang="stylus">
.hello
  color primary
</style>
