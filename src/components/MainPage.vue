<template>
  <div>

    <NavBar></NavBar>

    <h2 class="mt-4">Insira todos os dados para predizer se abrirá ou não uma ordem de serviço para os próximos 15 dias</h2>

    <!-- QTD OSs -->

    <div class="container mt-6">
      <div class="card">
        <div class="card-content">
      <div class="columns">
        <div class="column">
          <b-field label="Quantidade de OS há 3 meses">
            <b-input placeholder="Número" type="number" min="0" v-model="data.SR_month_3"></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-field label="Quantidade de OS há 2 meses">
            <b-input placeholder="Número" type="number" min="0" v-model="data.SR_month_2"></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-field label="Quantidade de OS no último mês">
            <b-input placeholder="Número" type="number" min="0" v-model="data.SR_month_1"></b-input>
          </b-field>
        </div>
      </div>
        </div>
      </div>
    </div>

    <!-- AVGs -->

    <div class="columns mt-6">
      <div class="column">
        <div class="card">
          <div class="card-content">
            <div class="content">
              <b-field label="Avg Signal Up Week 4">
                <b-input placeholder="Número" type="number" min="0" v-model="data.avg_signal_up_week_4"></b-input>
              </b-field>
              <b-field label="Avg Signal Up Week 3">
                <b-input placeholder="Número" type="number" min="0" v-model="data.avg_signal_up_week_3"></b-input>
              </b-field>
              <b-field label="Avg Signal Up Week 2">
                <b-input placeholder="Número" type="number" min="0" v-model="data.avg_signal_up_week_2"></b-input>
              </b-field>
              <b-field label="Avg Signal Up Week 1">
                <b-input placeholder="Número" type="number" min="0" v-model="data.avg_signal_up_week_1"></b-input>
              </b-field>
            </div>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <div class="card-content">
            <div class="content">
              <b-field label="Avg Signal Down Week 4">
                <b-input placeholder="Número" type="number" min="0" v-model="data.avg_signal_down_week_4"></b-input>
              </b-field>
              <b-field label="Avg Signal Down Week 3">
                <b-input placeholder="Número" type="number" min="0" v-model="data.avg_signal_down_week_3"></b-input>
              </b-field>
              <b-field label="Avg Signal Down Week 2">
                <b-input placeholder="Número" type="number" min="0" v-model="data.avg_signal_down_week_2"></b-input>
              </b-field>
              <b-field label="Avg Signal Down Week 1">
                <b-input placeholder="Número" type="number" min="0" v-model="data.avg_signal_down_week_1"></b-input>
              </b-field>
            </div>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <div class="card-content">
            <div class="content">
              <b-field label="Avg Attenuation Up Week 4">
                <b-input placeholder="Número" type="number" min="0" v-model="data.avg_attenuation_up_week_4"></b-input>
              </b-field>
              <b-field label="Avg Attenuation Up Week 3">
                <b-input placeholder="Número" type="number" min="0" v-model="data.avg_attenuation_up_week_3"></b-input>
              </b-field>
              <b-field label="Avg Attenuation Up Week 2">
                <b-input placeholder="Número" type="number" min="0" v-model="data.avg_attenuation_up_week_2"></b-input>
              </b-field>
              <b-field label="Avg Attenuation Up Week 1">
                <b-input placeholder="Número" type="number" min="0" v-model="data.avg_attenuation_up_week_1"></b-input>
              </b-field>
            </div>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <div class="card-content">
            <div class="content">
              <b-field label="Avg Attenuation Down Week 4">
                <b-input placeholder="Número" type="number" min="0" v-model="data.avg_attenuation_down_week_4"></b-input>
              </b-field>
              <b-field label="Avg Attenuation Down Week 3">
                <b-input placeholder="Número" type="number" min="0" v-model="data.avg_attenuation_down_week_3"></b-input>
              </b-field>
              <b-field label="Avg Attenuation Down Week 2">
                <b-input placeholder="Número" type="number" min="0" v-model="data.avg_attenuation_down_week_2"></b-input>
              </b-field>
              <b-field label="Avg Attenuation Down Week 1">
                <b-input placeholder="Número" type="number" min="0" v-model="data.avg_attenuation_down_week_1"></b-input>
              </b-field>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- STDs -->

    <div class="columns mt-6">
      
      <div class="column">
        <div class="card">
          <div class="card-content">
            <div class="content">
              <b-field label="Std Attainable Rate Up Month 3">
                <b-input placeholder="Número" type="number" min="0" v-model="data.std_attainable_rate_up_month_3"></b-input>
              </b-field>
              <b-field label="Std Attainable Rate Up Month 2">
                <b-input placeholder="Número" type="number" min="0" v-model="data.std_attainable_rate_up_month_2"></b-input>
              </b-field>
              <b-field label="Std Attainable Rate Up Month 1">
                <b-input placeholder="Número" type="number" min="0" v-model="data.std_attainable_rate_up_month_1"></b-input>
              </b-field>
            </div>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <div class="card-content">
            <div class="content">
              <b-field label="Std Attainable Rate Down Month 3">
                <b-input placeholder="Número" type="number" min="0" v-model="data.std_attainable_rate_down_month_3"></b-input>
              </b-field>
              <b-field label="Std Attainable Rate Down Month 2">
                <b-input placeholder="Número" type="number" min="0" v-model="data.std_attainable_rate_down_month_2"></b-input>
              </b-field>
              <b-field label="Std Attainable Rate Down Month 1">
                <b-input placeholder="Número" type="number" min="0" v-model="data.std_attainable_rate_down_month_1"></b-input>
              </b-field>
            </div>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <div class="card-content">
            <div class="content">
              <b-field label="Std Current Rate Up Month 3">
                <b-input placeholder="Número" type="number" min="0" v-model="data.std_current_rate_up_month_3"></b-input>
              </b-field>
              <b-field label="Std Current Rate Up Month 2">
                <b-input placeholder="Número" type="number" min="0" v-model="data.std_current_rate_up_month_2"></b-input>
              </b-field>
              <b-field label="Std Current Rate Up Month 1">
                <b-input placeholder="Número" type="number" min="0" v-model="data.std_current_rate_up_month_1"></b-input>
              </b-field>
            </div>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <div class="card-content">
            <div class="content">
              <b-field label="Std Current Rate Down Month 3">
                <b-input placeholder="Número" type="number" min="0" v-model="data.std_current_rate_down_month_3"></b-input>
              </b-field>
              <b-field label="Std Current Rate Down Month 2">
                <b-input placeholder="Número" type="number" min="0" v-model="data.std_current_rate_down_month_2"></b-input>
              </b-field>
              <b-field label="Std Current Rate Down Month 1">
                <b-input placeholder="Número" type="number" min="0" v-model="data.std_current_rate_down_month_1"></b-input>
              </b-field>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mb-6">
      <b-field>
        <p class="control">
          <b-button label="Enviar" type="is-primary" @click="submit" />
        </p>
      </b-field>
    </div>

    <div class="my-6" v-if="result_prediction">
      <div class="card">
        <div class="content">
          <b-message has-icon :type="result_prediction['prediction'] == 0 ? 'is-success' : 'is-danger'" >
            <span>Prediz que </span>
            <br>
            <span>{{ result_prediction['message'] }}</span>
            <br>
            <span>com {{ result_prediction['percent'] }}% de chance</span>
          </b-message>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// import { ValidationProvider } from 'vee-validate';
