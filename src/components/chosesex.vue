<template>
  <p>
      <input type="radio"  id="men" value="men" name="男"/>
      <label for="men">
        男
      </label>
      <input type="radio" id="women" value="women" name="女"/>
      <label for="women">
        女
      </label>
      <span> 你选择了{{sex}}</span>
  </p>
</template>
<script>
  export default {
    props:[
      'label',
    ],
    data(){
      return{
        sex:'men'
      }
    }
  }
</script>
