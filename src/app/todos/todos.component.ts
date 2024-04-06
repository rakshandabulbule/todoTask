import { Component, OnInit } from '@angular/core';
import { Itodos } from '../models/todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todoArr : Array<Itodos> = [
    {
      todoItem : "javascript"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
  onTodoAdd(todo : HTMLInputElement){
    console.log(todo.value)
    let todoObj : Itodos = {
      todoItem : todo.value
    }

    this.todoArr.push(todoObj);
    todo.value = ''
  }

}
