<template>
  <div>
    <h1>Todo Details</h1>
    <div v-if="todo">
      <p><strong>Task:</strong> {{ todo.text }}</p>
      <p><strong>Status:</strong> {{ todo.done ? 'Completed' : 'Not completed' }}</p>
    </div>
    <div v-else>
      <p>Todo not found.</p>
    </div>
    <router-link to="/">⬅ Back to Home</router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const todo = ref(null)

onMounted(() => {
  const saved = localStorage.getItem('todos')
  if (saved) {
    const todos = JSON.parse(saved)
    todo.value = todos.find(t => t.id === route.params.id) || null
  }
})
</script>
