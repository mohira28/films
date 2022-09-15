<template>
  <div class="page">
    <a onclick="javascript:history.back(); return false;"> <b> &#60; </b> <u>Назад к списку</u></a>
    <div class="card">
      
    <div class="img">
              <img :src="film.poster" />
    </div>
            <div id="about">
                  <div> <p>{{ film.title }}</p>  </div>
                <div id="l2">{{ film.year }}, {{ String(film.genres) }}</div>
              <div id="l3"><strong>РЕЖИССЁР:  {{check(film.directors).toUpperCase() }}</strong></div>
                <div class="flex" style="display:inline-flex">
                  <div id="l4">АКТЁРЫ: </div> 
                  <div id="acter">{{ check(film.actors) }}</div>
                </div>
                <br><br>
                <div id="l5">{{ check(film.description) }}</div> 
            </div> 
  </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'FilmPage',
    data(){
        return {
            film: []
        }
    },
    mounted() {
      this.fetchfilm()
    },
    methods:{
      check(arr) {
            if (arr == null) {
                return "-";
            }
            else {
                return arr.toString();
            }
        },
        async fetchfilm(){
        try {
            this.PostLoading = true;
            const response = await axios.get(`https://floating-sierra-20135.herokuapp.com/api/movie/${this.$route.params.id}`);
            this.film = response.data.data
            console.log(this.film);
        }
        catch (e) {
            console.log(e);
        }
        finally {
            this.PostLoading = false;
        }
      },
    }
}
</script>

<style>

.page{
    height: 81vh;
    padding-top: 20px;
}
.card{
  width: 80%;
  height: auto;
  background-color: #4D4747;
  margin-top: 15px;
  margin-left: 10%;
  display: inline-flex;
  transition: all 0.3s;
}
.card:hover{
  box-shadow: 2px 3px 10px black;
  margin-top: 7px;
}
.card p{
  font-weight: bold;
  font-size: 36px;
  color: white;
}
#l2, #l3, #l4{
  font-size: 12px;
  color: #988F8F;
}
#about{
  margin: 15px;
  width: 85%;
}
#l4{
  font-weight: bold;
}
#acter{
  color: #E5E5E5;
  font-size: 12px;
  margin-left: 1%;
}
#l5{
  color: white;
  font-size: 16px;
}
a{
  margin-left: 10%;
  color: #FA2828FA ;
}
.img img{
  width: 85%;
  height: 85%;
  margin: 15%;
}
div.img{
  width: 15%;
  height: auto;
  background-color: #fff;
}
b{
  font-size: 150%;
  margin: 10px;
}
</style>