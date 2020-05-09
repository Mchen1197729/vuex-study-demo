<template>
  <div class="demo-vuex">
    <h1>update moduleUser</h1>
    <div>
      <h2>{{name}}--{{age}}--{{married}}</h2>
      <button @click="handleButton1">按钮1</button>
      <button>按钮2</button>
      <button>按钮3</button>
      <button>按钮4</button>
    </div>
    <hr>
    <h1>update moduleTodo</h1>
    <h2>{{todoUserName}}--{{todoUserAge}}</h2>
    <div>
      <button @click="handleButton11">按钮11</button>
      <button @click="handleButton12">按钮12</button>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    data() {
      return {};
    },
    methods: {
      handleButton1() {
        /*
        * 在store中使用了命名空间的模块后
        * 提交action需要在action名称前添加对应的模块名，以免多个模块中的同名action同时产生响应
        * */
        this.$store.dispatch('moduleUser/addUserAge');
      },
      handleButton11() {
        this.$store.dispatch('moduleTodo/someAsyncAction')
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.error(err);
          });
      },
      handleButton12() {
        this.$store.commit('moduleTodo/todo_user_age_add');
      }
    },
    computed: {
      ...mapState({
        name: state => state.moduleUser.user.name,
        age: state => state.moduleUser.user.age,
        married: state => state.moduleUser.user.married,
      }),
      ...mapState({
        todoUserName: state => state.moduleTodo.todoUser.name,
        todoUserAge: state => state.moduleTodo.todoUser.age || 30,
      })
    }
  };
</script>

<style lang="less" scoped>

</style>
