var app=angular.module("toDoApp",[]);
        app.controller("TodoCtrl",TodoCtrl);


function TodoCtrl(){
    this.todos=[
    "Learning Angular 1",
    "Try out exercises",
    "Visit java page"];

    this.addNewTodo = function (){
        this.todos.push(this.newTodo);
        this.newTodo="";
    }

     this.triggerEditMode = function (){
        this.editMode=!this.editMode;
    }
            this.deleteTodo = function (index){
                console.log(index);
                this.todos.splice(index,1);
        }
    }
