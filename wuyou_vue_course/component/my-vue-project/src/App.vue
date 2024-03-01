<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>父组件接收子组件的数据 {{ childData }}</h1>
    <HelloWorld
      msg="Welcome to Your Vue.js App"
      :count="parentCount"
      @child-count-change="handler"
      >这是【插槽的位置】默认内容1
      <!-- <template v-slot:footer>第一个footer</template> -->
      <!-- <template #footer="childObj">第一个footer{{ childObj.childCount }}</template -->
      <template #footer1="{ childCount }"
        >第一个footer1{{ childCount }}
      </template>
    </HelloWorld>
    <!-- 插槽 -->
    <HelloWorld>这是【插槽的位置】默认内容2</HelloWorld>
    <HelloWorld>这是【插槽的位置】默认内容3</HelloWorld>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
    return {
      parentCount: 12,
      childData: 0,
    }
  },
  components: {
    HelloWorld,
  },
  methods: {
    handler(childCount) {
      this.childData = childCount
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
