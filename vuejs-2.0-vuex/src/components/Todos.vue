<template>
    <div class="todos">
        <ul class="list-group">
            <li class="list-group-item"
                v-bind:class="{ 'text-muted text-decoration' : todo.computed }"
                v-for="(todo, index) in todos">
                <router-link :to="{name: 'todo', params: {id: todo.id}}">{{ todo.title }}</router-link>
                <button class="btn btn-danger btn-xs pull-right"
                        v-on:click="deleteTodo(index, todo)">Delete</button>

                <button class="btn btn-xs pull-right"
                        v-bind:class="[ todo.computed ? 'btn-warning' : 'btn-success' ]"
                        v-on:click="toggleCompution(todo)">{{ todo.computed ? 'undo' : 'computed'}}</button>
            </li>
        </ul>
        <todo-form></todo-form>
    </div>
</template>
<script>
    import TodoForm from './TodoForm'
    export default {
        name: 'todos',
        computed: {
            todos() {
                return this.$store.state.todos
            }
        },
        methods: {
            deleteTodo(index, todo) {
                this.$store.dispatch('deleteTodo', {index, todo})
            },
            toggleCompution(todo) {
                this.$store.dispatch('computedTodo', todo)
            }
        },
        components: {
            TodoForm
        }
    }
</script>
<style media="screen">
.text-decoration {
    text-decoration: line-through;
}
</style>