import NavBar from "./NavBar.vue";
import http from "./../api/http.js"

export default {

  name: "MainPage",

  components: {
    NavBar
  },

  data() {
    return {
      "data": {
        "SR_month_1": "",
        "SR_month_2": "",
        "SR_month_3": "",
        "avg_signal_up_week_4": "",
        "avg_signal_up_week_3": "",
        "avg_signal_up_week_2": "",
        "avg_signal_up_week_1": "",
        "avg_signal_down_week_4": "",
        "avg_signal_down_week_3": "",
        "avg_signal_down_week_2": "",
        "avg_signal_down_week_1": "",
        "avg_attenuation_up_week_4": "",
        "avg_attenuation_up_week_3": "",
        "avg_attenuation_up_week_2": "",
        "avg_attenuation_up_week_1": "",
        "avg_attenuation_down_week_4": "",
        "avg_attenuation_down_week_3": "",
        "avg_attenuation_down_week_2": "",
        "avg_attenuation_down_week_1": "",
        "std_attainable_rate_up_month_1": "",
        "std_attainable_rate_up_month_2": "",
        "std_attainable_rate_up_month_3": "",
        "std_attainable_rate_down_month_1": "",
        "std_attainable_rate_down_month_2": "",
        "std_attainable_rate_down_month_3": "",
        "std_current_rate_up_month_1": "",
        "std_current_rate_up_month_2": "",
        "std_current_rate_up_month_3": "",
        "std_current_rate_down_month_1": "",
        "std_current_rate_down_month_2": "",
        "std_current_rate_down_month_3": "",
      },
      "feat_continous": [
        'SR_month_1', 'SR_month_2', 'SR_month_3', 'avg_signal_up_week_4', 'avg_signal_up_week_3',
        'avg_signal_up_week_2', 'avg_signal_up_week_1', 'avg_signal_down_week_4', 'avg_signal_down_week_3', 
        'avg_signal_down_week_2', 'avg_signal_down_week_1', 'avg_attenuation_up_week_4', 'avg_attenuation_up_week_3',
        'avg_attenuation_up_week_2', 'avg_attenuation_up_week_1', 'avg_attenuation_down_week_4', 'avg_attenuation_down_week_3',
        'avg_attenuation_down_week_2', 'avg_attenuation_down_week_1', 'std_attainable_rate_up_month_1',
        'std_attainable_rate_up_month_2', 'std_attainable_rate_up_month_3', 'std_attainable_rate_down_month_1',
        'std_attainable_rate_down_month_2', 'std_attainable_rate_down_month_3', 'std_current_rate_up_month_1',
        'std_current_rate_up_month_2', 'std_current_rate_up_month_3', 'std_current_rate_down_month_1', 
        'std_current_rate_down_month_2', 'std_current_rate_down_month_3'
      ],
      "result_prediction": false,
    }    
  },
  
  methods: {
    submit(){
      
      for(const i in this.data) {
          this.data[i] = parseFloat(this.data[i])
      }
      // console.log(this.data)
      let the_data = { "data": this.data }
      http.post('https://service-order-api.herokuapp.com/predict', the_data)
        .then((result) => {
          if( result ){
            // success
            this.result_prediction = result['data']
            if(this.result_prediction['prediction'] == 0){
              this.result_prediction['message'] = 'NÃO VAI ABRIR OS'
              this.result_prediction['percent'] = (this.result_prediction['porcentage_0'] * 100).toFixed(2)
              this.result_prediction['color'] = 'green'
            } else {
              this.result_prediction['message'] = 'VAI ABRIR OS !'
              this.result_prediction['percent'] = (this.result_prediction['porcentage_1'] * 100).toFixed(2)
              this.result_prediction['color'] = 'red'
            }
          } else {
            // failed
            this.result_prediction = false
          }
          
        })
        .catch((err) => {
          // grave error
          console.error(err);
        });
      
    }
  }

  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>