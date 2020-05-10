import Vue from 'vue';
import Vuex from 'vuex';
/* 客户端必须引入socket.io-client这个包 */
import io from 'socket.io-client';

import moduleTodo from './moduleTodo';
import moduleUser from './moduleUser';

Vue.use(Vuex);

//连接服务器 得到socket对象
const socket = io('ws://localhost:3000');

function createWebSocketPlugin(socket) {
  return store => {
    socket.on('connect', data => {
      console.log('client socket connect', data);
    });
    socket.on('data', user => {
      store.commit('moduleUser/receive_data', user);
    });
    /*
    * 1.store.subscribe(callback)中callback在每次mutation函数被执行之后被调用
    *
    * 2.形参mutation是一个对象:{type:mutation的名称,payload:{key1:value1,...}}
    *
    * */
    store.subscribe(mutation => {
      console.log(mutation)
      if (mutation.type === 'UPDATE_DATA') {
        socket.emit('update', mutation.payload);
      }
    });
  };
}

const plugin = createWebSocketPlugin(socket);

export default new Vuex.Store({
  plugins: [plugin],
  modules: {
    moduleTodo,
    moduleUser
  },
});
