import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 存储数据的地方
  state () {
    return {
      loginStatus: '用户已经登录',
      count: 0
    }
  },
  // 相当于计算属性
  getters: {
    len (state) {
      console.log('getters执行了...')
      return state.loginStatus.length
    }
  },
  // 希望在全局中修改数据（同步）, 操作state
  mutations: {
    changeCount (state, num) {
      state.count += num
      console.log('mutation执行了，count的之是', state.count)
    }
  },
  // 用于做异步包装的
  actions: {
    delayChangeCount (store, num) {
      setTimeout(() => {
        store.commit('changeCount', num)
      })
    }
  },
  // 模块化（用户全局的值）, 包含 state, getters, mutations, actions
  modules: {

  }
})
