import Vue from 'vue'
import Router from 'vue-router'
import page2 from '../components/page2'
import page3 from '../components/page3'

import home from '../components/Home'
import about from '../components/About'

import todosNew from '../components/Todos/new'
import todosIndex from '../components/Todos/Index'

import tasksNew from '../components/Tasks/new'
import tasksIndex from '../components/Tasks/Index'
import tasksShow from '../components/Tasks/show'
import tasksEdit from '../components/Tasks/edit'

Vue.use(Router)
//
export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: home },
    { path: '/about', component: about },
    { path: '/page2', component: page2 },
    { path: '/page3', component: page3 },
    /* todos */
    { path: '/todos/new', component: todosNew },
    { path: '/todos', component: todosIndex },
    /* tasks */
    { path: '/tasks/new', component: tasksNew },
    { path: '/tasks', component: tasksIndex },
    { path: '/tasks/show/:id', component: tasksShow },
    { path: '/tasks/edit/:id', component: tasksEdit },
  ]
})
