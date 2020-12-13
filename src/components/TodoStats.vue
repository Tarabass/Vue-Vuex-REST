<template>
  <div class="todo-stats">
    {{ `Total: ${todosTotal} | Completed: ${todosCompleted} | Todo: ${todosNotCompleted}` }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TodoStats',
  computed: {
    ...mapGetters([
      'todosCompleted',
      'todosNotCompleted',
      'todosTotal'
    ])
  }
}
</script>

<style scoped lang="scss">
.todo-stats {
  margin: 24px auto;
}
</style>
