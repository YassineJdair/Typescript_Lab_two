"use strict";
exports.__esModule = true;
var Todo = /** @class */ (function () {
    function Todo() {
        this.tasks = [];
    }
    Todo.prototype.cosntructior = function () { };
    Todo.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("_______________ New Task Added _______________");
        console.log("Task " + task + " inserted in the list");
        return this.tasks.length;
    };
    Todo.prototype.listAllItems = function () {
        console.log("Start: All items in Array");
        this.tasks.forEach(function (task) {
            console.log(task);
        });
        console.log("End: All items in Array");
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task);
        if (index > -1) {
            this.tasks.splice(index, 1);
            console.log("______________ Task Removed ______________");
            console.log("Task " + task + " removed from list.");
        }
        return this.tasks.length;
    };
    return Todo;
}());
var myTodos = new Todo();
myTodos.addTask('eat');
myTodos.addTask('sleep');
myTodos.listAllItems();
myTodos.deleteTask('sleep');
