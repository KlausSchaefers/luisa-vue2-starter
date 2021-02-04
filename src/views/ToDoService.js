class ToDoService {

  constructor () {
    this.todos = []
    this.STORAGE_KEY = 'QUX-ToDo-Service'
    let json = localStorage.getItem(this.STORAGE_KEY)
    if (json) {
      this.todos = JSON.parse(json)
    }
  }

  login(email, password) {
    return email === 'klaus' && password === '123'
  }

  create (newToDo) {
    let todo = {
      id: 'ToDo' + new Date().getTime(),
      name: newToDo.name,
      description: newToDo.description,
      abs: newToDo.description.length > 50 ? newToDo.description.substring(0, 50) + '...' : newToDo.description
    }
    this.todos.push(todo)
    this._save()
  }

  update (updatedToDo) {
    let task = this.findById(updatedToDo.id)
    if (task) {
      task.name = updatedToDo.name
      task.description = updatedToDo.description
      task.abs = updatedToDo.description.length > 50 ? updatedToDo.description.substring(0, 50) + '...' : updatedToDo.description
    }
    this._save()
  }

  findById (id) {
    return this.todos.find(t => t.id == id)
  }

  findAll () {
    return this.todos
  }

  _save () {
    let json = JSON.stringify(this.todos)
    localStorage.setItem(this.STORAGE_KEY, json)
  }

}
export default new ToDoService()