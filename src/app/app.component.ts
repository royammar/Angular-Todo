import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from './todo-service.service';
import TodoModel from './models/todo.model';
import { CloudinaryServiceService } from './cloudinary-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public todos: TodoModel[] = []
  public newTodo: TodoModel = { txt: '', isActive: true, image: "https://res.cloudinary.com/dxxsrzs8t/image/upload/v1595183130/ihedpoytx6ibzzlngnft.jpg" }
  filterBy: string = ''
  constructor(public todoService: TodoServiceService, public cloudinaryService: CloudinaryServiceService) { }


  handleSave() {
    if (this.newTodo.txt === '') return
    this.todoService.saveTodo(this.newTodo)
    this.newTodo = { txt: "", isActive: true, image: "https://res.cloudinary.com/dxxsrzs8t/image/upload/v1595183130/ihedpoytx6ibzzlngnft.jpg" }
    document.getElementById("label").innerText = "Upload Image"

  }

  async handleFileUpload(event) {
    let todoImage = await this.cloudinaryService.uploadImg(event)
    this.newTodo.image = todoImage.url
    document.getElementById("label").innerText = event.target.files[0].name
  }


  handleSort() {
    this.todoService.sortTodos()
  }


  ngOnInit() {
    this.todoService.loadTodos(null);
    this.todoService.todos$.subscribe((todos) => {
      this.todos = todos;
    })
  }

  onFilter(filterBy) {
    this.filterBy = filterBy
    this.todoService.loadTodos(filterBy)
  }
}
