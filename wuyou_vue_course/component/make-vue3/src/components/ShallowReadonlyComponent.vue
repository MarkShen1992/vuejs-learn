<template>
  <div class="hello">
    <h1>5. shallowReadonly</h1>
    <p>{{ myData }}</p>
    <button @click="clickHandler">修改</button>
  </div>
</template>

<script setup>
import { shallowReadonly } from 'vue';

// 非响应式
const myData = shallowReadonly({
  name: 'make',
  age:20,
  friends: ['zhangsan', 'lisi']
})
function clickHandler() {
  myData.age++
  myData.friends.push('wangwu')
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
