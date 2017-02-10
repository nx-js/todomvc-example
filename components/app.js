'use strict'

// define an app component with the above and an URL-state synchronizing middleware
nx.components.app({
	params: {
		status: {history: true, url: true, default: 'all'}
	}
}).use(setup).register('todo-app')

// this is a middleware function, which is used to add functionality to components
function setup(elem, state) {
	state.todos = {
		all: JSON.parse(localStorage.getItem('todos-nx')) || [],
		get completed() {
			return this.all.filter(todo => todo.completed)
		},
		get active() {
			return this.all.filter(todo => !todo.completed)
		},
		get allCompleted() {
			return this.all.every(todo => todo.completed)
		},
		set allCompleted(value) {
			if (value) {
				this.all.forEach(todo => todo.completed = true)
			} else {
				this.all.forEach(todo => todo.completed = false)
			}
		},
		create(event) {
			const title = event.target.value.trim()
			if (title) {
				this.all.push({title})
			}
			event.target.value = ''
		},
		edit(todo, event) {
			todo.title = event.target.value.trim()
			if (!todo.title) {
				this.remove(todo)
			}
			todo.editing = false
		},
		remove(todo) {
			const index = this.all.indexOf(todo)
			this.all.splice(index, 1)
		},
		clearCompleted() {
			this.all = this.active
		},
		toJSON() {
			return this.all.map(todo => ({title: todo.title, completed: todo.completed}))
		}
	}

	// auto save todos when the todos array or a todo title/completed is mutated/changed
	elem.$observe(() => localStorage.setItem('todos-nx', JSON.stringify(state.todos)))
}
