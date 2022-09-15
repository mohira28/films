<template>
  <div>
    <SortBar v-on:sortQuery="sortQuery($event)"/>
    <film-list :films="sortQuery()" v-model="sortQuery"/>

  </div>
</template>

<script>
import axios from 'axios'
import SortBar from '@/components/SortBar.vue'
import FilmList from '@/components/FilmList.vue'

export default {
    components: { FilmList, SortBar},
    name: 'MainPage',
    data() {
        return {
            posts: [],
            PostLoading: false
        };
    },
    mounted() {
      this.fetchfilms()
    },
    methods: {
      async fetchfilms(){
        try {
            this.PostLoading = true;
            const response = await axios.get("https://floating-sierra-20135.herokuapp.com/api/movies");
            this.posts = response.data.data;
        }
        catch (e) {
            console.log(e);
        }
        finally {
            this.PostLoading = false;
        }
      },
      sortQuery(x){
        if (x == undefined){
          
          return this.posts
        } else if(x.length > 1){
          console.log(x);
          let first = [...this.posts].sort((p1, p2) => p1['title']?.localeCompare(p2['title']))
          let second = [...first].sort((a, b) => a.year > b.year ? 1 : -1)
          return second

        } else if(x.length < 2 && x[0] == 'title'){

          return [...this.posts].sort((p1, p2) => p1['title']?.localeCompare(p2['title']))

        }else if(x.length < 2 && x[0] == 'year'){

          console.log(x);
          return [...this.posts].sort((a, b) => a.year > b.year ? 1 : -1)

        }
      },
        
    }
}
</script>

<style>

</style>