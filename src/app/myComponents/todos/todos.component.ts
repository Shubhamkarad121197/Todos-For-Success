import { Component, OnInit } from '@angular/core';

import{ToDo} from '../../ToDo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:ToDo[];
  localItem:any;
  constructor() {
    this.localItem = localStorage.getItem("todos");
    if(this.localItem==null){
      this.todos=[];
    }
    else {
      this.todos=JSON.parse(this.localItem);
    }
    
   }

  ngOnInit(): void {
  }

  deleteTodo(todo:ToDo){
   
    const index=this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));

  }
  addTodo(todo:ToDo){
 
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));

  }
  toggleTodo(todo:ToDo){
    const index=this.todos.indexOf(todo);
    this.todos[index].active=!this.todos[index].active;
    
    localStorage.setItem("todos",JSON.stringify(this.todos));

  }

}
