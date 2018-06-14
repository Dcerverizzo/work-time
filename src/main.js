// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './../node_modules/bulma/css/bulma.css'
import './../node_modules/bulma/css/login.css'
import './../node_modules/jquery/dist/jquery.min.js'
import moment from 'moment'
import Vue from 'vue'
Vue.prototype.moment = moment

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    message: 'Horario:',
    currentTime: null,
    currentDate: null
  },
  methods: {
    updateCurrentTime () {
      this.currentTime = moment().format('LTS')
    },
    updateCurrentDate () {
      this.currentDate = moment().format('LTS')
    }
  },
  created () {
    this.currentTime = moment().format('LTS')
    setInterval(() => this.updateCurrentTime(), 1 * 1000)
    this.currentDate = moment().format('ll')
  }
})
window.vm = new Vue({
  el: '#date-time',
  data () {
    return {
      msg: 'Data e Hora Local',
      dataHora: '',
      data: ''
    }
  },
  mounted () {
    let dataHora = moment.utc().format('HH:mm:ss')
    this.dataHora = dataHora
    let data = moment.utc().format('ll')
    this.data = data
  }
})

Vue.component('button-message', {
  template: `<button v-on:click="additem">Send</button>`,
  methods: {
    handleSendMessage: function () {
      this.$emit('message', { message: this.message })
    }
  }
})
