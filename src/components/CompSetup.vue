<template>
  <!-- 标题 -->
  <h1 :style="{ background: titleInfo.color }">{{titleInfo.value}}</h1>

  <div @click="$store.commit('add')">
    counter:{{counter}}
  </div>
  
  <div>
    doubleCounter:{{doubleCounter}}
  </div>

  <!-- 新增待办 -->
  <div>
    <input type="text" v-model="todoName" @keydown.enter="addTodo(createTodo(todoName))">
  </div>

  <!-- 待办事项列表 -->
  <div v-for="item in todos" :key="item.id">
    {{item.name}}
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import type { PropType } from 'vue'
import type { TitleInfo, Todo } from '../types'
import { useStore } from '../store'

defineProps({
  titleInfo: {
    type: Object as PropType<TitleInfo>,
    required: true
  }
})

const store = useStore()
const counter = computed(() => store.state.counter)
const doubleCounter = computed(() => counter.value * 2)

const todos = computed(() => store.state.todos?.todos)
const todoName = ref('')

store.dispatch('todos/initTodo')

// todos.value.push({
//   id: 1,
//   name: 'Learn Vue',
//   completed: false
// })
const createTodo = (todoName: string): Todo => {
  return {
    id: todos.value!.length + 1,
    name: todoName,
    completed: false
  }
}
const addTodo = (todo: Todo): void => {
  todos.value!.push(todo)
  todoName.value = ''
}

</script>

<style scoped>

</style>