App = Ember.Application.create();

App.Router.map(function() {
  this.resource('contacts');
  this.resource('todos');

});

App.Store = DS.Store.extend({
  revision:12,
  adapter: 'DS.FixtureAdapter'
});



App.Todos = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

App.Contacts = DS.Model.extend({
  name: DS.attr('string'),
  lastName: DS.attr('string'),
  cellphone: DS.attr('number'),
  email: DS.attr('string'),
});

App.Contacts.FIXTURES = [
 {
   id: 1,
   name: 'Adrian',
   lastName:'Halaburda',
   cellphone:"0985842776",
   email:'adh761@gmail.com'
 },
 {
   id: 2,
   name: 'Pablo',
   lastName:'Halaburda',
   cellphone:'0985713916',
   email:'halaburdapablo@gmail.com'
 },
 {
   id:3,
   name: 'Juan',
   lastName:'Perez',
   cellphone:'0904111116',
   email:'pepe@gmail.com'
 }
];

App.Todos.FIXTURES = [
 {
   id: 1,
   title: 'Learn Ember.js',
   isCompleted: true
 },
 {
   id: 2,
   title: '...',
   isCompleted: false
 },
 {
   id: 3,
   title: 'Profit!',
   isCompleted: false
 }
];

App.ContactsRoute = Ember.Route.extend({
    model: function() {
        //return all elements in model
        return App.Contacts.find();
    }
});