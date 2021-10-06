<template>
  <div>

    <NavBar></NavBar>

    <h2 class="mt-4">Insira todos os dados para predizer se abrirá ou não uma ordem de serviço para os próximos 15 dias</h2>

    <div class="container mt-4">
      <div class="card">
        <div class="card-content">
          <h3 class="mb-2 subtitle">Exemplos Automaticos</h3>

          <div class="columns">

            <div class="column">
              <b-field>
                <p class="control">
                  <b-button class="submit-btn" label="Exemplo 1" type="is-primary" @click="person_1()" />
                  <!-- GRACIELE ANTONIA DA SILVA -->
                </p>
              </b-field>
            </div>

            <div class="column">
              <b-field>
              <p class="control">
                <b-button class="submit-btn" label="Exemplo 2" type="is-primary" @click="person_2()" />
                <!-- LUCAS MATEUS SILVA -->
              </p>
              </b-field>
            </div>

            <div class="column">
              <b-field>
              <p class="control">
                <b-button class="submit-btn" label="Zerar Tudo" type="is-primary" @click="person_3()" />
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
            <b-field label="Quantidade de OS a 3 meses"
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
            <b-field label="Quantidade de OS a 2 meses"
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

    <div class="my-6" v-if="result_prediction">
      <div class="card">
        <div class="content">
          <b-message has-icon :type="result_prediction['prediction'] == 0 ? 'is-success' : 'is-danger'" >
            <div style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
              <div class="mr-4">
                <span>Prediz que </span>
                <br>
                <span>{{ result_prediction['message'] }}</span>
                <br><!--
                <span>com {{ result_prediction['percent'] }}% de chance</span> -->
              </div>
              <div>
                <img :src="getImgUrl(result_prediction['prediction'])"
                  width="60" height="60" />
              </div>
            </div>


          </b-message>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

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

    getImgUrl(result){
      if(result == 0){
        let image_chosed = require.context('./../assets/', false, /\.png$/)
        return image_chosed('./' + 'ok-icon.png')
      } else {
        let image_chosed = require.context('./../assets/', false, /\.png$/)
        return image_chosed('./' + 'service-order-icon-red.png')
      }
    },

    person_3() {
      let adict = {
        "SR_month_3": 0,
        "SR_month_2": 0,
        "SR_month_1": 0,
        "avg_signal_up_week_4": 0,
        "avg_signal_up_week_3": 0,
        "avg_signal_up_week_2": 0,
        "avg_signal_up_week_1": 0,
        "avg_signal_down_week_4": 0,
        "avg_signal_down_week_3": 0,
        "avg_signal_down_week_2": 0,
        "avg_signal_down_week_1": 0,
        "avg_attenuation_up_week_4": 0,
        "avg_attenuation_up_week_3": 0,
        "avg_attenuation_up_week_2": 0,
        "avg_attenuation_up_week_1": 0,
        "avg_attenuation_down_week_4": 0,
        "avg_attenuation_down_week_3": 0,
        "avg_attenuation_down_week_2": 0,
        "avg_attenuation_down_week_1": 0,
        "std_attainable_rate_up_month_1": 0,
        "std_attainable_rate_up_month_2": 0,
        "std_attainable_rate_up_month_3": 0,
        "std_attainable_rate_down_month_1": 0,
        "std_attainable_rate_down_month_2": 0,
        "std_attainable_rate_down_month_3": 0,
        "std_current_rate_up_month_1": 0,
        "std_current_rate_up_month_2": 0,
        "std_current_rate_up_month_3": 0,
        "std_current_rate_down_month_1": 0,
        "std_current_rate_down_month_2": 0,
        "std_current_rate_down_month_3": 0,
      }
      for (var el in adict){
        this.data[el] = adict[el]
      }

    },

    person_1(){

      let adict = {
        // {
    // "Name": "GRACIELE ANTONIA DA SILVA",
    // "CPF_CGC": 6160908626,
    "SR_month_1": 1,
    "SR_month_2": 2,
    "SR_month_3": 1,
    "avg_signal_up_week_4": 0,
    "avg_signal_up_week_3": 0,
    "avg_signal_up_week_2": 0,
    "avg_signal_up_week_1": 0,
    "avg_signal_down_week_4": 0,
    "avg_signal_down_week_3": 0,
    "avg_signal_down_week_2": 0,
    "avg_signal_down_week_1": 0,
    "avg_attenuation_up_week_4": 0,
    "avg_attenuation_up_week_3": 0,
    "avg_attenuation_up_week_2": 0,
    "avg_attenuation_up_week_1": 0,
    "avg_attenuation_down_week_4": 0,
    "avg_attenuation_down_week_3": 0,
    "avg_attenuation_down_week_2": 0,
    "avg_attenuation_down_week_1": 0,
    "std_attainable_rate_up_month_1": 534766.5590959039,
    "std_attainable_rate_up_month_2": 0,
    "std_attainable_rate_up_month_3": 0,
    "std_attainable_rate_down_month_1": 5264108.316100302,
    "std_attainable_rate_down_month_2": 0,
    "std_attainable_rate_down_month_3": 0,
    "std_current_rate_up_month_1": 467920.7392089158,
    "std_current_rate_up_month_2": 0,
    "std_current_rate_up_month_3": 0,
    "std_current_rate_down_month_1": 2506718.2457620488,
    "std_current_rate_down_month_2": 0,
    "std_current_rate_down_month_3": 0,
    // "count0": 7,
    // "acertou": "True",
    // "original_od": 1,
    // "result_output": 1,
    // "proba0": 0.10553274909663587,
    // "proba1": 0.8944672509033639
  }


      for (var el in adict){
        this.data[el] = adict[el]
      }

    },

    person_2(){

      let adict = {
        "SR_month_3": 0,
        "SR_month_2": 0,
        "SR_month_1": 0,
        "avg_signal_up_week_4": 71,
        "avg_signal_up_week_3": 8,
        "avg_signal_up_week_2": 7,
        "avg_signal_up_week_1": 0,
        "avg_signal_down_week_4": 225,
        "avg_signal_down_week_3": 8,
        "avg_signal_down_week_2": 8,
        "avg_signal_down_week_1": 0,
        "avg_attenuation_up_week_4": 103,
        "avg_attenuation_up_week_3": 3,
        "avg_attenuation_up_week_2": 3,
        "avg_attenuation_up_week_1": 0,
        "avg_attenuation_down_week_4": 159,
        "avg_attenuation_down_week_3": 8,
        "avg_attenuation_down_week_2": 8,
        "avg_attenuation_down_week_1": 0,
        "std_attainable_rate_up_month_1": "14205632685663800",
        "std_attainable_rate_up_month_2": "6661581393833340",
        "std_attainable_rate_up_month_3": "484458460551573",
        "std_attainable_rate_down_month_1": "21613833070512900",
        "std_attainable_rate_down_month_2": "2587238489200400",
        "std_attainable_rate_down_month_3": "2569127543220330",
        "std_current_rate_up_month_1": "5428812024743530",
        "std_current_rate_up_month_2": "5661566332149900",
        "std_current_rate_up_month_3": "57735026918962500",
        "std_current_rate_down_month_1": "7387968597659300",
        "std_current_rate_down_month_2": "9572481391990270",
        "std_current_rate_down_month_3": "9584097940512360",
      }

      /*
        "Name": "LUCAS MATEUS SILVA",
    "CPF_CGC": 9928867674,
    "SR_month_1": 0,
    "SR_month_2": 0,
    "SR_month_3": 0,
    "avg_signal_up_week_4": 71,
    "avg_signal_up_week_3": 8,
    "avg_signal_up_week_2": 7,
    "avg_signal_up_week_1": 0,
    "avg_signal_down_week_4": 225,
    "avg_signal_down_week_3": 8,
    "avg_signal_down_week_2": 8,
    "avg_signal_down_week_1": 0,
    "avg_attenuation_up_week_4": 103,
    "avg_attenuation_up_week_3": 3,
    "avg_attenuation_up_week_2": 3,
    "avg_attenuation_up_week_1": 0,
    "avg_attenuation_down_week_4": 159,
    "avg_attenuation_down_week_3": 8,
    "avg_attenuation_down_week_2": 8,
    "avg_attenuation_down_week_1": 0,
    "std_attainable_rate_up_month_1": 14.205632685663812,
    "std_attainable_rate_up_month_2": 66.61581393833349,
    "std_attainable_rate_up_month_3": 48.4458460551573,
    "std_attainable_rate_down_month_1": 2161.3833070512965,
    "std_attainable_rate_down_month_2": 2587.238489200406,
    "std_attainable_rate_down_month_3": 2569.127543220331,
    "std_current_rate_up_month_1": 54.28812024743535,
    "std_current_rate_up_month_2": 56.61566332149906,
    "std_current_rate_up_month_3": 57.735026918962575,
    "std_current_rate_down_month_1": 738.7968597659302,
    "std_current_rate_down_month_2": 957.2481391990273,
    "std_current_rate_down_month_3": 958.4097940512364,
    "count0": 24,
    "acertou": "True",
    "original_od": 0,
    "result_output": 0,
    "proba0": 0.8101226547669467,
    "proba1": 0.18987734523305314
      */
      /*
      "OS_Abril": 0,
    "count0": 24,
    "acertou": "True",
    "os_original": 0
      => Prediz que
        NÃO VAI ABRIR OS
        com 79.57% de chance
      (ACERTOU NOSSO MODELO)
      */

      for (var el in adict){
        this.data[el] = adict[el]
      }

    },

    submit(){
      this.isLoading = true

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
                this.isLoading = false
              } else {
                // failed in response
                this.result_prediction = false
                this.isLoading = false
              }
            })
            .catch((err) => {
              // failed in access api
              console.error(err);
              console.error('Erro no acesso a API');
              this.isLoading = false
            });

        } else {
          // failed in form
          console.error('Erro na validaçao dos dados');
          this.isLoading = false
        }

    }).catch((err) => {
        // failed in form
        console.error(err);
        console.error('Erro na validaçao dos dados');
        this.isLoading = false
    });




    }
  },


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

</style>
