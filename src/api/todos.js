import axios from 'axios'

export default {
  get: endPoint => {
    return new Promise((resolve, reject) => {
      axios
        .get(endPoint)
        .then(r => r.data)
        .then(todos => resolve(todos))
        .catch(e => reject(e))
    })
  },
  delete: (endPoint, todo) => {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${endPoint}/${todo.id}`)
        .then(() => resolve())
        .catch(e => reject(e))
    })
  },
  post: (endPoint, todo) => {
    return new Promise((resolve, reject) => {
      axios
        .post(endPoint, todo)
        .then(r => r.data)
        .then(newTodo => resolve(newTodo))
        .catch(e => reject(e))
    })
  },
  patch: (endPoint, todo, data) => {
    return new Promise((resolve, reject) => {
      axios
        .patch(`${endPoint}/${todo.id}`, data)
        .then(() => resolve())
        .catch(e => reject(e))
    })
  }
}
