# vue-low-code-example
Example how to use vue-low-cde

Try out at https://klausschaefers.github.io/vue-low-code-example/#/

To lgin use the following credentials:
 - email: klaus
 - password: 123

# Only 5  lines of UI code

 The app has only the following code. Note how small the VUE template is! For details look at the `src/views/Home.vue` file

 ```vue
 <template>
  <div class="home">
    <QUX app="a2aa10arB99qzMjWYeimjhwnZ9Ece6VuRzt7B1jDRBKvfT6ija1AFgKgoYCK" v-model="viewModel" />
  </div>
</template>
<style lang="scss">

</style>

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
      console.debug('onLogin', event, this.viewModel)
      if (ToDoService.login(this.viewModel.login.email, this.viewModel.login.password)) {
        // if the user is logged in, we forward to the 'List' screen.
        this.viewModel.login.error = ''
        return 'List'
      } else {
        // if the login is wrong, we set the error label
        this.viewModel.login.error = 'Wrong password...'
      }
    },
    onNew (event) {
      console.debug('onNew', this.viewModel.new, event)
      // we reset the new object, otherwise the last values would be shown
      this.viewModel.new.name = ''
      this.viewModel.new.description = ''
    },
    onCreateToDo (event) {
      console.debug('onCreateToDo', this.viewModel.new, event)
      ToDoService.create(this.viewModel.new)
      return 'List'
    },
    onListLoaded (event) {
      console.debug('onListLoaded', event)
      this.viewModel.todos = ToDoService.findAll()
    },
    onEditToDo (event) {
      console.debug('onEditToDo', event)
      // read the selected value from the repeat Grid and redirect. Use the id as
      // a query parameter.
      this.$router.push('/Edit.html?id=' + event.value.id)
    },
    onLoadSelectedToDo (event) {
      console.debug('onLoadSelectedToDo', event)
      // here we read the id from the query parameter.
      this.viewModel.edit = ToDoService.findById(this.$route.query.id)
    },
    onUpdateToDo (event) {
      console.debug('onUpdateToDo', event)
      ToDoService.update(this.viewModel.edit)
      return 'List'
    },
    onLogout (event) {
      console.debug('onLogout', event)
      return 'Home'
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

 ```