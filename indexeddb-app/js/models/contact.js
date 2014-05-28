Contacts.contact = DS.Model.extend({
  name: DS.attr('string'),
  lastName: DS.attr('string'),
  cellphone: DS.attr('number'),
  email: DS.attr('string'),
});

Contacts.contact.FIXTURES = [
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