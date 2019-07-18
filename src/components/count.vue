<template>
  <div>
    <el-button @click="addCount" class="primary">点击{{count}}次</el-button>
  </div>
</template>
<script>
export default {
  computed:{
    count(){
      return this.$store.state.count
    }
  },
  methods:{
    addCount(){
      this.$store.dispatch('Increment')
    }
  }
}
</script>

