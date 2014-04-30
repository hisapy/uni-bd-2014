Todos.Router.map(function() {
	this.resource('todos', {
		path : '/'
	}, function() {
		// additional child rutes will go there later
	});
});

Todos.TodosRoute = Ember.Route.extend({
	model : function() {
		return this.store.find('todo');
	}
});

Todos.TodosIndexRoute = Ember.Route.extend({
	model : function() {
		return this.modelFor('todos');
	}
});