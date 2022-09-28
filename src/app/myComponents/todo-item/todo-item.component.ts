import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';
import { ToDo } from 'src/app/ToDo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
@Input() todo:any=ToDo;
@Output() todoDelete:EventEmitter<ToDo>= new EventEmitter();
@Output() todoChekbox:EventEmitter<ToDo>= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log(this.todo);
  }
  onClick(todo:ToDo){
    this.todoDelete.emit(todo);
    console.log("On click has been Trigger");
  }
  onCheckBoxClick(todo:any){
    this.todoChekbox.emit(todo)

  }

}
