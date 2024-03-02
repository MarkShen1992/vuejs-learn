<template>
  <div class="hello">
    <h1>6. computed: {{ getLen }}</h1>
    <button @click="clickHandler">修改</button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"

const content = ref('这是一段测试内容')
// 创建一个计算属性
const getLen = computed(() => {
  console.log('计算属性执行了')
  return content.value.length
})
function clickHandler() {
  content.value += 's'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
