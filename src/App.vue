<script setup lang="ts">
import { defineComponent } from 'vue'
import { store } from './store';
store.dispatch('todos/initTodo')
const ll = () => {
  console.log('llll')
}
</script>

<script lang="ts">
export default defineComponent({
  name: 'App'
})
</script>

<template>
  <el-button type="primary" @click="ll">点击</el-button>
  <router-link to="/home">首页</router-link>
  <router-link to="/addTodo">新增待办</router-link>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
