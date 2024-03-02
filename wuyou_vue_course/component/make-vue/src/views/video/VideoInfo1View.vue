<template>
  <div class="video-info-1">
    点赞
  </div>
</template>

<script>
export default {
  name: 'VideoInfo1',
  created () {
    setTimeout(() => {
      // 跳转
      // this.$router.push({ name: 'home' })
      // 跳转并传参
      this.$router.push({ name: 'info2', query: { someData: 12 } })
    }, 3000)
    // 获取登录信息
    // console.log(this.$store.state.loginStatus)
    this.handler()
  },
  methods: {
    handler () {
      // mutations使用 commit 提交，且为同步方式
      this.$store.commit('changeCount', 1)
      this.$store.commit('changeCount', 1)
      // actions使用 dispatch，异步操作
      this.$store.dispatch('delayChangeCount', 10)
      this.$store.commit('changeCount', 1)

      // getters, 计算属性
      console.log('getters.len=', this.$store.getters.len)
    }
  }
}
</script>

<style scoped>

</style>
