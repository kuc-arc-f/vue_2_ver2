<template lang="html">
    <div>
        <h1>Todos - new:</h1>
        <div>
            <input type="text" v-model="newTodoName">
            <button type="submit" v-on:click="createTodo()">タスク作成</button>
        </div>
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
    createTodo: function() {
        console.log('#create')
        if (this.newTodoName == "") { return; }        
        this.database.collection("todos").add({
            name: this.newTodoName
        }).then(function(docRef) {
            console.log("Document written with ID: ", docRef.id)
        }).catch(function(error) {
            console.log("Error adding document: ", error)
        })
        this.newTodoName = ""
    },
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
