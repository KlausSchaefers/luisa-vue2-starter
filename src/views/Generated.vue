<template>
  <div class="">
    <QUX app="a2aa10arB99qzMjWYeimjhwnZ9Ece6VuRzt7B1jDRBKvfT6ija1AFgKgoYCK" v-model="viewModel"/>
  </div>
</template>

<script>
import Vue from 'vue';
import QUX from 'vue-low-code'
Vue.use(QUX);

export default {
  name: 'Home',
  data: function () {
    return {
      viewModel: {
        description: '',
        edit: {
          description: '',
          name: '',
        },
        login: {
          email: '',
          error: '',
          password: '',
        },
        name: '',
        new: {
          description: '',
          name: '',
        },
        searchFilter: '',
        todos: '',
      }
    }
  },
  components: {
  },
  methods: {
    onLogin () {
    },
    onCreateToDo () {
    },
    onEditToDo () {
    },
    onUpdateToDo () {
    },
    onSearch () {
    }
  }
}
</script>