<template>
  <div>
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          <el-button @click.stop="crun1">调父组件的方法</el-button>
        </el-upload>
  </div>
</template>
<script>
export default {
  name:'uploadcomponent',
  data(){
    return{
       fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
    }
  },
  methods:{
    crun1(){
      this.$parent.$parent.$parent.prun1()
    },
    crun(){
      alert('这是子组件的方法')
    },
     handleExceed(files, fileList){
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
      beforeRemove(){

      },
      handlePreview(file){
      },
      beforeRemove(file, fileList){
          return this.$confirm(`确定移除 ${ file.name }？`);
      },
      handleRemove(file){
        this.$emit(
          "upload",
          `${window.location.protocol}//` + file.name
        );
      }
    }
}
</script>

