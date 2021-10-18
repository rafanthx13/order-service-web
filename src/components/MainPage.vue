<template>
  <div>

    <NavBar></NavBar>

    <h2 class="mt-4" >Escolha um cliente da base Join ou insira os dados da rede de um cliente para predizer se abrirá ou não uma ordem de serviço nos próximos 15 dias</h2>

    <!-- <div class="container mt-4">
      <div class="card">
        <div class="card-content">
          <h3 class="mb-2 subtitle">Exemplos Automáticos</h3>

          <div class="columns">

            <div class="column">
              <b-field>
                <p class="control">
                  <b-button class="submit-btn" label="Exemplo 1" type="is-primary" @click="person_1()" />
                </p>
              </b-field>
            </div>

            <div class="column">
              <b-field>
              <p class="control">
                <b-button class="submit-btn" label="Exemplo 2" type="is-primary" @click="person_2()" />
              </p>
              </b-field>
            </div>

            <div class="column">
              <b-field>
              <p class="control">
                <b-button class="submit-btn" label="Zerar Tudo" type="is-primary" @click="person_zero()" />
              </p>
              </b-field>
            </div>

          </div>

        </div>
      </div>
    </div> -->

     <div class="container mt-4">
      <div class="card">
        <div class="card-content">

          <h3 class="mb-2 subtitle">Busca de Clientes da Base Join</h3>

          <div class="columns">

            <div class="column">
              <b-field>
                <b-select placeholder="Selecione o Cliente" :loading="personLoading" v-model="selectedClient"  >
                  <option v-for="(name, index) in list_names" :key="index" :value="name">
                    {{ name }}
                  </option>
                </b-select>
              </b-field>
            </div>

            <div class="column">
              <b-field>
              <p class="control">
                <b-button class="submit-btn" label="Buscar Dados do Cliente" :disabled="!selectedClient"
                v-bind:class="{ disabledBtn: !selectedClient }" type="is-primary" @click="get_person(selectedClient)" />
              </p>
              </b-field>
            </div>

            <div class="column">
              <b-field>
              <p class="control">
                <b-button class="submit-btn" label="Resetar Dados" type="is-primary" @click="person_zero()" />
              </p>
              </b-field>
            </div>

          </div>

          </div>
      </div>
    </div>

    <ValidationObserver ref="observer">
      <form>

    <!-- QTD OSs -->

    <div class="container mt-6">
      <div class="card">
        <div class="card-content">
      <div class="columns">
        <div class="column">

          <ValidationProvider name="qtd-OS-3" rules="required|between:0,100">
            <b-field label="Quantidade de OS no antepenúltimo mês"
                slot-scope="{ errors, valid }"
                :type="{ 'is-danger': errors[0], 'is-success': valid }"
                :message="errors"
            >
              <b-input placeholder="Número" type="number" min="0" v-model="data.SR_month_3"></b-input>
            </b-field>
          </ValidationProvider>

        </div>
        <div class="column">

          <ValidationProvider name="qtd-OS-2" rules="required|between:0,100">
            <b-field label="Quantidade de OS no penúltimo mês"
                slot-scope="{ errors, valid }"
                :type="{ 'is-danger': errors[0], 'is-success': valid }"
                :message="errors"
            >
              <b-input placeholder="Número" type="number" min="0" v-model="data.SR_month_2" ></b-input>
            </b-field>
          </ValidationProvider>

        </div>
        <div class="column">

          <ValidationProvider name="qtd-OS-1" rules="required|between:0,100">
            <b-field label="Quantidade de OS no último mês"
                slot-scope="{ errors, valid }"
                :type="{ 'is-danger': errors[0], 'is-success': valid }"
                :message="errors"
            >
              <b-input placeholder="Número" type="number" min="0" v-model="data.SR_month_1" ></b-input>
            </b-field>
          </ValidationProvider>

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

              <ValidationProvider name="avg_signal_up_week_4" rules="required|min_value:0">
                <b-field label="Avg Signal Up Week 4"
                    slot-scope="{ errors, valid }"
                    :type="{ 'is-danger': errors[0], 'is-success': valid }"
                    :message="errors"
                >
                  <b-input placeholder="Número" type="number" v-model="data.avg_signal_up_week_4"></b-input>
                </b-field>
              </ValidationProvider>

              <ValidationProvider name="avg_signal_up_week_3" rules="required|min_value:0">
                <b-field label="Avg Signal Up Week 3"
                    slot-scope="{ errors, valid }"
                    :type="{ 'is-danger': errors[0], 'is-success': valid }"
                    :message="errors"
                >
                  <b-input placeholder="Número" type="number" min="0" v-model="data.avg_signal_up_week_3"></b-input>
                </b-field>
              </ValidationProvider>

              <ValidationProvider name="avg_signal_up_week_2" rules="required|min_value:0">
                <b-field label="Avg Signal Up Week 2"
                    slot-scope="{ errors, valid }"
                    :type="{ 'is-danger': errors[0], 'is-success': valid }"
                    :message="errors"
                >
                  <b-input placeholder="Número" type="number" v-model="data.avg_signal_up_week_2"></b-input>
                </b-field>
              </ValidationProvider>

              <ValidationProvider name="avg_signal_up_week_1" rules="required|min_value:0">
                <b-field label="Avg Signal Up Week 1"
                    slot-scope="{ errors, valid }"
                    :type="{ 'is-danger': errors[0], 'is-success': valid }"
                    :message="errors"
                >
                  <b-input placeholder="Número" type="number" v-model="data.avg_signal_up_week_1"></b-input>
                </b-field>
              </ValidationProvider>

            </div>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <div class="card-content">
            <div class="content">

              <ValidationProvider name="avg_signal_down_week_4" rules="required|min_value:0">
                <b-field label="Avg Signal Down Week 4"
                    slot-scope="{ errors, valid }"
                    :type="{ 'is-danger': errors[0], 'is-success': valid }"
                    :message="errors"
                >
                  <b-input placeholder="Número" type="number" v-model="data.avg_signal_down_week_4"></b-input>
                </b-field>
              </ValidationProvider>

              <ValidationProvider name="avg_signal_down_week_3" rules="required|min_value:0">
                <b-field label="Avg Signal Down Week 3"
                    slot-scope="{ errors, valid }"
                    :type="{ 'is-danger': errors[0], 'is-success': valid }"
                    :message="errors"
                >
                  <b-input placeholder="Número" type="number" v-model="data.avg_signal_down_week_3"></b-input>
                </b-field>
              </ValidationProvider>

              <ValidationProvider name="avg_signal_down_week_2" rules="required|min_value:0">
                <b-field label="Avg Signal Down Week 2"
                    slot-scope="{ errors, valid }"
                    :type="{ 'is-danger': errors[0], 'is-success': valid }"
                    :message="errors"
                >
                  <b-input placeholder="Número" type="number" v-model="data.avg_signal_down_week_2"></b-input>
                </b-field>
              </ValidationProvider>

              <ValidationProvider name="avg_signal_down_week_1" rules="required|min_value:0">
                <b-field label="Avg Signal Down Week 1"
                    slot-scope="{ errors, valid }"
                    :type="{ 'is-danger': errors[0], 'is-success': valid }"
                    :message="errors"
                >
                  <b-input placeholder="Número" type="number" v-model="data.avg_signal_down_week_1"></b-input>
                </b-field>
              </ValidationProvider>

            </div>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <div class="card-content">
            <div class="content">

              <!-- AVG ATTENUATION UP WEEK -->

              <ValidationProvider name="avg_attenuation_up_week_4" rules="required|min_value:0">
                <b-field label="Avg Attenuation Up Week 4"
                    slot-scope="{ errors, valid }"
                    :type="{ 'is-danger': errors[0], 'is-success': valid }"
                    :message="errors"
                >
                  <b-input placeholder="Número" type="number" v-model="data.avg_attenuation_up_week_4"></b-input>
                </b-field>
              </ValidationProvider>

              <ValidationProvider name="avg_attenuation_up_week_3" rules="required|min_value:0">
                <b-field label="Avg Attenuation Up Week 3"
                    slot-scope="{ errors, valid }"
                    :type="{ 'is-danger': errors[0], 'is-success': valid }"
                    :message="errors"
                >
                  <b-input placeholder="Número" type="number" v-model="data.avg_attenuation_up_week_3"></b-input>
                </b-field>
              </ValidationProvider>

              <ValidationProvider name="avg_attenuation_up_week_2" rules="required|min_value:0">
                <b-field label="Avg Attenuation Up Week 2"
                    slot-scope="{ errors, valid }"
                    :type="{ 'is-danger': errors[0], 'is-success': valid }"
                    :message="errors"
                >
                  <b-input placeholder="Número" type="number" v-model="data.avg_attenuation_up_week_2"></b-input>
                </b-field>
              </ValidationProvider>

              <ValidationProvider name="avg_attenuation_up_week_1" rules="required|min_value:0">
                <b-field label="Avg Attenuation Up Week 1"
                    slot-scope="{ errors, valid }"
                    :type="{ 'is-danger': errors[0], 'is-success': valid }"
                    :message="errors"
                >
                  <b-input placeholder="Número" type="number" v-model="data.avg_attenuation_up_week_1"></b-input>
                </b-field>
              </ValidationProvider>

            </div>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <div class="card-content">
            <div class="content">

              <!-- AVG ATTENUATION DOWN WEEK -->

              <ValidationProvider name="avg_attenuation_down_week_4" rules="required|min_value:0">
                <b-field label="Avg Attenuation Down Week 4"
                    slot-scope="{ errors, valid }"
                    :type="{ 'is-danger': errors[0], 'is-success': valid }"
                    :message="errors"
                >
                  <b-input placeholder="Número" type="number" v-model="data.avg_attenuation_down_week_4"></b-input>
                </b-field>
              </ValidationProvider>

              <ValidationProvider name="avg_attenuation_down_week_3" rules="required|min_value:0">
                <b-field label="Avg Attenuation Down Week 3"
                    slot-scope="{ errors, valid }"
                    :type="{ 'is-danger': errors[0], 'is-success': valid }"
                    :message="errors"
                >
                  <b-input placeholder="Número" type="number" v-model="data.avg_attenuation_down_week_3"></b-input>
                </b-field>
              </ValidationProvider>

              <ValidationProvider name="avg_attenuation_down_week_2" rules="required|min_value:0">
                <b-field label="Avg Attenuation Down Week 2"
                    slot-scope="{ errors, valid }"
                    :type="{ 'is-danger': errors[0], 'is-success': valid }"
                    :message="errors"
                >
                  <b-input placeholder="Número" type="number" v-model="data.avg_attenuation_down_week_2"></b-input>
                </b-field>
              </ValidationProvider>

              <ValidationProvider name="avg_attenuation_down_week_1" rules="required|min_value:0">
                <b-field label="Avg Attenuation Down Week 1"
                    slot-scope="{ errors, valid }"
                    :type="{ 'is-danger': errors[0], 'is-success': valid }"
                    :message="errors"
                >
                  <b-input placeholder="Número" type="number" v-model="data.avg_attenuation_down_week_1"></b-input>
                </b-field>
              </ValidationProvider>

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

              <!-- STD ATTAINABLE RATE UP MONTH -->

              <ValidationProvider name="std_attainable_rate_up_month_3" rules="required|min_value:0">
                <b-field label="Std Attainable Rate Up Month 3"
                    slot-scope="{ errors, valid }"
                    :type="{ 'is-danger': errors[0], 'is-success': valid }"
                    :message="errors"
                >
                  <b-input placeholder="Número" type="number" v-model="data.std_attainable_rate_up_month_3"></b-input>
                </b-field>
              </ValidationProvider>

              <ValidationProvider name="std_attainable_rate_up_month_2" rules="required|min_value:0">
                <b-field label="Std Attainable Rate Up Month 2"
                    slot-scope="{ errors, valid }"
                    :type="{ 'is-danger': errors[0], 'is-success': valid }"
                    :message="errors"
                >
                  <b-input placeholder="Número" type="number" v-model="data.std_attainable_rate_up_month_2"></b-input>
                </b-field>
              </ValidationProvider>

              <ValidationProvider name="std_attainable_rate_up_month_1" rules="required|min_value:0">
                <b-field label="Std Attainable Rate Up Month 1"
                    slot-scope="{ errors, valid }"
                    :type="{ 'is-danger': errors[0], 'is-success': valid }"
                    :message="errors"
                >
                  <b-input placeholder="Número" type="number" v-model="data.std_attainable_rate_up_month_1"></b-input>
                </b-field>
              </ValidationProvider>

            </div>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <div class="card-content">
            <div class="content">

              <!-- STD ATTAINABLE RATE DOWN MONTH -->

              <ValidationProvider name="std_attainable_rate_down_month_3" rules="required|min_value:0">
                <b-field label="Std Attainable Rate Down Month 3"
                    slot-scope="{ errors, valid }"
                    :type="{ 'is-danger': errors[0], 'is-success': valid }"
                    :message="errors"
                >
                  <b-input placeholder="Número" type="number" v-model="data.std_attainable_rate_down_month_3"></b-input>
                </b-field>
              </ValidationProvider>

              <ValidationProvider name="std_attainable_rate_down_month_2" rules="required|min_value:0">
                <b-field label="Std Attainable Rate Down Month 2"
                    slot-scope="{ errors, valid }"
                    :type="{ 'is-danger': errors[0], 'is-success': valid }"
                    :message="errors"
                >
                  <b-input placeholder="Número" type="number" v-model="data.std_attainable_rate_down_month_2"></b-input>
                </b-field>
              </ValidationProvider>

              <ValidationProvider name="std_attainable_rate_down_month_1" rules="required|min_value:0">
                <b-field label="Std Attainable Rate Down Month 1"
                    slot-scope="{ errors, valid }"
                    :type="{ 'is-danger': errors[0], 'is-success': valid }"
                    :message="errors"
                >
                  <b-input placeholder="Número" type="number" v-model="data.std_attainable_rate_down_month_1"></b-input>
                </b-field>
              </ValidationProvider>

            </div>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <div class="card-content">
            <div class="content">

              <!-- STD CURRENT RATE UP MONTH -->

              <ValidationProvider name="std_current_rate_up_month_3" rules="required|min_value:0">
                <b-field label="Std Current Rate Up Month 3"
                    slot-scope="{ errors, valid }"
                    :type="{ 'is-danger': errors[0], 'is-success': valid }"
                    :message="errors"
                >
                  <b-input placeholder="Número" type="number" v-model="data.std_current_rate_up_month_3"></b-input>
                </b-field>
              </ValidationProvider>

              <ValidationProvider name="std_current_rate_up_month_2" rules="required|min_value:0">
                <b-field label="Std Current Rate Up Month 2"
                    slot-scope="{ errors, valid }"
                    :type="{ 'is-danger': errors[0], 'is-success': valid }"
                    :message="errors"
                >
                  <b-input placeholder="Número" type="number" v-model="data.std_current_rate_up_month_2"></b-input>
                </b-field>
              </ValidationProvider>

              <ValidationProvider name="std_current_rate_up_month_1" rules="required|min_value:0">
                <b-field label="Std Current Rate Up Month 1"
                    slot-scope="{ errors, valid }"
                    :type="{ 'is-danger': errors[0], 'is-success': valid }"
                    :message="errors"
                >
                  <b-input placeholder="Número" type="number" v-model="data.std_current_rate_up_month_1"></b-input>
                </b-field>
              </ValidationProvider>

            </div>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <div class="card-content">
            <div class="content">

              <!-- STD CURRENT RATE UP MONTH -->

              <ValidationProvider name="std_current_rate_down_month_3" rules="required|min_value:0">
                <b-field label="Std Current Rate Down Month 3"
                    slot-scope="{ errors, valid }"
                    :type="{ 'is-danger': errors[0], 'is-success': valid }"
                    :message="errors"
                    class="label"
                >
                  <b-input placeholder="Número" type="number" v-model="data.std_current_rate_down_month_3"></b-input>
                </b-field>
              </ValidationProvider>

              <ValidationProvider name="std_current_rate_down_month_2" rules="required|min_value:0">
                <b-field label="Std Current Rate Down Month 2"
                    slot-scope="{ errors, valid }"
                    :type="{ 'is-danger': errors[0], 'is-success': valid }"
                    :message="errors"
                >
                  <b-input placeholder="Número" type="number" v-model="data.std_current_rate_down_month_2"></b-input>
                </b-field>
              </ValidationProvider>

              <ValidationProvider name="std_current_rate_down_month_1" rules="required|min_value:0">
                <b-field label="Std Current Rate Down Month 1"
                    slot-scope="{ errors, valid }"
                    :type="{ 'is-danger': errors[0], 'is-success': valid }"
                    :message="errors"
                >
                  <b-input placeholder="Número" type="number" v-model="data.std_current_rate_down_month_1"></b-input>
                </b-field>
              </ValidationProvider>

            </div>
          </div>
        </div>
      </div>

    </div>

    </form>
    </ValidationObserver>

    <div class="container mb-6 mt-4">
      <b-loading :is-full-page="isFullPage" v-model="isLoading" :can-cancel="true"></b-loading>
      <b-field>
        <p class="control">
          <b-button class="submit-btn" label="Enviar" type="is-primary" @click="submit" />
        </p>
      </b-field>
    </div>

    <b-loading is-full-page v-model="fullLoading" :can-cancel="true"></b-loading>

    <div class="my-6" v-if="result_prediction">
      <div class="card">
        <div class="content">

          <b-message has-icon :type="result_prediction['prediction'] == 0 ? 'is-success' : 'is-danger'" >
            <div class="message-style">
              <div class="mr-4">
                <span>Prediz que </span>
                <br>
                <span>{{ result_prediction['message'] }}</span>
                <br>
                <!-- <span>com {{ result_prediction['percent'] }}% de chance</span> -->
              </div>
              <div>
                <img :src="getImgUrl(result_prediction['prediction'])"
                  width="60" height="60" />
              </div>
            </div>
          </b-message>

          <!-- <div v-if="is_a_person">
            <br/>
            <b-message has-icon :type="right_prediction ? 'is-success' : 'is-danger'" >
              <div class="message-style ">
                <div class="mr-4">
                  <span> {{ right_prediction ? "ACERTOU" : "ERROU" }} PREDIÇÃO</span>
                </div>
                <div>
                  <img :src="getImgUrlPrediction(right_prediction)"
                    width="60" height="60" />
                </div>
              </div>
            </b-message>
          </div> -->

        </div>
      </div>
    </div>

  </div>
