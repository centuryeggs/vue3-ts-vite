<template>
  <div>
    Comp.vue counter {{counter}}
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      counter: 1
    }
  }
})
</script>

<style scoped>

</style>