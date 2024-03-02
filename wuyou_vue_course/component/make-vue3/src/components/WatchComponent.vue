<template>
  <div class="hello">
    <h1>7. watch: {{ count }}</h1>
    <button @click="clickHandler">修改</button>
  </div>
</template>

<script setup>
import { reactive, watch } from "vue"

// const count = ref(0)
// watch(count, (newValue, oldValue) => {
//   console.log(newValue, oldValue)
// })
// function clickHandler() {
//   count.value ++
// }

const myData = reactive({
  name: 'make',
  age: 20,
  friends: ['zhangsan', 'lisi']
})
// A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.
// 侦听器对象的某个属性
watch(() => myData.age, (newValue, oldValue) => {
  console.log(newValue, oldValue)
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
