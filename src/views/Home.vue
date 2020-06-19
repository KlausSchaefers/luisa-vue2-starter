<template>
  <div class="home">
    <QUX app="a2aa10arB99qzMjWYeimjhwnZ9Ece6VuRzt7B1jDRBKvfT6ija1AFgKgoYCK" v-model="viewModel"/>
  </div>
</template>

<script>
import Vue from "vue";
import QUX from 'vue-low-code'
Vue.use(QUX);
import ToDoService from './ToDoService'

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
    onLogin (event) {
      if (this.viewModel.login.email === 'klaus' && this.viewModel.login.password === '123') {
        this.$router.push('/List.html')
      } else {
        this.viewModel.login.error = 'Wrong password...'
      }
      console.debug('onLogin', event, this.viewModel)
    },
    onCreateToDo (event) {
      console.debug('onCreateToDo', this.viewModel.new, event)
      ToDoService.create(this.viewModel.new)
      this.$router.push('/List.html')
    },
    onListLoaded (event) {
      console.debug('onListLoaded', event)
      this.viewModel.todos = ToDoService.findAll()
    },
    onEditToDo (event) {
      console.debug('onEditToDo', event)
      this.$router.push('/Edit.html?id=' + event.value.id)
    },
    onLoadSelectedToDo (event) {
      console.debug('onLoadSelectedToDo', event)
      this.viewModel.edit = ToDoService.findById(this.$route.query.id)
    },
    onUpdateToDo (event) {
      console.debug('onUpdateToDo', event)
      ToDoService.update(this.viewModel.edit)
      this.$router.push('/List.html')
    },
    onSearch (event) {
      console.debug('onSearch', event)
      let filtered = ToDoService.findAll().filter(todo => {
        return todo.name.indexOf(this.viewModel.searchFilter) >= 0
      })
      this.viewModel.todos = filtered
    }
  }
}
</script>
