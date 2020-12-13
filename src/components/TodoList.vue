<template>
  <span v-if="loading">Loading...</span>
  <ul class="todo-list" v-else>
    <span v-if="todos.length === 0">No items found</span>
    <li class="todo-item" v-for="todo in todos" :key="todo.id">
      <input class="todo-item-completed" type="checkbox" :checked="todo.completed" @change="changeTodoCompleted({ todo, checked: !todo.completed })">
      <span>{{ todo.title }}</span>
      <span class="todo-item-remove" @click="removeTodo(todo)">X</span>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TodoList',
  computed: {
    ...mapGetters([
      'loading',
      'todos'
    ])
  },
  methods: {
    ...mapActions([
      'changeTodoCompleted',
      'loadTodos',
      'removeTodo'
    ])
  },
  created () {
    this.loadTodos()
  }
}
</script>

<style scoped lang="scss">
.todo-list {
  list-style-type: none;
  padding: 0;
  border: 1px solid grey;

  & .todo-item {
    display: flex;
    justify-content: space-between;
    margin: 0 10px;

    &:not(:last-of-type) {
      border-bottom: 1px solid grey;
    }

    & span[class^="todo-item"] {
      width: 24px;
      cursor: pointer;
    }
  }
}
</style>
