//this service folder is responsible for fetching the data from mongoose DB
//you will need to import 3 main modules below

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

//you want to declare public as you want it to be avail to all components
//define a constructor pararameter _http to link to the Http method from module
@Injectable()
export class TodoService {
  constructor(public _http:Http) {
  }

  getTodos(){
    return this._http.get('/api/todos');
  }

  //CREATE NEW TODO - POST route
  //Headers are part of the HTTP module
  saveTodo(todo) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post('/api/todos', JSON.stringify(todo), {headers: headers})
    .map(res => res.json());
  }

  //Update Todo - PUT route
  updateTodo(todo) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.put('/api/todos/' + todo._id, JSON.stringify(todo), {headers: headers});
  }

  //delete request
  deleteTodo(id){
      return this._http.delete('/api/todos/'+ id);
  }
}
