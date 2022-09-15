<template>
  <div v-if="!PostLoading">
           <Filmcard 
            v-for="film in films" 
            :key="film.id" 
            :film="film"
            />
  </div>
  <div v-else>Loading</div>
</template>

<script>
import Filmcard from './Filmcard.vue';

export default {
    name: "Film-list",
    props: {
        films: {
            type: Array,
            required: true
        }
    },
    components: { Filmcard }
}
</script>

<style>

</style>