//这是moduleUser的store对象

const ADD_USER_AGE = 'add_user_age';
export default {
  //使用命名空间来注册模块(可以避免多个模块能够对同一mutation或action作出响应)
  namespaced: true,
  state: {
    user: {
      name: '林志玲',
      age: 29,
      married: true
    }
  },
  mutations: {
    [ADD_USER_AGE](state) {
      state.user.age++;
    }
  },
  actions: {
    addUserAge({ commit }) {
      commit(ADD_USER_AGE);
    }
  },
  getters: {}
};
