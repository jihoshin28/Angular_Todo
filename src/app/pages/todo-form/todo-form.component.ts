import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms"

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todo_item_title = 1
  todo_item_name = 0
  number = 0
  onClick = () => {
    console.log(this.todo_item_name, this.todo_item_title)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
