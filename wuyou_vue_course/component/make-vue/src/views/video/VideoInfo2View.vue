<template>
  <div class="video-info-2">
    评论
    <p v-text="someData"></p>
  </div>
</template>

<script>
export default {
  name: 'VideoInfo2',
  data () {
    return {
      someData: 0
    }
  },
  created () {
    this.someData = this.$route.query.someData
  }
}
</script>

<style scoped>

</style>
