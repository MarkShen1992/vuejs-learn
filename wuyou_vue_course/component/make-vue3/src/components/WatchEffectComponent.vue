<template>
  <div class="hello">
    <h1>8. watchEffect: {{ count }}</h1>
    <button @click="clickHandler">修改</button>
  </div>
</template>

<script setup>
import { reactive, ref, watchEffect } from "vue"

const count = ref(0)
const myData = reactive({
  name: 'make',
  age: 20,
  friends: ['zhangsan', 'lisi']
})
// 方法内涉及到的值发生变化都会自动触发执行
watchEffect(() => {
  console.log('count的值为：' + count.value + ', age=' + myData.age)
})
function clickHandler() {
  myData.age++
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
