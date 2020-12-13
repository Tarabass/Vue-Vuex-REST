<template>
  <div class="home">
    <Todos msg="TODO Vuex REST"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Todos from '@/components/Todos.vue'

export default {
  name: 'Home',
  components: {
    Todos
  }
}
</script>
