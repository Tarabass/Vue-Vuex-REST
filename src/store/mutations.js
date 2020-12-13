export default {
  SET_LOADING (state, flag) {
    state.loading = flag
  },
  SET_TODOS (state, todos) {
    state.todos = todos
  },
  SET_NEW_TODO (state, todo) {
    state.newTodo = todo
  },
  ADD_TODO (state, todoObject) {
    state.todos.push(todoObject)
  },
  REMOVE_TODO (state, todo) {
    const todos = state.todos

    todos.splice(todos.indexOf(todo), 1)
  },
  CLEAR_NEW_TODO (state) {
    state.newTodo = ''
  },
  CHANGE_TODO_COMPLETED (state, { todo, checked }) {
    const todos = state.todos

    todos.splice(
      todos.indexOf(todo),
      1,
      Object.assign({}, todo, { completed: checked })
    )
  }
}
