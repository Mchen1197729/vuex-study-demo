import Vue from 'vue';
import Vuex from 'vuex';
/* 客户端必须引入socket.io-client这个包 */
import io from 'socket.io-client';

import moduleTodo from './moduleTodo';
import moduleUser from './moduleUser';

Vue.use(Vuex);

//连接服务器 得到socket对象
// const socket = io('ws://localhost:3000');
//
// function createWebSocketPlugin(socket) {
//   return store => {
//     socket.on('connect', data => {
//       console.log('client socket connect', data);
//     });
//     socket.on('data', data => {
//       //store.commit('receiveData', data);
//       console.log(data);
//     });
//     store.subscribe(mutation => {
//       if (mutation.type === 'UPDATE_DATA') {
//         socket.emit('update', mutation.payload);
//       }
//     });
//   };
// }
//
// const plugin = createWebSocketPlugin(socket);

export default new Vuex.Store({
  // plugins: [plugin],
  modules: {
    moduleTodo,
    moduleUser
  },
});
