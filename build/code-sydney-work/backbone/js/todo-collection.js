var app=app||{};app.TodoList=Backbone.Collection.extend({model:app.Todo,localStorage:new Store("backbone-todo")}),app.todoList=new app.TodoList;