/*
* 1.Vuex的插件本质就是一个函数,该函数接收store对象作为唯一参数
*
* 2.次store对象就是new Vuex.Store()返回的唯一的store实例
*
* 3.可以在插件中通过提交mutation的形式来更新store中的状态
*
* 4.store还有一个subscribe钩子函数,接收一个回调函数作为参数,用来订阅mutation函数的执行
*   该回调函数会在每一个mutation函数执行后立即执行,如果想取消订阅,则调用subscribe()函数返回的函数即可
*
* 5.subscribeAction函数用来订阅action的执行,
*   在每个action分发的时候调用并接收action描述和当前的store的state这两个参数,
*   要停止订阅，调用此方法返回的函数即可停止订阅
*   vuex3.1以后新增:用来明确action前后的执行函数
*   store.subscribeAction({
        before: (action, state) => {
        console.log(`before action ${action.type}`)
      },
        after: (action, state) => {
        console.log(`after action ${action.type}`)
      }
    })
*
* 6.在使用时,需要声明为plugin:[plugin1,plugin2,...]
*
* */




