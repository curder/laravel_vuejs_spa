// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App'

import Todos from './components/Todos'
import Todo from './components/Todo'

Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  { path: '/', component: Todos },
  { path: '/todo/:id', component: Todo, name: 'todo' }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})


const store = new Vuex.Store({
  state: {
    todos: [],
    newTodo:{id: null, title: '', computed: false},
  },
  mutations: {
    get_todo_list (state, todos) {
        state.todos = todos
    },
    computed_todo(state, todo) {
        todo.computed = ! todo.computed
    },
    delete_todo(state, index) {
        state.todos.splice(index, 1)
    },
    add_todo(state, todo) {
        state.todos.push(todo)
    }
  },
  actions: {
      getTodos(store) {
          Vue.axios.get('http://laravel-package.dev/api/todos').then(response => {
              store.commit('get_todo_list', response.data)
          })
      },
      computedTodo (store, todo){
          Vue.axios.patch('http://laravel-package.dev/api/todos/' + todo.id + '/computed').then(response => {
              store.commit('computed_todo', todo)
          })
      },
      deleteTodo(store, payload) {
          Vue.axios.delete('http://laravel-package.dev/api/todos/' + payload.todo.id + '/delete').then(response => {
             store.commit('delete_todo', payload.index)
          })
      },
      addTodo(state, todo) {
          Vue.axios.post('http://laravel-package.dev/api/todos/create', {title: todo.title}).then(response => {
              store.commit('add_todo', todo)
          })
          store.state.newTodo = {id: null, title: '', computed: false}
      }
  }
})


Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App },
  router
})
