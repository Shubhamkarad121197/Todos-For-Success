import { Component, EventEmitter, OnInit ,Output} from '@angular/core';
import { ToDo } from 'src/app/ToDo';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent implements OnInit {
  @Output() todoAdd:EventEmitter<ToDo>=new EventEmitter();
  title:string="";
  Description:string="";
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log("Entered Add to do button");
    const todo={
      sno:8,
      title:this.title,
      description:this.Description,
      active:true
    }
    this.todoAdd.emit(todo);
  }

}
