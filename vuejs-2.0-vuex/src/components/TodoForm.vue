<template>
    <form v-on:submit.prevent="addTodo(newTodo)">
        <div class="form-group">
            <input v-model="newTodo.title" type="text" class="form-control" placeholder="Add a new Todo">
        </div>
        <div class="form-group">
            <button class="btn btn-success" type="submit">Add Todo</button>
        </div>
    </form>
</template>
<script>
    export default {
        computed: {
            newTodo(){
                return this.$store.state.newTodo
            }
        },
        methods: {
            addTodo(newTodo) {
                if(!this.newTodo.title) {
                    alert('Enter sth.');
                    return;
                }
                this.$store.dispatch('addTodo', newTodo)
            }
        }
    }
</script>
