import { todosAPI } from '@/api'

function randomId () {
  return Math.random()
    .toString()
    .substr(2, 10)
}

export default {
  loadTodos ({ commit, getters }) {
    commit('SET_LOADING', true)

    todosAPI.get(getters.endPoint)
      .then(todos => {
        commit('SET_TODOS', todos)
        commit('SET_LOADING', false)
      })
  },
  setNewTodo ({ commit }, todo) {
    commit('SET_NEW_TODO', todo)
  },
  addTodo ({ commit, state, getters }) {
    if (!state.newTodo) {
      // do not add empty todos
      return
    }

    todosAPI
      .post(getters.endPoint, {
        title: state.newTodo,
        completed: false,
        id: randomId()
      })
      .then(todo => {
        commit('ADD_TODO', todo)
        commit('CLEAR_NEW_TODO')
      })
  },
  removeTodo ({ commit, getters }, todo) {
    todosAPI
      .delete(getters.endPoint, todo)
      .then(() => {
        commit('REMOVE_TODO', todo)
      })
  },
  clearNewTodo ({ commit }) {
    commit('CLEAR_NEW_TODO')
  },
  changeTodoCompleted ({ commit, getters }, { todo, checked }) {
    todosAPI
      .patch(getters.endPoint, todo, { completed: checked })
      .then(() => {
        commit('CHANGE_TODO_COMPLETED', { todo, checked })
      })
  }
}
