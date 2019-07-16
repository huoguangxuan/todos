<template>
  <div class="page-container">
      <el-row>
        <el-col :span='5'>
          <h1>element组件试用</h1>
        </el-col>
        <el-col :span='19'>
          <UpLoader
            @upload='uploadImg'
            ref="abc"
          />
          </el-col>
      </el-row>
      <el-button @click="prun">调用子组件方法</el-button>
    
  </div>
</template>
<script>
import UpLoader from '../components/upload'
export default {
  name:'newscomponent',
  methods:{
    prun1(){
      alert('这是父组件的方法')
    },
    prun(){
      this.$refs.abc.crun()
      // alert('这是父组件的方法')
    },
    uploadImg(filename){
      alert(`父组件的方法和传的参数：${filename}`)
    }
  },
  mounted(){
    
  },
  components:{
    UpLoader
  }
   
}
</script>
<style lang="stylus">
.page-container
  width 1200px
  margin auto
</style>


