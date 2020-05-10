//这是moduleTodo的store对象
import Vue from 'vue';

const GET_RANDOM_NUMBER = 'get_random_number';
const TODO_USER_AGE_ADD = 'todo_user_age_add';
export default {
  //使用命名空间来注册模块(可以避免多个模块能够对同一mutation或action作出响应)
  namespaced: true,
  state: {
    todoUser: {
      name: '波多野结衣'
    },
    todoList: [
      {
        id: 1,
        title: '学习Vue',
        completed: true
      },
      {
        id: 2,
        title: '学习React',
        completed: false
      },
      {
        id: 3,
        title: '学习Angular',
        completed: false
      }
    ]
  },
  mutations: {
    [GET_RANDOM_NUMBER](state, {number}) {
      //在store创建一个新的响应式的属性
      Vue.set(state.todoUser, 'age', number);
    },
    [TODO_USER_AGE_ADD](state) {
      state.todoUser.age++;
    }
  },
  actions: {
    //异步action的写法
    someAsyncAction({commit}) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const number = Math.floor((Math.random() + 1) * 10);
          commit(GET_RANDOM_NUMBER, {number});
          if (number % 2 === 0) {
            resolve(number);
          } else {
            reject(number);
          }
        }, 2000);
      });
    }
  },
  getters: {}
};
