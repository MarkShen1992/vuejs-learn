<template>
  <div class="hello">
    <h1>2. shallowReactive</h1>
    <p>{{ myData }}</p>
    <button @click="clickHandler">修改</button>
  </div>
</template>

<script setup>
import { shallowReactive } from 'vue';

const myData = shallowReactive({
  name: 'make',
  age: 20,
  friends: ['zhangsan', 'lisi']
})
function clickHandler() {
  // 单独只有这个，点击按钮是没有变化的，当两个都放开的话是有变化的
  // myData.friends.push('小红帽')
  // myData.age++

  // 无变化
  myData.friends.push('小红帽')

  // 有变化
  // myData.age++
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
