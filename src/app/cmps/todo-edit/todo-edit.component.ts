import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoServiceService } from 'src/app/todo-service.service';
import TodoModel from 'src/app/models/todo.model';
import { Location } from '@angular/common'
import { CloudinaryServiceService } from 'src/app/cloudinary-service.service';


@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {
  todo: TodoModel
  constructor(private location: Location, public cloudinaryService: CloudinaryServiceService, public todoService: TodoServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id')
      this.todoService.getTodoById(id).subscribe((todo) => {
        this.todo = todo
      })
    })
  }


  handleSave() {
    this.todoService.saveTodo(this.todo)
    this.location.back()
  }


  async handleFileUpload(event) {
    let todoImage = await this.cloudinaryService.uploadImg(event)
    this.todo.image = todoImage.url

  }

}
