<template>
  <!-- 标题 -->
  <h1 :style="{ background: titleInfo.color }">{{titleInfo.value}}</h1>

  <div>
    counter:{{ $store.state.counter }}
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
    {{item.title}}
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { TitleInfo, Todo } from '../types'

export default defineComponent({
  props: {
    titleInfo: {
      type: Object as PropType<TitleInfo>,
      required: true
    }
  },
  data() {
    return {
      counter: 1,
      items: [] as Array<Todo>,
      todoName: ''
    }
  },
  computed: {
    doubleCounter(): number {
      return this.$store.state.counter * 2
    }
  },
  created() {
    this.items.push({
      id: 1,
      title: 'Learn Vue',
      completed: false
    })
  },
  methods: {
    createTodo(todoName: string): Todo {
      return {
        id: this.items.length + 1,
        title: todoName,
        completed: false
      }
    },
    addTodo(todo: Todo): void {
      this.items.push(todo)
      this.todoName = ''
    }
  }
})
</script>

<style scoped>

</style>