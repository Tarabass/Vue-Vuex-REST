import Vue from 'vue'
import Vuex from 'vuex'
import actions from '@/store/actions'
import getters from '@/store/getters'
import mutations from '@/store/mutations'
import state from '@/store/state'

Vue.use(Vuex)

// const socket = new WebSocket('wss://localhost:3000')

// socket.onopen = function (e) {
//   alert('[open] Connection established')
//   alert('Sending to server')
//   socket.send('My name is John')
// }

// socket.onmessage = function (event) {
//   alert(`[message] Data received from server: ${event.data}`)
// }

// socket.onclose = function (event) {
//   if (event.wasClean) {
//     alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`)
//   } else {
//     // e.g. server process killed or network down
//     // event.code is usually 1006 in this case
//     alert('[close] Connection died')
//   }
// }

// socket.onerror = function (error) {
//   alert(`[error] ${error.message}`)
// }

// function createWebSocketPlugin (socket) {
//   return store => {
//     socket.onmessage('data', data => {
//       store.commit('receiveData', data)
//     })
//     store.subscribe(mutation => {
//       if (mutation.type === 'UPDATE_DATA') {
//         socket.emit('update', mutation.payload)
//       }
//     })
//   }
// }

// const plugin = createWebSocketPlugin(socket)

export default new Vuex.Store({
  // plugins: [plugin],
  state,
  getters,
  mutations,
  actions,
  modules: {
  }
})
