<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <ReactiveComponent />
  <ShallowReactiveComponent />
  <RefComponent />
  <ReadOnlyComponent />
  <ShallowReadOnlyComponent />
  <ComputedComponent />
  <!-- 侦听单一数据的变化使用watch -->
  <WatchComponent />
  <!-- 有一段逻辑，这段逻辑可能依赖多个相应式数据，使用watchEffect -->
  <WatchEffectComponent />
</template>

<script setup>
import ReactiveComponent from './components/ReactiveComponent.vue'
import ShallowReactiveComponent from './components/ShallowReactiveComponent.vue'
import RefComponent from './components/RefComponent.vue'
import ReadOnlyComponent from './components/ReadonlyComponent.vue'
import ShallowReadOnlyComponent from './components/ShallowReadonlyComponent.vue'
import ComputedComponent from './components/ComputedComponent.vue'
import WatchComponent from './components/WatchComponent.vue'
import WatchEffectComponent from './components/WatchEffectComponent.vue'

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
