Todos.Todo = DS.Model.extend({
	title : DS.attr('string'),
	isCompleted : DS.attr('boolean')
});

Todos.Todo.FIXTURES = [ {
	id : 1,
	title : 'Aprender Ember.js',
	isCompleted : true
}, {
	id : 2,
	title : '...',
	isCompleted : false
}, {
	id : 3,
	title : 'Aprovecharlo!',
	isCompleted : false
} ];