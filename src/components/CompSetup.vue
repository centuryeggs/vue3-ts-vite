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
  <div v-for="item in items" :key="item.id">
    {{item.name}}
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import type { PropType } from 'vue'
import type { TitleInfo, Todo } from '../types'
import { useStore } from 'vuex'
import { key } from '../store'

defineProps({
  titleInfo: {
    type: Object as PropType<TitleInfo>,
    required: true
  }
})

const store = useStore(key)
const counter = computed(() => store.state.counter)
const doubleCounter = computed(() => counter.value * 2)

const items = ref([] as Todo[])
const todoName = ref('')

items.value.push({
  id: 1,
  name: 'Learn Vue',
  completed: false
})
const createTodo = (todoName: string): Todo => {
  return {
    id: items.value.length + 1,
    name: todoName,
    completed: false
  }
}
const addTodo = (todo: Todo): void => {
  items.value.push(todo)
  todoName.value = ''
}

</script>

<style scoped>

</style>