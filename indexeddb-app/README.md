# IndexedDB App
## Laboratorio de Bases de Datos 2014
## Universidad Nacional de Itapúa - Ingeniería en Informática

### Introduction

This is an introduction to Javascript apps with offline database using IndexedDB API and Ember.js. Moreover, this is an example of a non-SQL or non-relational database. It's up to the student to make a further research about related subjects such as WebSQL, libraries to manipulate DOM, libraries to abstract underlying device platform, libraries to enforce design patterns, synchronization with cloud and so on.

### About the App

This app will serve as a classmate contact list and a course TODO list. The target user for this app is any student of this course. 
The user(e.g. a student) should be able to create, read, update, delete (CRUD) _tasks_ in a TODO list and _classmates_ in a contact list.

In the future, when we get to the server backend of this app, the classmates should be able to share tasks with each other.

### About the work

The work is divided in issues in this repo's issue tracker in the milestone [TP#1 - IndexedDB app](https://github.com/hisapy/uni-bd-2014/issues?milestone=1&state=open). Basically, the student will have to modify/improve the base app that is provided in this repo's master branch. The student is free to modify all the code at will.

The Ember.js app provided is the [TodoMVC](http://todomvc.com/) app built following the steps in the [Ember.js Getting Started Guide](http://emberjs.com/guides/getting-started/), using the IndexedDB adapter https://github.com/kurko/ember-indexeddb-adapter to persist data between page relods. To run the app just open the index.html provided in this directory (indexeddb-app) in a web browser. To know if your browser can use indexeddb just go to http://caniuse.com/#search=indexeddb.

### Work Submission (Pull Request)

Please name your branch with the first letter of your name followed by your last name and suffix -indexeddb-app (eg: my name is Hisakazu Ishibashi so the branch name is hishibashi-indexeddb-app).
