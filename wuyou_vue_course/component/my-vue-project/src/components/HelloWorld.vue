<template>
  <div class="hello">
    <slot>基础的默认内容</slot>
    <h1>{{ msg }}</h1>
    <button @click="handler">按钮</button>
    <slot name="footer" :childCount="childCount">footer的默认内容</slot>
    <slot name="footer1" :childCount="childCount">footer1的默认内容</slot>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  // 组件通信
  // 1. 父传子
  // 2. 子传父
  props: {
    msg: String,
    count: {
      type: [String, Number],
      default: 100,
      required: true,
    },
  },
  data() {
    return {
      childCount: 0,
    }
  },
  methods: {
    handler() {
      this.childCount++
      // 触发自定义事件
      this.$emit('child-count-change', this.childCount)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background-color: #ccc;
}
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
