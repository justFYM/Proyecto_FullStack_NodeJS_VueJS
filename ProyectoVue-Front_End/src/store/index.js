import { createStore } from 'vuex'
// para decodificar el jwt
import decode from 'jwt-decode'
import router from '@/router';
export default new createStore({
  state: {
    token: '',
    usuarioDB: '',
  },
  mutations: {
    obtenerUsuario(state, payload){
      state.token = payload;
      if(payload === ''){
        state.usuarioDB = ''
      }else{
        state.usuarioDB = decode(payload);
        router.push({name: 'about'})
      }
    }
  },
  actions: {
    guardarUsuario({commit},payload){
      localStorage.setItem('token', payload);
      commit('obtenerUsuario', payload)
    },
    cerrarSesion({commit}){
      commit('obtenerUsuario', '');
      localStorage.removeItem('token');
      router.push({name: '/'});
    },
    leerToken({commit}){

      const token = localStorage.getItem('token');
      if(token){
        commit('obtenerUsuario', token);
      }else{
        commit('obtenerUsuario', '');
      }

    }
  },
  getters: {
    estaActivo: state => !!state.token
  },
  modules: {
  }

  
})
