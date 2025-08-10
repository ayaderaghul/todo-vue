<template>
  <div>
    <h1>Todo List</h1>
    <form @submit.prevent="addTodo">
      <input v-model="newTodo" type="text" placeholder="Enter a new task" />
      <button type="submit">Add</button>
    </form>

    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <router-link :to="`/todo/${todo.id}`">
          <span :class="{ done: todo.done }">{{ todo.text }}</span>
        </router-link>
        <button @click="removeTodo(todo.id)">❌</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const todos = ref([])
const newTodo = ref('')

onMounted(() => {
  const saved = localStorage.getItem('todos')
  if (saved) todos.value = JSON.parse(saved)
})

watch(todos, (val) => {
  localStorage.setItem('todos', JSON.stringify(val))
}, { deep: true })

function addTodo() {
  if (!newTodo.value.trim()) return
  todos.value.push({
    id: crypto.randomUUID(),
    text: newTodo.value,
    done: false
  })
  newTodo.value = ''
}

function removeTodo(id) {
  todos.value = todos.value.filter(t => t.id !== id)
}
</script>

<style scoped>
.done {
  text-decoration: line-through;
  color: gray;
}
</style>
