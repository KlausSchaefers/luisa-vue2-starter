<template>
  <div class="home">
    <Luisa design="a2aa10atOYDU8XLBz2n3pTiJEjCsyY728M5hyCAD6UC8c7pDeyDkPpMAYC26" v-model="viewModel" :config="config"/>
  </div>
</template>
<style lang="scss">

</style>

<script>
import Vue from "vue";
import Luisa from 'luisa-vue'
Vue.use(Luisa);

export default {
  name: 'Home',
  data: function () {
    return {
      viewModel: {
        max: 2     
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
    onHomeLoaded () {
      console.debug("On Home loaded")
    }
  }
}
</script>
