<template>
  <div class="home">
    <Luisa :design="design" v-model="viewModel" :config="config"/>
  </div>
</template>
<style lang="scss">

</style>

<script>
import Vue from "vue";
import Luisa from 'luisa-vue'
Vue.use(Luisa);

import '@mdi/font/css/materialdesignicons.css'

import app from './app.json'

export default {
  name: 'Home',
  data: function () {
    return {
      design: app,
      viewModel: {
        myimage: 2     
      },
      config: {
        debug: {
          logLevel: 5
        }
      }
    }
  },
  components: {
  },
  methods: {
  }
}
</script>
