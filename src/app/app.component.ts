import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-do-list';

  constructor(){
    // setTimeout(()=>{
    //   this.title="Welcome to TO-DO-List";

    // },5000);
  }
}
