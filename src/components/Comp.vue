<template>
  <!-- 标题 -->
  <h1 :style="{ background: titleInfo.color }">{{titleInfo.value}}</h1>

  <div>
    {{counter}}
  </div>
  
  <!-- 待办事项列表 -->
  <div v-for="item in items" :key="item.id">
    {{item.name}}
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
      items: [] as Array<Todo>
    }
  },
  created() {
    this.items.push({
      id: 1,
      name: 'Learn Vue',
      completed: false
    }, {
      id: 2,
      name: 'Learn Vue22',
      completed: false
    })
  }
})
</script>

<style scoped>

</style>