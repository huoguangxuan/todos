<template>
  <div>
    <Button type="default" @click="counter">点击了{{count}}次</Button>
  </div>
</template>
<script>
  export default {
   data(){
     return {
       count:0
     }
   },methods:{
     counter(){
       this.count ++
     }
   }
  }
</script>

