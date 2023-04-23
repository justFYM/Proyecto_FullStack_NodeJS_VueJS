<template>
<nav class="bg-light md-center">
   <router-link to="/datos" v-if="estaActivo">|Datos|</router-link>
    <router-link to="/about" v-if="estaActivo">Sesiones|</router-link>
    <!--<router-link to="/notas" v-if="estaActivo">Notas</router-link>|-->
    <router-link to="/" v-if="!estaActivo">Login|</router-link>
    <router-link to="/chart" v-if="estaActivo">Gráficas|</router-link>
    <router-link to="/registro" v-if="!estaActivo">Registro|</router-link>
       <router-link to="/notas" v-if="estaActivo">Notas|</router-link>
    <a @click="cerrarSesion" class="button" v-if="estaActivo">Cerrar Sesion|</a>
  </nav>
  <router-view/>

        

</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed:{
    ...mapGetters(['estaActivo'])
  },
  methods: {
    ...mapActions(['cerrarSesion', 'leerToken']),
  },
  created(){
    this.leerToken();
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  column-gap: 20px;
  text-decoration: none;
}

nav a {
  font-size: large;
  font-weight: bold;
  color: #2c3e50;
   text-decoration: none;
}
.button{
  
   text-decoration: none;
   cursor: pointer;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
