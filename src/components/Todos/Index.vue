<template lang="html">
    <div>
        <h1>Todos - index:</h1>
        <router-link  to="/todos/new" class="nav-link">[ new ]</router-link>
        <hr />
        <ul v-for="todo in todos" v-bind:key="todo.name">
            <li>{{ todo.name }}
            </li>
        </ul>        
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
  created: function() {
    var items = []
    this.database = firebase.firestore()
    var todoRef = this.database.collection("todos")
    todoRef = todoRef.orderBy("name", "desc")
    todoRef.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());
            var item = doc.data()
            /* console.log(doc) */
            items.push({
                name : item.name
            })            
        })
    })
    this.todos = items
  },
  methods: {
  },  
  data () {
    return {
      database: null,
      todosRef: null,
      newTodoName: '',
      showTodoType: 'all',
      todos: []
    }
  }
}

</script>
