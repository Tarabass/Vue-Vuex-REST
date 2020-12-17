import Vue from 'vue'
import Vuex, { createLogger } from 'vuex'
import actions from '@/store/actions'
import getters from '@/store/getters'
import mutations from '@/store/mutations'
import state from '@/store/state'
import todos from './modules/todos'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

// const socket = new WebSocket('ws://localhost:9000')

// socket.onopen = function (e) {
//   console.log('[open] Connection established')
//   console.log('Sending to server')
// }

// socket.onmessage = function (event) {
//   console.log(event)
//   console.log(`[message] Data received from server: ${event.data}`)
// }

// socket.onclose = function (event) {
//   if (event.wasClean) {
//     console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`)
//   } else {
//     // e.g. server process killed or network down
//     // event.code is usually 1006 in this case
//     console.error('[close] Connection died')
//   }
// }

// socket.onerror = function (error) {
//   console.error(`[error] ${error.message}`)
// }

// function createWebSocketPlugin (socket) {
//   return store => {
//     socket.onmessage = event => {
//       // debugger
//       console.log(event)
//       console.table(JSON.parse(event.data))
//       // store.commit('ADD_TODO', event.data)
//     }
//     store.subscribe(mutation => {
//       if (mutation.type === 'ADD_TODO') {
//         socket.send(JSON.stringify({ payload: mutation.payload, type: mutation.type }))
//       }
//     })
//   }
// }

// const plugin = createWebSocketPlugin(socket)

export default new Vuex.Store({
  // plugins: [plugin],
  // plugins: debug ? [createLogger(), plugin] : [],
  plugins: debug ? [createLogger()] : [],
  state,
  getters,
  mutations,
  actions,
  modules: {
    todos
  }
})
