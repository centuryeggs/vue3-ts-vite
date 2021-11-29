<template>
  <div class="home">
    <!-- 待办事项列表 -->
    <div v-for="item in $store.state.todos?.todos" :key="item.id">
      {{item.title}}
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
</style>