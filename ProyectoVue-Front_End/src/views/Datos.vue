<template>
<div class="container">
    <p class="center">El token se puede verificar ingresando a Inspeccionar->Aplicación->Almacenamiento local-> http://localhost:8080 </p>
    <p class="center">Ocupé axios para las 2 peticiones que hice en el Front-End (En Chart.vue y AboutView.vue).</p>
    <p class="center">En la base de datos las contraseñas están encriptadas.</p>
    <p class="center">Intenté colocar un nav-bar con bootstrapvue pero algo pasó, parece que no está disponible ese componente o algo pasa.</p>
    <p class="center">Para visualizar los datos de cada usuario de la API, se requiere que el nombre de cuenta en ésta aplicación sea el mismo que en el de la API.</p>
    <p class="center">Puse verificaciones al momento de crear la cuenta, como por ejemplo que el nombre de la cuenta tiene que se único, además si el usuario cuando intenta ingresar
        a su cuenta e introduce una contraseña o usuario que no corresponde, se le avisa.</p>
            <p class="center">Hice un CRUD de unas notas según el token de usuario, en el Back-End cree el modelo notas con un atributo que asocia el usuario con la nota: usuarioID (en el Back-End tomé algunos apuntes en algunas líneas de código para entender la asociación). Lo de las notas es para que cada usuario tenga las que requiera.</p>
            <p class="center">Las vistas Datos, Sesiones, Notas y Gráficas están protegidas, solo se puede acceder a ella cuando el usuario está autentificado, osea que su token corresponde
                con el del Back-End
            </p>
            
   
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
    ...mapState(['usuarioDB']),
    ...mapState(['token'])
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

<style scoped>
.center{
    text-align: center;
}
</style>
