<template>
  <div class="post">
    <div class="img">
              <img :src="film.poster" />
    </div>
            <div id="about">
                  <div @click="$router.push(`/film/${film.id}`)"> <p>{{ film.title }}</p>  </div>
                <div id="l2">{{ film.year }}, {{ film.genres.toString() }}</div>
              <div id="l3"><strong>РЕЖИССЁР:  {{check(film.directors).toUpperCase() }}</strong></div>
                <div class="flex" style="display:inline-flex">
                  <div id="l4">АКТЁРЫ: </div> 
                  <div id="acter">{{ check(film.actors) }}</div>
                </div>
                <br><br>
                <div id="l5">{{ check(film.description) }}</div> 
            </div> 
  </div>
</template>

<script>

export default {
    name: 'Filmcard',
    methods:{
        check(arr) {
            if (arr == null) {
                return "-";
            }
            else {
                return arr.toString();
            }
        }
    },
    props: {
        film: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>
.post{
  width: 80%;
  height: auto;
  background-color: #4D4747;
  margin-top: 15px;
  margin-left: 10%;
  display: inline-flex;
  
  transition: all 0.3s;
}
.post:hover{
  box-shadow: 2px 3px 10px black;
  margin-top: 7px;
}
.post p{
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
</style>