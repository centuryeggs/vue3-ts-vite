<template>
  <div class="add-todo">
    <!-- 新增待办 -->
    <div>
      <input type="text" v-model="todoName" @keydown.enter="addTodo">
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import router from '../router'
import { useStore } from '../store'

const todoName = ref('')
const store = useStore()
const addTodo = (): void => {
  store.dispatch('todos/addTodo', todoName.value)
  todoName.value = ''
  router.push('/')
}
</script>

<style scoped>
</style>