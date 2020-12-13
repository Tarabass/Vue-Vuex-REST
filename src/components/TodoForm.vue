<template>
  <form @submit="addTodo" @reset="clearNewTodo">
    <input type="text" v-model.lazy="newTodoItem">
    <button type="submit">Toevoegen</button>
    <button type="reset">Cancel</button>
  </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TodoForm',
  computed: {
    ...mapGetters([
      'newTodo'
    ]),
    newTodoItem: {
      get () {
        return this.newTodo
      },
      set (value) {
        this.setNewTodo(value)
      }
    }
  },
  methods: {
    ...mapActions([
      'addTodo',
      'clearNewTodo',
      'setNewTodo'
    ])
  }
}
</script>

<style scoped lang="scss">
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
</style>
