import { Component, OnInit, Input } from '@angular/core';
import TodoModel from 'src/app/models/todo.model';
import { TodoServiceService } from 'src/app/todo-service.service';




@Component({
  selector: 'app-todo-preview',
  templateUrl: './todo-preview.component.html',
  styleUrls: ['./todo-preview.component.scss']
})
export class TodoPreviewComponent implements OnInit {

  @Input() todo: TodoModel


  constructor(public todoService: TodoServiceService) { }

  ngOnInit(): void {
  }

  handleToggle() {
    this.todoService.toggleTodo(this.todo)
  }

  handleDelete() {
    this.todoService.deleteTodo(this.todo._id)
  }


}


