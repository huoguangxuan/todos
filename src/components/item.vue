<template>
<transition name="slide-fade">
  <div class="list-item editingClass editing"> <!-- 最外层容器-->
    <label class="checkbox"> <!--自定义的多选框-->
      <input type="checkbox" @change="onChange" :disabled="locked" v-model="item.checked"> <!--item.checked-->
      <span class="checkbox-custom"></span>
    </label>
    <input type="text" v-model="item.text" placeholder='写点什么。。。' :disabled=" item.checked || locked" @keyup.enter="onChange">  <!--绑定item.text-->
    <a class="delete-item" v-if="item.checked && !locked" @click="item.isDelete = true;onChange()"> <!--删除图标-->
      <i class="el-icon-delete"></i>
    </a>
  </div>
</transition>  
  
</template>
<script>
import {editRecord} from '../api/api'
export default {
  name:'item',
  props:{
   item:{
      type: Object,
      default: () => {
        return {
          checked: false,
          text: '你好,世界'
        };
      }
   },
   'index': {

    },
    'id': {

    },
    'initDate': {

    },
    'locked': {
    }
  }, //子组件显式的用 props 选项声明它期待获得的数据这里申明 它想要一个叫做 ’item‘的数据。
 
  methods:{
    onChange(){
       editRecord({
        id: this.id, record: this.item, index: this.index
      }).then(data => {
        this.initDate();
        console.log('ok?')
        this.$store.dispatch('getTodo');
      });
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
    input[type="checkbox"]
      color red
      &:checked
        text-decoration line-through
        color #999
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
    .slide-fade-enter-active {
      transition: all .3s ease;
    }
    .slide-fade-leave-active {
      transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-active {
      transform: translateX(10px);
      opacity: 0;
    }
</style>

