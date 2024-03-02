<template>
  <div class="hello">
    <h1>1. reactive</h1>
    <p>{{ myData }}</p>
    <button @click="clickHandler">修改</button>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
// 对象：{}，set, map等
// const myData = reactive([1, 2, 3])
// function clickHandler() {
//   myData.push(10)
// }

const myData = reactive({
  name: 'make',
  age: 20,
  friends: ['zhangsan', 'lisi']
})
function clickHandler() {
  myData.age += 10
  myData.friends.push('libai')
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
