window.Todos = Ember.Application.create();
Todos.ApplicationSerializer = DS.IndexedDBSerializer.extend();
Todos.ApplicationAdapter = DS.IndexedDBAdapter.extend({
	databaseName : 'todos_uni_2014',
	version : 1,
	migrations : function() {
		this.addModel(Todos.Todo);
		var store = Todos.__container__.lookup('store:main');
		var subjects = ['Associations between objects', 'Pagination',
		                'Object Relational Mapping (ORM)',
		                'Offline database & database synchronization','RESTful web service',
		                'Learn from databases in general as much as possible'
		                ];
		for ( var i = 0; i < subjects.length; i++) {
			var todo = store.createRecord('todo', {
				title : subjects[i],
				isCompleted : false
			});
			todo.save();
		}

	}
});