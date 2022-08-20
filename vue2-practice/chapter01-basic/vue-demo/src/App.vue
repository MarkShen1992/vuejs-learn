<template>
  <div id="app">
    {{ message }} {{ message + message }}
    <div :id="message"></div>
    <!-- 插槽分类：默认插槽，具名插槽和作用域插槽。作用域插槽：返回组件的函数。根据子组件传递不同的值，返回不同的内容 -->
    <todo-list>
      <todo-item
        @delete="handleDelete"
        v-for="item in list"
        :title="item.title"
        :del="item.del"
        :key="item.title"
      >
        <!-- 2.5的语法 -->
        <!-- <span slot="pre-icon">前置图标</span>
          <span slot="suf-icon">后置图标</span> -->
        <!-- 2.6之后的语法 -->
        <template v-slot:pre-icon="{ value }">
          <span>前置图标{{ value }}</span>
        </template>
        <!-- <template v-slot:suf-icon>
            <span>后置图标</span>
          </template> -->
      </todo-item>
    </todo-list>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue'
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoItem,
    TodoList,
  },
  data: function () {
    return {
      message: 'hello world',
      list: [
        {
          title: '课程1',
          del: false,
        },
        {
          title: '课程2',
          del: true,
        },
      ],
    }
  },
  methods: {
    handleDelete(val) {
      console.log('handleDelete', val)
    },
  },
}
</script>

<style></style>
