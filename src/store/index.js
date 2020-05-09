import Vue from 'vue';
import Vuex from 'vuex';
import moduleTodo from './moduleTodo';
import moduleUser from './moduleUser';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    moduleTodo,
    moduleUser
  },
});
