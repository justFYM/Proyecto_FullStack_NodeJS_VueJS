<template>
  <div class="container">
    <h1>Vista protegida para {{usuarioDB.data.nombre}}</h1>


        <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Fecha</th>
          <th scope="col">Puntuación</th>
          <th scope="col">Duración</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in sessions" :key="index">
          <th scope="row">{{item.id}}</th>
          <td>{{item.date}}</td>
          <td>{{item.score}}</td>
          <td>{{item.duration}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  

</template>

<script>
import { mapState } from "vuex";
import axios from 'axios';
export default {
  data() {
    return {
      usuarioAPI: [],
      sessions:[],

    }

  },
  computed:{
    ...mapState(['usuarioDB'])
  },
  created(){
            axios.get('http://localhost:3000/api/a')
            .then(response => {
               var result = response.data.filter(response=>response.username == this.usuarioDB.data.nombre);
              //console.log(result);
              this.usuarioAPI =result;
              this.sessions = result[0].sessions;
              console.log(this.sessions)
             }).catch(error => console.log('error:', error));





    },
}


</script>
