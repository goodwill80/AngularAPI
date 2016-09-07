import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import 'rxjs/add/operator/map';
import { ROUTER_DIRECTIVES } from '@angular/router';




class Todo{
  text: string;
  isCompleted: boolean;
}


@Component({
  moduleId: module.id,
  selector: 'todos',
  styleUrls: ['todos.component.css'],
  templateUrl: 'todos.component.html',
  directives:[ ROUTER_DIRECTIVES ]
})

export class TodosComponent implements OnInit {
  //define a variable and set it equal to the Todo model you have defined in your class Todo as an empty array
  todos: Todo[];

  //You will need a construtor to link it to your service data factory class TodoService http methods
  constructor(private _todoService:TodoService) {
  }


  //GET ALL TODOS in our database
  //instead of using callback functions, we use => to res the json data from our API and map it according to the json formate. Then we subscribe it to turn avialable for rendered into HTML (equivalent to pushing the data from API into our empty array)
    ngOnInit() {
      this.todos = [];
      this._todoService.getTodos()
      .map(res => res.json())
      .subscribe(todos => this.todos = todos)
    }

  //Create New Todo (3 steps)
  //1. pass in the input from form into var newTodo
  //2. Backend - use the _todoService injectable to activate the saveTodo() to save the new input into our API DB
  //3. Frontend - then seperately, push this new input into the todos[] so as to be used in HTML in {{}} by using ngFor todo of todos
    addTodo($event, todoText) {
      if($event.which === 1){
        var result;
        var newTodo = {
          text: todoText.value,
          isCompleted: false
        };
        result = this._todoService.saveTodo(newTodo);
        result.subscribe(x => {
        this.todos.push(newTodo)
          todoText.value='';
        })
      }
    }

  //To change our Todo isCompleted to false once we unchecked our checkbox in HTML
  //note: _id is the object id from our API
    updateStatus(todo){
      var _todo = {
        _id: todo._id,
        text: todo.text,
        isCompleted: !todo.isCompleted
      };

      this._todoService.updateTodo(_todo)
      .map(res => res.json())
      .subscribe(data => {
        todo.isCompleted = !todo.isCompleted;
      });
    }

    setEditState(todo, state){
      if(state){
        todo.isEditMode = state;
      } else {
        delete todo.isEditMode;
      }
    }

    updateTodoText($event, todo){
      if($event.which === 13){
        todo.text = $event.target.value;
        var _todo = {
          _id: todo._id,
          text: todo.text,
          isCompleted: todo.isCompleted
        };

        this._todoService.updateTodo(_todo)
        .map(res => res.json())
        .subscribe(data => {
          this.setEditState(todo, false);
        });
      }
    }

    deleteTodo(todo){
      var todos = this.todos;

      this._todoService.deleteTodo(todo._id)
        .map(res => res.json())
        .subscribe(data => {
          if(data.n == 1){
            for(var i = 0;i < todos.length;i++){
              if(todos[i]._id == todo._id){
                todos.splice(i, 1);
              }
            }
          }
        })
    }
  }
