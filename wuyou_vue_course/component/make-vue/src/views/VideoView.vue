<template>
  <div class="about">
    <h1>一级组件，视频信息</h1>
    <p>视频ID为{{ id }}</p>
    <router-link :to="{ name: 'info1' }">点赞</router-link> |
    <router-link :to="{ name: 'info2' }">评论</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'VideoView',
  props: ['id']
}
</script>

<style>

</style>
