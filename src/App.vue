<template>
  <Head/>
  <div class="app">
        <router-view></router-view>
    </div>
</template>
<script>

import Head from './components/Head.vue'

export default{
  components: { Head }
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
#app{
  background-color: #363232;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

</style>
