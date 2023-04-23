<template> <!--En éste template solo va lo que está en la ruta login en node.js, para el caso: Email y Password-->
<div class="container">
    <h1>Inicio de sesión</h1>

        <b-alert
      v-model="dismissCountDown"
      dismissible
      :variant="mensaje.color"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      {{mensaje.texto}}
    </b-alert>
    <form @submit.prevent="login">
        <input type="text" placeholder="Nombre" class="form-control my-2" v-model="usuario.nombre">
        <input type="password" placeholder="Contraseña" class="form-control my-2" v-model="usuario.pass">
        <b-button class="w-100" type="submit">Acceder</b-button>
        </form>
        <div v-if="mensaje != ''">
            <p>{{mensaje.texto}}</p>
        </div>

</div>
</template>

<script>
import { mapActions } from 'vuex';
import store from '../store';
import router from '../router';


export default {
    data(){
        return{
            usuario: {nombre:'', pass:''},
            dismissSecs: 4,
            dismissCountDown: 0,
            mensaje: {color: '', texto: ''}
        }



    },
    methods:{
  
        ...mapActions(['guardarUsuario']),
        login(){
           // console.log(this.usuario);
           this.axios.post('/login',this.usuario) //El segundo parámetro es el body que se envía desde el Front-End.
            .then(res=>{
                console.log(res.data);
                const token = res.data.token; //res.data es la respuesta a la peticion en la base de datos. Con res.data.token se accede al token que tiene el usuario en la base de datos.
                //router.push('notas')
                console.log('hola')

               this.guardarUsuario(token);
               
            })
            .catch(e=>{
                console.log(e.response);
                this.mensaje.color = 'danger';
                 this.mensaje.texto = e.response.data.mensaje;
                 this.showAlert()
                 this.usuario.nombre='';
                 this.usuario.pass='';
            })
        },
         countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
        },
        showAlert() {
        this.dismissCountDown = this.dismissSecs
        }
    }
}

</script>