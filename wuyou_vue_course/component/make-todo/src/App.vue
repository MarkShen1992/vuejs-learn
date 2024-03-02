<script>
export default {
  data () {
    return {
      todos: [
        {
          id: 1,
          title: '测试内容1',
          completed: false,
          editing: false
        },
        {
          id: 2,
          title: '测试内容2',
          completed: true,
          editing: false
        }
      ],
      visible: 'all',
      editedVal: ''
    }
  },
  methods: {
    toggleAll (e) {
      this.todos.forEach(todo => todo.completed = e.target.checked);
    },
    onHashChange () {
      const hash = window.location.hash.replace(/#\/?/, '')
      if (['all', 'active', 'completed'].includes(hash)) {
        this.visible = hash
      } else {
        window.location.hash = ''
        this.visible = 'all'
      }
    },
    addTodo (e) {
      const title = e.target.value.trim()
      if (!title) {
        return
      }
      this.todos.push({
        id: Date.now(),
        title,
        completed: false,
        editing: false
      })
      // 添加完后将输入框的值设置为空
      e.target.value = ''
    },
    startEdit (todo) {
      todo.editing = true
      // 回写值
      const editTodo = this.$refs['editInput' + todo.id][0]
      editTodo.value = todo.title
      // 设置focus状态
      editTodo.focus()
    },
    cancelEdit (todo) {
      todo.editing = false
    },
    editTodo (todo) {
      const editTodo = this.$refs['editInput' + todo.id][0]
      todo.title = editTodo?.title
      todo.editing = false
    },
    removeTodo (todo) {
      this.todos.splice(this.todos.indexOf(todo), 1)
    },
    clearCompleted () {
      this.todos = this.todos.filter(todo => !todo.completed)
    }
  },
  computed: {
    filteredTodos () {
      switch(this.visible) {
        case 'all':
          return this.todos
        case 'active':
          return this.todos.filter(todo => !todo.completed)
        case 'completed':
          return this.todos.filter(todo => todo.completed)
      }
    },
    remaining () {
      return this.filteredTodos.length
    },
    total () {
      return this.todos.length
    }
  },
  // 监控hash值变化，哈希值获取可以使用 window.location.hash
  mounted () {
    window.addEventListener('hashchange', this.onHashChange)
    this.onHashChange()
  }
}
</script>

<template>
  <section class="todoapp">
    <header class="header">
      <h1>代办事项</h1>
      <input @keyup.enter='addTodo' class="new-todo" placeholder="请输入你要做的事情" autofocus>
    </header>
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox" @click="toggleAll">
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <li 
          v-for="todo in filteredTodos"
          :key="todo.id"
          :class="{ completed: todo.completed, editing: todo.editing }"
          >
          <div class="view">
            <input class="toggle" type="checkbox" v-model="todo.completed">
            <label v-text="todo.title" @dblclick="startEdit(todo)"></label>
            <button @click.prevent="removeTodo(todo)" class="destroy"></button>
          </div>
          <input class="edit" :ref="'editInput' + todo.id" v-model="editedVal" type="text"
            @keyup.enter="editTodo" @blur="cancelEdit(todo)">
        </li>
      </ul>
    </section>
    <footer v-show="total > 0" class="footer">
      <span class="todo-count">剩余<strong>{{ remaining }}</strong>个任务</span>
      <ul class="filters">
        <li>
          <a :class="{ selected: visible === 'all' }" href="#/all">所有任务</a>
        </li>
        <li>
          <a :class="{ selected: visible === 'active' }" href="#/active">剩余任务</a>
        </li>
        <li>
          <a :class="{ selected: visible === 'completed' }" href="#/completed">已完成任务</a>
        </li>
      </ul>
      <button @click="clearCompleted" class="clear-completed">清除已完成任务</button>
    </footer>
  </section>
</template>

<style scoped>
@import url('https://unpkg.com/todomvc-app-css@2.4.3/index.css');
</style>
