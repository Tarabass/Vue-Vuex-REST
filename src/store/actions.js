import axios from 'axios'

function randomId () {
  return Math.random()
    .toString()
    .substr(2, 10)
}

const endPoint = 'http://localhost:3000'

export default {
  loadTodos ({ commit }) {
    commit('SET_LOADING', true)
    setTimeout(() => {
      axios
        .get(`${endPoint}/todos`)
        .then(r => r.data)
        .then(todos => {
          commit('SET_TODOS', todos)
          commit('SET_LOADING', false)
        })
    }, 250)
  },
  setNewTodo ({ commit }, todo) {
    commit('SET_NEW_TODO', todo)
  },
  addTodo ({ commit, state }) {
    if (!state.newTodo) {
      // do not add empty todos
      return
    }
    const todo = {
      title: state.newTodo,
      completed: false,
      id: randomId()
    }
    axios.post(`${endPoint}/todos`, todo).then(_ => {
      commit('ADD_TODO', todo)
      commit('CLEAR_NEW_TODO')
    })
  },
  removeTodo ({ commit }, todo) {
    axios.delete(`${endPoint}/todos/${todo.id}`).then(_ => {
      commit('REMOVE_TODO', todo)
    })
  },
  clearNewTodo ({ commit }) {
    commit('CLEAR_NEW_TODO')
  },
  changeTodoCompleted ({ commit }, { todo, checked }) {
    axios.patch(`${endPoint}/todos/${todo.id}`, { completed: checked }).then(_ => {
      commit('CHANGE_TODO_COMPLETED', { todo, checked })
    })
  }
}
