import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './myComponents/todos/todos.component';
import { TodoItemComponent } from './myComponents/todo-item/todo-item.component';

import { FormsModule } from '@angular/forms';
import { AddToDoComponent } from './myComponents/add-to-do/add-to-do.component';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    AddToDoComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
