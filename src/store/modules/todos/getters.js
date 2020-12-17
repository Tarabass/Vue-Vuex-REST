export default {
  newTodo: state => state.newTodo,
  todos: state => state.todos,
  loading: state => state.loading,
  todosTotal: state => {
    return state.todos.length
  },
  todosCompleted: state => {
    return state.todos.filter(todo => todo.completed).length
  },
  todosNotCompleted: state => {
    return state.todos.filter(todo => !todo.completed).length
  },
  endPoint (state, getters, rootState, rootGetters) {
    // Retrieve the endPoint from the root store
    return `${rootGetters.endPoint}/todos`
  }
}
