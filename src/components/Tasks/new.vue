<template lang="html">
    <div class="container">
            <div class="form-group">
                <label for="TopicTitle">タイトル</label>
                <input type="text" class="form-control" id="title" v-model="title">
            </div>
            <div class="form-group">
                <label for="TopicContent">content</label>
                <textarea class="form-control" id="content" rows="3" v-model="content"></textarea>
            </div>
            <button v-on:click="createTask">投稿</button>
    </div>
</template>

<script>
import firebase from 'firebase'
// import LibAuth from '../../libs/LibAuth'

export default {
    async created() {
        this.database = firebase.firestore()
        var self = this
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log("#Auth-OK");
//                console.log(user.email);
            } else {
                alert("Error, auth error, please Google Login")
                self.$router.push('/')
                console.log('#no-User');
            }
        })        
    },
    data() {
        return {
            title:'',
            content:''
        }
    },
    methods: {
        createTask: function() {
console.log('#create')
            var self = this
            if (this.newTodoName == "") { return; }        
            this.database.collection('tasks').add({
                title: this.title,
                content: this.content
            }).then(function(docRef) {
                console.log("Document written with ID: ", docRef.id)
                self.$router.push('/tasks')
            }).catch(function(error) {
                alert("Error save: "+ error)
                console.error("Error adding document: ", error)
            })
            this.newTodoName = ""
        },
    }
}
</script>
