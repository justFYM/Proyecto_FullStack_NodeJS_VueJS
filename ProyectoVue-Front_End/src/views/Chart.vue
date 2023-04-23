<template>
<div class="container">
{{sessions}}
  <Bar :chart-data="chartData" />
</div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import axios from 'axios';
import { mapState } from "vuex";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return { 
      usuarioAPI:[],
      sessions:[],
      chartData: {
        labels: [],
        datasets: [
          {
            label: 'Date/Score',
            backgroundColor: '#f87979',
            data:[]
          }
        ]
      },responsive:true, maintainAspectRatio:false,
    }
  },
  created(){
          axios.get('http://localhost:3000/api/a')
            .then(response => {
            var result = response.data.filter(response=>response.username == this.usuarioDB.data.nombre);
            this.usuarioAPI =result;
            result[0].sessions.forEach(element => {
              this.sessions.push(element.score)
            })
             }


    )
},
  computed:{
      ...mapState(['usuarioDB']),
      ...mapState(['valores'])
  },
  mounted(){
        //this.mostrar()
        console.log(this.sessions);
        this.chartData = {
        labels: this.sessions,
         bgColors: ['#ea80fc','#e040fb'],
        datasets: [
            {
                label: 'Data One',
                backgroundColor: this.bgColors,              
                data: [this.sessions],           
            }
        ]
        }
  },
  methods:{
        mostrar() {

},


},



}
</script>