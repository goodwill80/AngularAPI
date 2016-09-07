"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var todo_service_1 = require('../services/todo.service');
require('rxjs/add/operator/map');
var router_1 = require('@angular/router');
var Todo = (function () {
    function Todo() {
    }
    return Todo;
}());
var TodosComponent = (function () {
    //You will need a construtor to link it to your service data factory class TodoService http methods
    function TodosComponent(_todoService) {
        this._todoService = _todoService;
    }
    //GET ALL TODOS in our database
    //instead of using callback functions, we use => to res the json data from our API and map it according to the json formate. Then we subscribe it to turn avialable for rendered into HTML (equivalent to pushing the data from API into our empty array)
    TodosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todos = [];
        this._todoService.getTodos()
            .map(function (res) { return res.json(); })
            .subscribe(function (todos) { return _this.todos = todos; });
    };
    //Create New Todo (3 steps)
    //1. pass in the input from form into var newTodo
    //2. Backend - use the _todoService injectable to activate the saveTodo() to save the new input into our API DB
    //3. Frontend - then seperately, push this new input into the todos[] so as to be used in HTML in {{}} by using ngFor todo of todos
    TodosComponent.prototype.addTodo = function ($event, todoText) {
        var _this = this;
        if ($event.which === 1) {
            var result;
            var newTodo = {
                text: todoText.value,
                isCompleted: false
            };
            result = this._todoService.saveTodo(newTodo);
            result.subscribe(function (x) {
                _this.todos.push(newTodo);
                todoText.value = '';
            });
        }
    };
    //To change our Todo isCompleted to false once we unchecked our checkbox in HTML
    //note: _id is the object id from our API
    TodosComponent.prototype.updateStatus = function (todo) {
        var _todo = {
            _id: todo._id,
            text: todo.text,
            isCompleted: !todo.isCompleted
        };
        this._todoService.updateTodo(_todo)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            todo.isCompleted = !todo.isCompleted;
        });
    };
    TodosComponent.prototype.setEditState = function (todo, state) {
        if (state) {
            todo.isEditMode = state;
        }
        else {
            delete todo.isEditMode;
        }
    };
    TodosComponent.prototype.updateTodoText = function ($event, todo) {
        var _this = this;
        if ($event.which === 13) {
            todo.text = $event.target.value;
            var _todo = {
                _id: todo._id,
                text: todo.text,
                isCompleted: todo.isCompleted
            };
            this._todoService.updateTodo(_todo)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.setEditState(todo, false);
            });
        }
    };
    TodosComponent.prototype.deleteTodo = function (todo) {
        var todos = this.todos;
        this._todoService.deleteTodo(todo._id)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < todos.length; i++) {
                    if (todos[i]._id == todo._id) {
                        todos.splice(i, 1);
                    }
                }
            }
        });
    };
    TodosComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'todos',
            styleUrls: ['todos.component.css'],
            templateUrl: 'todos.component.html',
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], TodosComponent);
    return TodosComponent;
}());
exports.TodosComponent = TodosComponent;
//# sourceMappingURL=todos.component.js.map