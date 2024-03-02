<template>
  <div class="hello">
    <h1>3. ref</h1>
    <p>{{ count }}</p>
    <button @click="clickHandler">修改</button>
  </div>
</template>

<script setup>
import { ref } from "vue"

// 2. ref 对基本类型值, reactive 对对象
const count = ref(0)
function clickHandler() {
  count.value++
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
