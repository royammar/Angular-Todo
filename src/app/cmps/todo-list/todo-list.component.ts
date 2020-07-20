import { Component, OnInit, Input } from '@angular/core';
import TodoModel from 'src/app/models/todo.model';

 


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() public todos:TodoModel[]
  constructor() { }

  ngOnInit(): void {
    
  }

}
