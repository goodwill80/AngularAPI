//this service folder is responsible for fetching the data from mongoose DB
//you will need to import 3 main modules below
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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
//you want to declare public as you want it to be avail to all components
//define a constructor pararameter _http to link to the Http method from module
var TodoService = (function () {
    function TodoService(_http) {
        this._http = _http;
    }
    TodoService.prototype.getTodos = function () {
        return this._http.get('/api/todos');
    };
    //CREATE NEW TODO - POST route
    //Headers are part of the HTTP module
    TodoService.prototype.saveTodo = function (todo) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post('/api/todos', JSON.stringify(todo), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //Update Todo - PUT route
    TodoService.prototype.updateTodo = function (todo) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.put('/api/todos/' + todo._id, JSON.stringify(todo), { headers: headers });
    };
    //delete request
    TodoService.prototype.deleteTodo = function (id) {
        return this._http.delete('/api/todos/' + id);
    };
    TodoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TodoService);
    return TodoService;
}());
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map