</template>

<script>

import { start_data, list_feat_continous,
  person_1_data, person_2_data, person_3_data}  from './../assets/raw_data'
import { required, between, min_value } from 'vee-validate/dist/rules'
import { extend, ValidationObserver,
  ValidationProvider, setInteractionMode } from 'vee-validate'

setInteractionMode('eager')

extend('required', {
  ...required,
  message: fieldName =>  'É necessário inserir o campo ' + fieldName,
})

extend('min_value', {
  ...min_value,
  message: 'Valor Mínimo é 0',
})

extend('between', {
  ...between,
  params: ['min', 'max'],
  message: 'O campo deve ter valores entre {min} e {max}',
})



import NavBar from "./NavBar.vue";
import http from "./../api/http.js"

export default {

  name: "MainPage",

  components: {
    NavBar,
    ValidationProvider,
    ValidationObserver,
  },

  data() {
    return {
       isLoading: false,
       isFullPage: false,
       data: start_data,
       feat_continous: list_feat_continous,
      "result_prediction": false,
      "person": {},
      "list_names": [],
      "personLoading": false,
      selectedClient: null,
      backup_person: {},
      is_a_person: false,
      right_prediction: false,
      fullLoading: false,
    }
  },

  watch: {
    selectedClient: function () {
      this.result_prediction = false
      this.is_a_person = false
    },
  },

  created(){
    this.personLoading = true
    http.get('https://service-order-api.herokuapp.com/names').then( (result) => {
      this.list_names = [...new Set(result['data']['names']) ]
      // console.log(this.list_names)
      this.personLoading = false
    })
    .catch( (err) => {
      console.error(err)
      this.notification_error('Erro na busca de nomes da base Join')
      this.personLoading = false
    });

  },

  methods: {

    getImgUrl(result){
      if(result == 0){
        let image_chosed = require.context('./../assets/', false, /\.png$/)
        return image_chosed('./' + 'ok-icon.png')
      } else {
        let image_chosed = require.context('./../assets/', false, /\.png$/)
        return image_chosed('./' + 'service-order-icon-red.png')
      }
    },

    getImgUrlPrediction(result){
      let the_answer_of_prediction = result ? 'right' : 'wrong'
      let image_chosed = require.context('./../assets/', false, /\.png$/)
      return image_chosed('./' + the_answer_of_prediction + '.png')
    },

    // original_od: 0
    // proba0: 0.3734484439540304
    // proba1: 0.6265515560459696
    // result_output: 1

    get_person(person_name){
      this.fullLoading = true
      if(person_name != ''){
        http.get('https://service-order-api.herokuapp.com/person?name=' + person_name).then( (result) => {
          this.person = result['data']
          for (let el of this.feat_continous){
            this.data[el] = this.person[el]
            this.backup_person[el] = this.person[el]
          }
          // console.log(this.person)
          this.fullLoading = false
          this.notification_success('Dados do cliente preenchidos com sucesso')
        })
        .catch( (err) => {
          console.error(err)
          this.notification_error('Erro na busca dos dados do cliente da base Join')
          this.fullLoading = false
        });
      }
    },

    person_1(){
      let adict = person_1_data
      for (var el in adict){
        this.data[el] = adict[el]
      }
    },

    person_2(){
      let adict = person_2_data
      for (var el in adict){
        this.data[el] = adict[el]
      }
    },

    person_zero() {
      let adict = person_3_data
      for (var el in adict){
        this.data[el] = adict[el]
      }
    },

    notification_error(text_message) {
      this.$buefy.notification.open({
          duration: 4000,
          message: text_message,
          type: 'is-danger',
      })
    },

    notification_success(text_message) {
      this.$buefy.notification.open({
          duration: 3000,
          message: text_message,
          type: 'is-success',
      })
    },

    check_if_change_data(){
      for (let el of this.feat_continous){
        if(this.data[el] != this.backup_person[el]){
          return false
        }
      }
      return true
    },

    check_prediction(is_person, prediction, real_y){
      if(is_person){
        this.is_a_person = true
        this.right_prediction = prediction == real_y
      }
    },

    submit(){
      // Verificar se os dados nao foram modificados (copy data e check it one)
      let check_is_person = this.check_if_change_data()
      this.isLoading = true
      this.is_a_person = false
      this.right_prediction = false

      this.$refs.observer.validate().then( (validation) => {
        if(validation){
          // Prepara Data
          for(const i in this.data) {
            this.data[i] = parseFloat(this.data[i])
          }
          let the_data = { "data": this.data }
          // Access API
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
                this.check_prediction(check_is_person, this.result_prediction['prediction'], this.person['original_od'])
                this.isLoading = false
              } else {
                // failed in response
                this.notification_error('Erro no retorno dos dados da api')
                this.result_prediction = false
                this.isLoading = false
              }
            })
            .catch((err) => {
              // failed in access api
              console.error(err);
              this.notification_error('Erro no retorno dos dados da async da API')
              this.isLoading = false
            });

        } else {
          // failed in form
          this.notification_error('Formulário incompleto')
          this.isLoading = false
        }

    }).catch((err) => {
        // failed in form
        console.error(err);
        console.error('Erro na validaçao dos dados');
        this.isLoading = false
    });

  },

}


};
</script>

<style scoped>

.submit-btn {
  background-color: #41B883;
}

.submit-btn:hover {
  background-color: #2e4960;
}

.field {
  font-size: 15px !important;
}

.label {
  font-size: 15px !important;
}

.subtitle {
  font-size: 15px;
  font-weight: 600;
}

.message-style {
  display: flex; flex-direction: row; justify-content: center; align-items: center;
}

.disabledBtn{
  background-color: #2e4960 !important;
}

</style>
