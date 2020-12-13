<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <todo-form />
    <todo-stats />
    <todo-list class="todo-list" />
  </div>
</template>

<script>
import TodoForm from '@/components/TodoForm.vue'
import TodoList from '@/components/TodoList.vue'
import TodoStats from '@/components/TodoStats.vue'

export default {
  name: 'Todos',
  components: {
    TodoForm,
    TodoList,
    TodoStats
  },
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
h1 {
  margin: 20px 0;
}
.todo-list {
  width: 25%;
  margin: 0 auto 0;
}
</style>
