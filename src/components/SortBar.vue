<template>
  <h1>Фильмы</h1>
  
    <input type="checkbox" id="name" @change="check" v-model="title"> 
    <label for="name">Отсортировать по названию</label>
  
    <input type="checkbox" id="year" @change="check" v-model="year">
    <label for="year">Отсортировать по году</label>
  <hr>
</template>

<script>
export default {
  data() {
    return {
      sort: ['default'],
      title: false,
      year: false
    }
  },
  computed:{
    check(){
      if(this.title && this.year){
        this.sort = ['title', 'year']
      }else if(!this.title && this.year){
        this.sort = ['year']
      }else if(this.title && !this.year){
        this.sort = ['title']
      }

      this.$emit('sortQuery', this.sort)
    }
  },
  methods: {
    
  },
}
</script>

<style>
hr{
  width: 80%;
  margin-left: 10%;
}
label{
  display: inline-flex;
  margin: 0 0 2% 10%;
  color: white;
}
h1{
  margin-left: 10%;
  color: white;
  margin: 0 10% 2% 10%;
}
input[type="checkbox"] {
  display: none;
}
input[type="checkbox"]:checked + label::before{
  background-color: #FA2828;
  content: '';
  border: none;
  background-size: 100%;
  vertical-align: middle;
  background-repeat: no-repeat;
  background-image: url('../assets/check.png');
}
label{
  padding-left: 20px;
 }
 label::before{
  content: '';
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: #363232;
  border: 1px solid white;
  margin-right: 10px;
  transition: 0.2s;
 }
 
</style>